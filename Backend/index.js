const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

// AWS config (correct way)
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1"
});

// DynamoDB setup
const docClient = new AWS.DynamoDB.DocumentClient();

// API Route to get data from DynamoDB
app.get('/get-sensor-data', async (req, res) => {
    const params = {
        TableName: "SensorDataR"
    };

    try {
        const data = await docClient.scan(params).promise();
        res.json(data.Items);   // Only send items from DynamoDB
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not retrieve data" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Frontend function to get sensor data
const getSensorData = async () => {
    try {
        let res = await fetch("http://15.206.194.60:5000/get-sensor-data");
        let data = await res.json();
        console.log(data);  // See your DynamoDB data here!
    } catch (err) {
        console.error(err);
    }
};

// Call getSensorData when you want to fetch the data from DynamoDB
// For example, you can call getSensorData() on page load or button click.
