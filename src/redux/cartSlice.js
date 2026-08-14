import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name:'cart',
    initialState:{
        item:[],
        flyProduct:null,
    },
    reducers:{
        addToCart:(state,action)=>{
const { product, from } = action.payload?.product
                ? action.payload
                : { product: action.payload, from: null };           
            if(!product||!product.id) return
            const existing = state.item.find((item)=> item.id===product.id);
            if(existing){
                existing.quantity +=1
            }else{
                state.item.push({...product,quantity:1,packQuantity:product.quantity});
            }
            if(from){state.flyProduct = {product,from,flyId:Date.now()}}

        },
        clearFly:(state) =>{
            state.flyProduct = null;
        },
        removeFromCart:(state,action)=>{
            state.item = state.item.filter((item)=> item.id !== action.payload)
        },
        increment:(state,action)=>{
            const item = state.item.find((item)=>item.id=== action.payload)
            if(item){
                item.quantity +=1;
            }        
        },
        decrement:(state,action)=>{
            const item = state.item.find((item)=>item.id=== action.payload)
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }else{
                state.item = state.item.filter((item)=>item.id !== action.payload)
            }
        },
        clearCart:(state)=>{
            state.item =[]
        },


    },
});

export const {addToCart,removeFromCart,increment,decrement,clearCart,clearFly} = cartSlice.actions;
export default cartSlice.reducer;