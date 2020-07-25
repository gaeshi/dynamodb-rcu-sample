const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10", region: "us-east-1" });

const orders = [];
for (let i = 0; i < 100; i++) {
  // Uncomment the following line to create an approximately 1KB large item
  // orders.push({ ProductionLotId: { S: "foo" }, SerialNumber: { N: `${i}` }, Payload: { S: new Array(950).fill("A").join("") } });
  orders.push({ ProductionLotId: { S: "foo" }, SerialNumber: { N: `${i}` } });
  orders.push({ ProductionLotId: { S: "bar" }, SerialNumber: { N: `${i}` } });
  orders.push({ ProductionLotId: { S: "baz" }, SerialNumber: { N: `${i}` } });
}

while (orders.length > 0) {
  // dynamodb.batchWriteItem accepts only up to 25 items per batch
  const count = orders.length > 25 ? 25 : orders.length;
  const params = {
    RequestItems: { Orders: orders.slice(0, count).map((o) => ({ PutRequest: { Item: o } })) },
    ReturnConsumedCapacity: "INDEXES",
    ReturnItemCollectionMetrics: "SIZE",
  };
  dynamodb.batchWriteItem(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(JSON.stringify(data));
  });
  orders.splice(0, count);
}
