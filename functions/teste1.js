exports.handler = async event =>{
    const subject = event.queryStringParameters.name || "world"
    return{
        statusCose:200,
        body:'alo ${subject}'
    }
}