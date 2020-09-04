const faunadb = require('faunadb')
const q = faunadb.query




// verifica a key do fauna
if (process.env.SECRET_KEY_FAUNA) {
  createFaunaDB(process.env.SECRET_KEY_FAUNA).then(() => {
    console.log('Fauna Database Criado')
    
  })
}

/* Constructor */
function createFaunaDB(key) {
  console.log('Create the fauna database schema!')
  const client = new faunadb.Client({
    secret: key
  })

  /* Create Products collection */
  const createProducts = client.query(
    q.Create(q.Ref('classes'), { 
      name: 'products' 
    }))
    .then(() => {
      return client.query(
        q.Create(q.Ref('indexes'), {
          name: 'products_index',
          source: q.Ref('classes/products')
        }))
    }).catch((e) => {
      // Verifica se o banco ja existe
      if (e.requestResult.statusCode === 400 && e.message === 'instance not unique') {
        console.log('Banco ja existe')
       
        throw e
      }
    })
    //Create Purchases collection
    const createPurchases = client.query(
      q.Create(q.Ref('classes'), { 
        name: 'purchases' 
      }))
      .then(() => {
        return client.query(
          q.Create(q.Ref('indexes'), {
            name: 'purchases_index',
            source: q.Ref('classes/purchases')
          }))
      }).catch((e) => {
        // Verifica se o banco ja existe
        if (e.requestResult.statusCode === 400 && e.message === 'instance not unique') {
          console.log('Banco ja existe')
         
          throw e
        }
      })
      return createProducts,createPurchases
}

