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
      if(state.count - 1 < 0){
        return {...state,count: state.count};
      }else{
        return {...state,count: state.count - 1};
      }
      case 'set':
        return {...state,count: action.count};  
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
        ...state.count,cart_products: 
        [{          
          name: action.product_name,          
          price: action.product_price,          
          img_path: action.img_path ,
          ref_id:action.id      
        }, 
          ...state.cart_products]}
      case 'CartRemove':        
 
      return {
        ...state,
        cart_products: state.cart_products.filter(item => item.name !== action.product_name)
      }
  }
}