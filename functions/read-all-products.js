const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = async (event) => {
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA,
  });
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/products_index"))))
    .then((response) => {
      const todoRefs = response.data;

      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref);
      });

      return client.query(getAllTodoDataQuery).then((res) => {
        return {
          statusCode: 200,
          body: JSON.stringify(res),
        };
      });
    })
    .catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
