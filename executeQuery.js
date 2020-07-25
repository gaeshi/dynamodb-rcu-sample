const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10", region: "us-east-1" });

const params = {
  ExpressionAttributeValues: { ":v1": { S: "foo" } },
  KeyConditionExpression: "ProductionLotId = :v1",
  TableName: "Orders",
  ReturnConsumedCapacity: "INDEXES",
};

dynamodb.query(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(JSON.stringify(data));
});
