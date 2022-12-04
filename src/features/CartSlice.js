
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import axios from "axios";
const baseUrl = 'https://shop.hoolo.live/api/';

export const getCart = createAsyncThunk('cart/getCart', async () => {
    const userId = localStorage.getItem('id');
    const res = await axios.get(`${baseUrl}get-cart/${userId}`);
    return res;
});

export const addCart = createAsyncThunk('cart/addCart', async (product) => {
    const {id,qty,color,size} = product;
    const userId = localStorage.getItem('id');
    const data = {
        user_id: Number(userId),
        product_id:id,
        quantity:qty,
        color:String(color),
        size:String(size)
    }
    
    const res = await axios.post(`${baseUrl}add-cart`,data);
    return res;
});

export const removeCart = createAsyncThunk('cart/removeCart', async (cartId) => {
    const res = await axios.get(`${baseUrl}remove-cart/${cartId}`);
    return res;
});


const CartSlice = createSlice({
    name:'cart',
    initialState:{
        show: false,
        carts: [],
        products: null,
        selection: [],
        selected: [],
        selectedPro: [],
        subtotal:0,
        error: null,
    },
    reducers:{
        showCart: (state,action)=>{
            state.show = action.payload;
        },
        logoutCart: (state)=>{
            state.carts = null;
        },
        increment: (state,action)=>{
            const getCart = state.carts.filter((cart)=>cart.id === action.payload);
            const getSelect = state.selectedPro.filter((product)=>product.id === action.payload);
            const stock = getCart[0].product.stock;
            const products = state.carts.filter((cart)=>cart.product_id === getCart[0].product_id);
            const qty = products.reduce((cur,next)=>cur+next.qty,0);
            if(qty<stock){
                getCart[0].qty = getCart[0].qty+1;
                if(getSelect.length>0){
                    getSelect[0].qty = getSelect[0].qty+1;
                }
            }
            state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                return sum + cart.product.unit_price*cart.qty;              
               }, 0);
        },
        decrement:(state,action) =>{
            const getCart = state.carts.filter((cart)=>cart.id === action.payload);
            const getSelect = state.selectedPro.filter((product)=>product.id === action.payload);
            const qty = getCart[0].qty;
            if(qty>1){
                getCart[0].qty = getCart[0].qty-1;
                if(getSelect.length>0){
                    getSelect[0].qty = getSelect[0].qty-1;
                }
            }
            state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                return sum + cart.product.unit_price*cart.qty;              
               }, 0);
        },
        selectDeselect:(state,action)=>{
            if(!state.selected.includes(action.payload)){
                state.selected.push(action.payload);
                const cart = state.carts.filter((cart)=> cart.id === action.payload)
                state.selectedPro.push(cart[0]);
                state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                    return sum + cart.product.unit_price*cart.qty;              
                   }, 0);
            }else{
                state.selected = state.selected.filter((data)=>data !== action.payload);
                state.selectedPro = state.selectedPro.filter((cart)=>cart.id !== action.payload);
                state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                    return sum + cart.product.unit_price*cart.qty;              
                   }, 0);
            }
        },
        selectAll:(state)=>{
            if(state.selected.length >0 && state.selected.length <= state.carts.length){
                state.selected = [];
                state.selectedPro = [];
                state.subtotal = 0;
            }else{
                state.carts.map((cart)=>{
                    return state.selected.push(cart.id);
                });
                state.carts.map((cart)=>{
                    return state.selectedPro.push(cart);
                });
                state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                    return sum + cart.product.unit_price*cart.qty;              
                   }, 0);
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.carts = [];
            state.selectedPro = [];
            state.selected = [];
            if (action.payload.status === 200) {
                state.carts = action.payload.data;
                state.carts.map((cart)=>{
                    return state.selected.push(cart.id);
                });
                state.carts.map((cart)=>{
                    return state.selectedPro.push(cart);
                });
                state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                    return sum + cart.product.unit_price*cart.qty;              
                   }, 0);
            }
        });
        builder.addCase(addCart.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.carts = [];
                state.selectedPro = [];
                state.selected = [];
                if (action.payload.status === 200) {
                    state.carts = action.payload.data;
                    state.carts.map((cart)=>{
                        return state.selected.push(cart.id);
                    });
                    state.carts.map((cart)=>{
                        return state.selectedPro.push(cart);
                    });
                    state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                        return sum + cart.product.unit_price*cart.qty;              
                       }, 0);
                       toast.success('Item added to cart successfully!');
                }
            }else{
                toast.error('Item added to cart failed!');
            }
        });
        builder.addCase(addCart.rejected,(action)=>{
            toast.error('server error with status code 500');
        });
        builder.addCase(removeCart.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.carts = state.carts.filter((cart)=>cart.id !== action.payload.data);
                state.selectedPro = state.selectedPro.filter((cart)=>cart.id !== action.payload.data);
                state.selected = state.selected.filter((id)=>id !== action.payload.data);
                state.subtotal = state.selectedPro.reduce(function(sum, cart) {
                    return sum + cart.product.unit_price*cart.qty;              
                   }, 0);
                   toast.success('Item removed successfully!');
            }else{
                toast.error('Item remove failed!');
            }
        });
    }
});

export const {logoutCart,increment,decrement,selectAll,selectDeselect,showCart} = CartSlice.actions;
export default CartSlice.reducer;