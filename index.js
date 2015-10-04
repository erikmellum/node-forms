var formdata = require('form-data')
var fs       = require('fs')

var fd = new formdata();
fd.append('attachment', fs.createReadStream('/Users/emellum/Desktop/projects/launchpad_projects/tester/../tester.zip'))
fd.append('name', 'test');
fd.append('description', 'test');
fd.append('token', 'b3b2a169f471742feb38e263c5043812fc71b654');
fd.append('project_id', 2);
fd.submit('https://host.zurb.com/api/v1/prototypes', function(err, data){
  console.log(err);
  console.log(data);
})
