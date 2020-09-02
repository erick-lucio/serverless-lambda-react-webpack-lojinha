export const estadoInicialCart ={
  cart_products:[]
}
export const estadoInicialCounter ={
  count:0
}
export const estadoInicialProducts ={
  objects_products:[]
}
  export function reducerCounter(state, action) {
    switch (action.type) {
      case 'increment':
        return {...state,count: state.count + 1};
      case 'decrement':
        return {...state,count: state.count - 1};
    }
  }
  export function reducerProducts(state, action) {
    switch (action.type) {
      case 'ProductSet':          
        return {
          ...state.count,objects_products: 
          [{          
            name: action.product_name,          
            price: action.product_price,          
            img_path: action.img_path       
          }, 
            ...state.objects_products]}
      case 'Clear':
        return{
         objects_products:[]
        }
    }
  }
  export function reducerCart(state, action) {
    switch (action.type) {
      case 'CartAdd':          
        return {
          ...state.count,objects_products: 
          [{          
            name: action.product_name,          
            price: action.product_price,          
            img_path: action.img_path       
          }, 
            ...state.objects_products]}
            case 'CartRemove':          
            return {
              ...state.count,objects_products: 
              [{          
                name: action.product_name,          
                price: action.product_price,          
                img_path: action.img_path       
              }, 
                ...state.objects_products]}
    }
  }