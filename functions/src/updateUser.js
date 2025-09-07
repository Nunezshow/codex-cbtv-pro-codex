const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient();

exports.handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event, null, 2));

  try {
    const { userId } = event.pathParameters || {};
    if (!userId) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing userId in path" }),
      };
    }

    const body = JSON.parse(event.body || "{}");

    // Build the update expression dynamically
    let updateExp = [];
    let expAttrNames = {};
    let expAttrValues = {};

    if (body.name) {
      updateExp.push("#n = :name");
      expAttrNames["#n"] = "name";
      expAttrValues[":name"] = { S: body.name };
    }

    if (body.email) {
      updateExp.push("#e = :email");
      expAttrNames["#e"] = "email";
      expAttrValues[":email"] = { S: body.email };
    }

    if (body.playlists) {
      updateExp.push("#p = :playlists");
      expAttrNames["#p"] = "playlists";
      expAttrValues[":playlists"] = { L: body.playlists.map((p) => ({ S: p })) };
    }

    if (body.watchHistory) {
      updateExp.push("#w = :watchHistory");
      expAttrNames["#w"] = "watchHistory";
      expAttrValues[":watchHistory"] = { L: body.watchHistory.map((w) => ({ S: w })) };
    }

    if (updateExp.length === 0) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "No valid fields provided for update" }),
      };
    }

    const params = {
      TableName: process.env.USER_TABLE,
      Key: { userId: { S: userId } },
      UpdateExpression: "SET " + updateExp.join(", "),
      ExpressionAttributeNames: expAttrNames,
      ExpressionAttributeValues: expAttrValues,
      ReturnValues: "ALL_NEW",
    };

    const result = await client.send(new UpdateItemCommand(params));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "User updated successfully", attributes: result.Attributes }),
    };
  } catch (err) {
    console.error("ERROR:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
