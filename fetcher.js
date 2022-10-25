const args = process.argv.splice(2);
const request = require('request');
const fs = require('fs');
const fetch = function(url, localFilePath) {
request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let content =  body;
  let bytes = content.length //something
  fs.writeFile(localFilePath, content, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${bytes} bytes to ${localFilePath}`)
  });// Print the HTML for the Google homepage.
}); //net.createConnection({ 
//     host: url,
//     port: 80
//   });
//   conn.setEncoding('UTF8');
 
//   conn.on('connect', () => {
//    conn.write(`GET / HTTP/1.1\r\n`);
//    conn.write(`Host: ${url}\r\n`);
//    conn.write(`\r\n`);
//  });
//  /** 
//   * HTTP Response
//   * After request is made, the HTTP server should send us HTTP data via our TCP connection
//   * Print the data to the screen, and end the connection
//   */
//   conn.on('data', (data) => {
//    console.log(data);
//    conn.end();
}
fetch(args[0], args[1])