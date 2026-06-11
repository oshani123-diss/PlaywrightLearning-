// config/apps/insurer.config.js
const insurerConfig = {

  name: 'Insurer Web',

  baseURL: process.env.INSURER_BASE_URL,

  credentials: {
    username: process.env.INSURER_USERNAME,
    password: process.env.INSURER_PASSWORD,
  },

  timeouts: {
    PAGE_LOAD_TIMEOUT:    200000,
    NETWORK_IDLE_TIMEOUT:  90000,
    ELEMENT_TIMEOUT:       10000,
  },

  db: {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      trustServerCertificate: true,
    },
  },

};

module.exports = insurerConfig;