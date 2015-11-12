var formdata = require('form-data')
var fs       = require('fs')
var http     = require('http')
var util     = require('util')
var multiparty = require('multiparty')


var fd = new formdata();
fd.append('site[upload]', fs.createReadStream('/path/to/file.zip'))
fd.append('site[name]', 'Test Title');
fd.append('site[description]', 'This is a test description.');
// fd.append('project_id', 2);
var headers = fd.getHeaders();
headers.Authentication = 'b889f114-b345-4214-b5fc-d68ed6cf7211';
var request = http.request({
  method: 'POST',
  host: 'code.notable.dev',
  // port: 3000,
  path: '/api/yeti_launch/sites',
  headers: headers
});

fd.pipe(request);

request.on('response', function(res) {
  console.log(res.statusCode);
  console.log(res);
})
.on('error', function(res) {
  console.log(res);
});

/**fd.submit('localhost:8019/upload', function(err, data){
  console.log(err);
  console.log(data.hosted_url);
})**/
