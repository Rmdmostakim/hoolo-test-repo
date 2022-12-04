import { createSlice } from "@reduxjs/toolkit";

const StoreSlice = createSlice({
    name:'store',
    initialState:{
        store: null,
    },
    reducers:{
        setStores:(state,action)=>{
            state.store = action.payload;
        }
    }
});

export const {setStores} = StoreSlice.actions;
export default StoreSlice.reducer;