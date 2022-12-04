import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFollow = createAsyncThunk('follow/getFollow',async()=>{
    const userId = localStorage.getItem('id');
    const res = axios.get(`https://shop.hoolo.live/api/following/${userId}`);
    return res;
})

const FollowSlice = createSlice({
    name: 'follow',
    initialState:{
        follow: [],
        followLoading:null,
        followSuccess:null,
        followError:null,
    },
    reducers:{
        setFollow:(state,action)=>{
            if(state.follow.includes(action.payload)){
                state.follow = state.follow.filter((id) => id !== action.payload);
            }else{      
                state.follow.push(action.payload);
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getFollow.pending, (state)=>{
            state.followLoading = true;
            state.followError = null;
            state.followSuccess = null;
            state.follow = [];
        });
        builder.addCase(getFollow.fulfilled, (state,action)=>{
            const {status,data} = action.payload;
            if(status === 200){
                state.follow = null;
                state.follow = data;
                state.followSuccess = true;
            }else{
                state.followError = true;
            }
            state.followLoading = false;
        });
        builder.addCase(getFollow.rejected, (state)=>{
            state.followError = true;
            state.followLoading = null;
            state.followSuccess = null;
        });
    }
});
export const {setFollow} = FollowSlice.actions;
export default FollowSlice.reducer;