const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10', region: 'us-east-1'});

const params = {
    AttributeDefinitions: [
        {AttributeName: "ProductionLotId", AttributeType: "S"},
        {AttributeName: "SerialNumber", AttributeType: "N"},
    ],
    KeySchema: [
        {AttributeName: "ProductionLotId", KeyType: "HASH"},
        {AttributeName: "SerialNumber", KeyType: "RANGE"}
    ],
    ProvisionedThroughput: {ReadCapacityUnits: 5, WriteCapacityUnits: 5},
    TableName: "Orders"
};

dynamodb.createTable(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
});
