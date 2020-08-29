exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: JSON.parse(
      JSON.stringify({
        message:"Hello there",
        status:"Can you hear me?"
    })),
  }
}