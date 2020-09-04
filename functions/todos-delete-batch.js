/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async event => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA
  }) 
  const id = event.queryStringParameters.id
  // construct batch query from IDs
  const deleteAllCompletedTodoQuery = data.ids.map((id) => {
    return q.Delete(q.Ref(`classes/todos/${id}`))
  })
  // Hit fauna with the query to delete the completed items
  return client.query(deleteAllCompletedTodoQuery)
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
