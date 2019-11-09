
module.exports = {
   development: {
       client: 'mysql',
       connection: {
           host: 'gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
           user: 'mobbm80vegqkaig2',
           password: 'ckgx5ys4obu3ke0k',
           database: 'yymb081jp7elblpg',
           charset: 'utf8'
       },
       migrations: {
           directory: __dirname + '/db/migrations',
       },
       seeds: {
           directory: __dirname + '/db/seeds'
       }
   }
};

