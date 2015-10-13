var formdata = require('form-data')
var fs       = require('fs')
var http     = require('http')
var util     = require('util')
var multiparty = require('multiparty')


var fd = new formdata();
fd.append('attachment', fs.createReadStream('/Users/emellum/Desktop/projects/launchpad_projects/apps.zip'))
fd.append('name', 'test');
fd.append('description', 'test');
fd.append('token', 'b3b2a169f471742feb38e263c5043812fc71b654');
fd.append('project_id', 2);
var headers = fd.getHeaders();
headers.Authentication = 'b3b2a169f471742feb38e263c5043812fc71b654'
var request = http.request({
  method: 'post',
  host: 'localhost',
  port: 3000,
  path: '/prototypes',
  headers: headers
});

fd.pipe(request);

request.on('response', function(res) {
  console.log(res.statusCode);
  console.log(res);
  console.log(res.hosted_url);
});
/**fd.submit('localhost:8019/upload', function(err, data){
  console.log(err);
  console.log(data.hosted_url);
})**/
