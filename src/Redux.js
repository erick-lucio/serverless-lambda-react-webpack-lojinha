  export const estadoInicial ={
      count:0,
      objects:[]
}
  export function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {...state,count: state.count + 1};
      case 'decrement':
        return {...state,count: state.count - 1};
      case 'ProductAdd':          
        return {
          ...state,objects: 
          [{          
            name: action.product_name,          
            price: action.product_price,          
            img_path: action.obj1       
          }, 
            ...state.objects]}
    }
  }