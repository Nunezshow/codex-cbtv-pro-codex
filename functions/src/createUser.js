const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient();

exports.handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event, null, 2));

  try {
    const body = JSON.parse(event.body || "{}");
    if (!body.userId || !body.name || !body.email) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Missing required fields: userId, name, email" }),
      };
    }

    const params = {
      TableName: process.env.USER_TABLE,
      Item: {
        userId: { S: body.userId },
        name: { S: body.name },
        email: { S: body.email },
        playlists: { L: (body.playlists || []).map(p => ({ S: p })) },
        watchHistory: { L: (body.watchHistory || []).map(w => ({ S: w })) }
      }
    };

    await client.send(new PutItemCommand(params));

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "User created successfully", userId: body.userId }),
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
