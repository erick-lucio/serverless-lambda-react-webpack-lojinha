const faunadb = require("faunadb");

const q = faunadb.query;

exports.handler = async (event) => {
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA,
  });
  const data = JSON.parse(event.body);
  const id = event.queryStringParameters.id;

  return client
    .query(q.Update(q.Ref(`classes/products/${id}`), { data }))
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
