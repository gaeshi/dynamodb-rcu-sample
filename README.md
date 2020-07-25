# DynamoDB CapacityUnits demo

A sample code to demonstrate WCU consumption on BatchWriteItem and RCU on Query API calls for Amazon DynamoDB.

## How to use

### Prerequisites

1. Install Node.js, NPM.
1. Configure AWS credentials (see [AWS guide](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html)).

### Run the sample

1. Install dependencies: `npm i`
2. Create table: `npm run createTable`
3. Confirm that the table is created in AWS console.
4. Populate data: `npm run executeBatchWrite`
5. Execute query: `npm run executeQuery`

Try to modify the respective scripts and experiment with behavior.
