const connection = require("./connect");

module.exports = async (q, params) => {
  const conn = await connection().catch((e) => { });
  return new Promise((resolve, reject) => {
    const handler = (error, result) => {
      conn.end();
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    };
    conn.query(q, params, handler);
  });
};
