exports.handler = async event => {
    import faunadb from 'faunadb' 
    const faunaQuery = faunadb.query
    const client = new faunadb.Client({
    secret: "fnAD0ed20pACEsNDucZcac2u4agRQ3cNIU-2O71V"
    })
    faunaQuery.CreateCollection
    return client.query(faunaQuery.Create(faunaQuery.Ref("classes/todos"), todoItem))
    .then((response) => {
      console.log("success", response)
      /* Success! return the response with statusCode 200 */
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }).catch((error) => {
      console.log("error", error)
      /* Error! return the error with statusCode 400 */
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
  }