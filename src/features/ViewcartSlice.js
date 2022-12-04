import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const ViewcartSlice = createSlice({
    name: 'viewcart',
    initialState:{
        products: null,
        subtotal: 0,
        selected: [],
        selectedPro:[],
    },
    reducers:{
        setProducts:(state,action)=>{
            state.selected = [];
            state.selectedPro = [];
            state.products = action.payload; 
            state.products.map((product)=>{
                return state.selected.push(product.id);
            });
            state.products.map((product)=>{
                return state.selectedPro.push(product);
            });
            state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
        },
        removeProducts:(state,action)=>{
            state.products = state.products.filter((product)=> product.id !== action.payload);
            axios.post('https://shop.hoolo.live/api/removeproduct', {id: action.payload});
            state.selected = state.selected.filter((id)=> id !== action.payload);
            state.selectedPro = state.selectedPro.filter((product)=> product.id !== action.payload);
            state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
        },
        cartQuantity: (state, action) => {
            const { type, id } = action.payload;
            const product = state.products.filter((product) => product.id === id);
            const { product_min_order_qty:min,product_max_order_qty:max,product_stock:stock,qty, semi_total } = product[0];
            let Max = 0;
            if(max>stock){
                Max = stock;
            }else{
                Max = max;
            }
            if (type === 'increment') { 
                if(qty<Max){
                    product[0].qty = qty + 1;
                    product[0].semi_total = semi_total + semi_total / qty;

                    if(state.selected.includes(id)){
                        const product = state.selectedPro.filter((product) => product.id === id);
                        const { qty, semi_total } = product[0];
                        product[0].qty = qty + 1;
                        product[0].semi_total = semi_total + semi_total / qty;
                        state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
                    }
                }
            }
            if (type === 'decrement') {
                if (qty > min && qty>1) {
                    product[0].qty = qty - 1;
                    product[0].semi_total = semi_total - semi_total / qty;

                    if(state.selected.includes(id)){
                        const product = state.selectedPro.filter((product) => product.id === id);
                        const { qty, semi_total } = product[0];
                        product[0].qty = qty - 1;
                        product[0].semi_total = semi_total - semi_total / qty;
                        state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
                    }
                }
            }
        },
        selectDeselect:(state,action)=>{
            if(!state.selected.includes(action.payload)){
                state.selected.push(action.payload);
                const product = state.products.filter((product)=> product.id === action.payload)
                state.selectedPro.push(product[0]);
                state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
            }else{
                state.selected = state.selected.filter((data)=>data !== action.payload);
                state.selectedPro = state.selectedPro.filter((product)=>product.id !== action.payload);
                state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
            }
        },
        selectAll:(state)=>{
            if(state.selected.length >0 && state.selected.length <= state.products.length){
                state.selected = [];
                state.selectedPro = [];
                state.subtotal = 0;
            }else{
                state.products.map((product)=>{
                    return state.selected.push(product.id);
                });
                state.products.map((product)=>{
                    return state.selectedPro.push(product);
                });
                state.subtotal = state.selectedPro.reduce((previousValue, currentValue) => previousValue + currentValue.semi_total,0);
            }
        },
    }
});
export const {setProducts,removeProducts,cartQuantity,selectDeselect,selectAll,getSelectedPro,orderConfirmed} = ViewcartSlice.actions;
export default ViewcartSlice.reducer;