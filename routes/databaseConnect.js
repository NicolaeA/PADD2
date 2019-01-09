var pg = require('pg');

var connection = function (){
   var client = new pg.Client('postgres://postgres:parola@127.0.0.1:5432/test');
    
    //var client = new pg.Client('postgres://postgres:parola@172.26.136.17:5432/test');
    client.connect();
    return client;

};

module.exports = connection;