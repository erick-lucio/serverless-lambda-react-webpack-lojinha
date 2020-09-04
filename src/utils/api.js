

function create(data) {
  return fetch('/.netlify/functions/todos-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

function readAllProducts(){
  return fetch('/.netlify/functions/todos-read-products').then((response) => {
    return response.json()
  })
}

function update(todoId, data){
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

function deleteTodo(todoId){
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

function batchDeleteTodo(todoIds){
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
   create,
   readAllProducts,
   update,
   deleteTodo,
   batchDeleteTodo
}
