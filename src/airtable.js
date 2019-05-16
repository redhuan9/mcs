var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyGKLkWdLpLuCG5e'}).base('app4WiQv0OUSpr2d2');

base('Site Name').find('recEBrzdrlHKpaRL2', function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record);
});