
const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = async (event) => {


  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA,
  });

  const data = JSON.parse(event.body);
  console.log("Function `todo-create` invoked", data);
  const todoItem = {
    data: data,
  };

  return client
    .query(q.Create(q.Ref("classes/products"), todoItem))
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
