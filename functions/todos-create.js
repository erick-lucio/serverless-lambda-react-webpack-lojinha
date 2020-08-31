/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query
//SECRET_KEY_FAUNA
/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  const subject = event.queryStringParameters.name || "world"
  console.log("subject - : " + subject)
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA
  })  
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log('Function `todo-create` invoked', data)
  const todoItem = {
    data: data
  }
  /* construct the fauna query */
  return client.query(q.Create(q.Ref('classes/todos'), todoItem))
    .then((response) => {
      console.log('success', response)
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}