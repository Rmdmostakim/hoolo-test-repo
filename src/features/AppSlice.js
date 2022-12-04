import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'https://shop.hoolo.live/api/';

export const getVideo = createAsyncThunk('app/getVideo',async()=>{
    const res = await axios.get(`${baseUrl}AllDetails`);
    return res;
});

export const getBrand = createAsyncThunk('app/getBrand',async()=>{
    const res = await axios.get(`${baseUrl}brands`);
    return res;
});

export const getStore = createAsyncThunk('app/getStore',async()=>{
    const res = await axios.get(`${baseUrl}allstores`);
    return res;
});

export const getCategory = createAsyncThunk('app/getCategory',async()=>{
    const res = await axios.get(`${baseUrl}allcategories`);
    return res;
});

export const getComment = createAsyncThunk('app/getComment',async()=>{
    const res = await axios.get(`${baseUrl}all-comments`);
    return res;
});

const AppSlice = createSlice({
    name: 'app',
    initialState:{
        //videos state
        videos:null,
        comments: null,
        likes:null,
        products:null,
        users:null,
        follows:null,
        videoLoading:null,
        videoSuccess:null,
        videoError: null,
        //brands state
        brands:null,
        brandLoading:null,
        brandSuccess:null,
        brandError: null,
        //store state
        stores:null,
        storeLoading:null,
        storeSuccess:null,
        storeError: null,
        //category state
        categories:null,
        catLoading:null,
        catSuccess:null,
        catError: null,
        //search
        searchValue:'',
        showSearch:false,
    },
    reducers:{
        showFilter: (state,action)=>{
            state.showSearch = action.payload;
        },
        filter:(state,action)=>{
            state.searchValue = action.payload;
        },
        clearFilter : (state)=>{
            state.searchValue = '';
            state.showSearch= false;
        }
    },
    extraReducers: (builder)=>{
        //videos
        builder.addCase(getVideo.pending, (state)=>{
            state.videoLoading = true;
            state.videoError = null;
            state.videoSuccess = null;
            state.videos = null;
        });
        builder.addCase(getVideo.fulfilled,(state,action)=>{
            const {status,data} = action.payload;
            if(status === 200){
                state.videos = data.video;
                state.comments = data.comments;
                state.likes = data.likes;
                state.products = data.products;
                state.users = data.users;
                state.follows = data.follows;
                state.videoSuccess = true;
            }else{
                state.videoError = null;
                state.videos = null;
                state.videoSuccess = null;
            }
            state.videoLoading = null;
        });
        builder.addCase(getVideo.rejected,(state)=>{
            state.videoLoading = null;
            state.videoError = true;
            state.videoSuccess = null;
            state.videos = null;
        });
        //brnads
        builder.addCase(getBrand.pending,(state)=>{
            state.brandLoading = true;
            state.brandError = false;
        });
        builder.addCase(getBrand.fulfilled,(state,action)=>{
            const {status,data} = action.payload;
            if(status === 200){
                state.brands = data;
            }
            state.brandLoading = false;
        });
        builder.addCase(getBrand.rejected,(state)=>{
            state.brandLoading = false;
            state.brandError = true;
        });
        //stores
        builder.addCase(getStore.pending,(state)=>{
            state.storeLoading = true;
            state.storeError = null;
            state.storeSuccess = null;
        });
        builder.addCase(getStore.fulfilled,(state,action)=>{
            const {status,data} = action.payload;
            if(status === 200){
                state.stores = data;
                state.storeSuccess = true;
            }else{
                state.storeSuccess = null;
                state.storeError = true;
            }
            state.storeLoading = null;
        });
        builder.addCase(getStore.rejected,(state)=>{
            state.storeLoading = null;
            state.storeError = true;
            state.storeSuccess = null;
        });
        //categories 
        builder.addCase(getCategory.pending,(state)=>{
            state.catLoading = true;
            state.catError = null;
            state.catSuccess = null;
        });
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            const {status,data} = action.payload;
            if(status === 200){
                state.categories = data;
                state.catSuccess = true;
            }else{
                state.catError = true;
                state.catSuccess = null;
            }
            state.catLoading = false;
        });
        builder.addCase(getCategory.rejected,(state)=>{
            state.catLoading = null;
            state.catSuccess = null;
            state.catError = true;
        });
        //comments
        builder.addCase(getComment.fulfilled,(state,action)=>{
            const {status,data} = action.payload;
            if(status === 200){
                state.comments = null;
                state.comments = data;
            }
        });
    }
});
export const {showFilter,filter,clearFilter,addComment,updateComment,deleteComment} = AppSlice.actions;
export default AppSlice.reducer;