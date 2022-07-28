const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'id19294439_rootlogin',
      password : '=jJZ]?n_TU/04Ad4',
      database : 'id19294439_root'
    }
  });

module.exports = knex;
