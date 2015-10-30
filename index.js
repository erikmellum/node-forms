var formdata = require('form-data')
var fs       = require('fs')
var http     = require('http')
var util     = require('util')
var multiparty = require('multiparty')


var fd = new formdata();
fd.append('attachment', fs.createReadStream('/Users/zoran/Downloads/large-file.zip'))
fd.append('name', 'test');
fd.append('description', 'test');
fd.append('token', 'b3b2a169f471742feb38e263c5043812fc71b654');
fd.append('project_id', 2);
var headers = fd.getHeaders();
headers.Authentication = 'b3b2a169f471742feb38e263c5043812fc71b654';
var request = http.request({
  method: 'POST',
  host: 'host.notable.dev',
  // port: 3000,
  path: '/api/v1/prototypes',
  headers: headers
});

fd.pipe(request);

request.on('response', function(res) {
  console.log(res.statusCode);
  console.log(res.prototype_id);
});

/**fd.submit('localhost:8019/upload', function(err, data){
  console.log(err);
  console.log(data.hosted_url);
})**/
