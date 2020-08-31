/* Import faunaDB sdk */
const faunadb = require('faunadb')
const getId = require('./utils/getId')
const q = faunadb.query

exports.handler = async event => {
  /* configure faunaDB Client with our secret */
  console.log("event path : "+event.path)
  const subject = event.queryStringParameters.name || "world"
  
  console.log("subject - : " + subject)
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA
  }) 
  //const id = getId(event.path)
  console.log(`Function 'todo-read' invoked. Read id: 2}`)
  return client.query(q.Get(q.Ref(`classes/todos/2`)))
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
