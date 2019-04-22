module.exports = {
  jwt_secret: 'jwt_secret',
  database: {
    db: 'saas',
    username: 'root',
    password: 'root',

    // the sql dialect of the database
    // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
    dialect: 'mysql',

    // custom host; default: 127.0.0.1
    host: 'localhost',

    // custom port; default: 3306
    port: 3306,

    // use pooling in order to reduce db connection overload and to increase speed
    // currently only for mysql and postgresql (since v1.5.0)
    pool: {
      maxConnections: 10,
      minConnections: 0,
      maxIdleTime: 30000
    },

    timezone: '+08:00',
    define: {
      timestamps: true,
      createdAt: 'utc_create',
      updatedAt: 'utc_modified',
      charset: 'gbk',
      collate: 'utf8mb4_unicode_ci',//"utf8_general_ci",//


      dialectOptions: {
        collate: "utf8mb4_unicode_ci",//"utf8_general_ci",// 
      }

    },

    dialectOptions: {
      // if your server run on full cpu load, please set trace to false
      trace: true,
    },

    // the storage engine for 'sqlite'
    // default store into ~/.cnpmjs.org/data.sqlite
    // storage: path.join(dataDir, 'data.sqlite'),

    logging: !!process.env.SQL_DEBUG,
    collate: 'utf8_general_ci'
  }
};
