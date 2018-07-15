'use strict';

const http = require('http');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/http.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
    //http://api.tcgplayer.com/{{version}}/catalog/categories?limit=100
    const httpOptions = {
        hostname: 'api.tcgplayer.com',
        port: 80,
        path: '/v1.9.0/catalog/categories?limit=100',
        method: 'GET',
        headers: {
            
        }
    };
    
    const req = http.request(httpOptions, (res) => {
        let body = '';
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            if (res.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            const responseObject = {
              'statusCode': res.statusCode,
              'headers': res.headers,
              'body': body
            };
            callback(null, responseObject);
        });
    });
    req.on('error', callback);
    //req.write(JSON.stringify(event.data));
    req.end();
};
