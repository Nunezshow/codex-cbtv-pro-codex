// Example AWS Lambda function to fetch a user profile from DynamoDB
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { userId } = event.pathParameters || {};
  try {
    const params = {
      TableName: process.env.USER_TABLE,
      Key: { userId },
    };
    const { Item } = await dynamodb.get(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(Item || {}),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
