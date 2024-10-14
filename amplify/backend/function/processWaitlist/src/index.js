const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { email, name } = JSON.parse(event.body);
    
    const params = {
        TableName: process.env.WAITLIST_TABLE_NAME,
        Item: {
            email: email,
            name: name,
            timestamp: new Date().toISOString()
        }
    };

    try {
        await docClient.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Successfully joined waitlist' }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error joining waitlist' }),
        };
    }
};