import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item =state.products.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity +=action.payload.quantity;
            }
            else{
                state.products.push(action.payload)
            }
            // state.products.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.products= state.products.filter((item)=>item.id!==action.payload.id)
        },
        clearCart:(state)=>{
            state.products=[]
        }
    }
})

export const{addToCart , removeFromCart, clearCart} = amazonSlice.actions;
export default amazonSlice.reducer; 