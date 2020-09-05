/* Import faunaDB sdk */
const faunadb = require("faunadb");
const q = faunadb.query;
//SECRET_KEY_FAUNA
/* export our lambda function as named "handler" export */
exports.handler = async (event) => {

  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA,
  });
  /* parse the string body into a useable JS object */
  const dataReq = JSON.parse(event.body);
  console.log("Function `todo-create` invoked", dataReq);
  const todoItem = {
    data={dataReq}
  };
  /* construct the fauna query */
  return client
    .query(q.Create(q.Ref("classes/purchases"), todoItem))
    .then((response) => {
      console.log("success", response);
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
