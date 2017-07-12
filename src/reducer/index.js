const listReducer = function (state={listData:[],classData:[],zmlistData:[]},action) {
  switch (action.type) {
    case "getProductInitData":
      var newState = Object.assign({},state,{listData:action.listData});
      return newState;
      break;
    case "getclassInitData":
      var newState = Object.assign({},state,{classData:action.classData});
      return newState;
      break;
    default:
      return state;
  }
};

const cartReducer = function (state={cartData:[]},action) {
  switch (action.type) {
    case "getCartData":
      var newState =  Object.assign({},state,{cartData:action.cartData});
      return newState;
      break
    default:
      return state;
  }
};
const detailReducer = function (state={detailData:[1,2,3,4]},action) {
  switch (action.type) {
    case "getdetailInitData":
      var newState = Object.assign({},state,{detailData:action.detailData});
      return  newState;
      break
    default:
      return state;
  }
};

const gouwucheReducer = function(state={gouwucheData:[]},action){
  switch (action.type) {
    case "getgouwucheData":
      var newState = Object.assign({},state,{gouwucheData:action.gouwucheData});
      return  newState;
      break;
    case "CART_CHANGE_NUM":
      const {index,num} = action.gouwucheData;
      var newState = JSON.parse(JSON.stringify(state));
      newState.gouwucheData[index].number=num;
      return newState;
      break;
     case "CART_DEL_NUM":
      var  {index,id} = action.gouwucheData;
      var newState = JSON.parse(JSON.stringify(state));
      newState.gouwucheData.splice(index,1)
      return newState;
      break; 
    default:
      return state;
  }
}
export {listReducer,cartReducer,detailReducer,gouwucheReducer}
