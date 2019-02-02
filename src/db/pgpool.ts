let pg = require('pg');
const { Pool, Client } = require('pg');

let pool: any;
let config: any;

try {
  config = {
    user: 'postgres',
    host: 'localhost',
    database: 'pigeonagency',
    password: 'iguane',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 5000,
  }
} catch(err) {
  console.error(err);
}
let db:any=null;
 try{


db = {
  getPool: () => {
    if (pool) return pool;
    pool = new pg.Pool(config);
    return pool;
  }
};
}catch(e){
  console.log(e);
}
export default db; 