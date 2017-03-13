'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();


/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    var entryBody = JSON.parse(event.body);//.body; //JSON.parse(event);
    var tableName = "abbyHeartRatesBpms";
    var nowish = new Date() + "";

    switch (event.httpMethod) {
        case 'DELETE':
            done(new Error(`Unsupported method "${event.httpMethod}"`));
            //dynamo.deleteItem(submitted, done);
            break;
        case 'GET':
            done(new Error(`Unsupported method "${event.httpMethod}"`));
            //dynamo.scan({ TableName: event.queryStringParameters.TableName }, done);
            break;
        case 'POST':
            //dynamo.putItem(JSON.parse(event.body), done);
            var item = Object.assign({
                occurredAt:nowish, id:nowish,
                
            }, entryBody);
            var toPut = {
                "TableName": tableName,
                "Item": item
            };
            dynamo.putItem(toPut, function() {
                done(null, "nice work! " + nowish);
            });
            break;
        case 'PUT':
            done(new Error(`Unsupported method "${event.httpMethod}"`));
            //dynamo.updateItem(JSON.parse(event.body), done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};