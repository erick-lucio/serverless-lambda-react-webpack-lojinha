/* Import faunaDB sdk */
const faunadb = require("faunadb");

const q = faunadb.query;

exports.handler = async (event) => {
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA,
  });
  const id = event.queryStringParameters.id;

  return client
    .query(q.Delete(q.Ref(`classes/products/${id}`)))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
