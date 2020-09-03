
const faunadb = require('faunadb')

const q = faunadb.query
exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  

  
 
  const client = new faunadb.Client({
    secret: process.env.SECRET_KEY_FAUNA
  }) 

  
    return {
      statusCode: 200,  
      body: 
       JSON.stringify({
          message:subject,
          status:event.path,
          t1:event,
          t2:event.body
      }),
    }
  }

