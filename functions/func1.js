
const faunadb = require('faunadb')

const q = faunadb.query

exports.handler = (event, context) => {
  
  const subject = event.queryStringParameters.name || "world"
  
 
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA
  }) 

  console.log(`Function 'todo-read' invoked. Read id: 2}`)
  return {
      statusCode:200,
      body:JSON.stringify({
        envP:event.path,
        subject:subject
      })
  }
}
