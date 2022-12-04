import { createSlice } from "@reduxjs/toolkit";
const ProfileSlice = createSlice({
    name:'profile',
    initialState:{
        id:null,
        name: null,
        email:null,
        mobile: null,
        avatar: null,
        address:'',
        social:null,
        dashboard: false,
    },
    reducers:{
        getProfile:(state)=>{
            state.id = localStorage.getItem('id');
            state.name = localStorage.getItem('name');
            state.email = localStorage.getItem('email');
            state.mobile = localStorage.getItem('mobile');
            state.avatar = localStorage.getItem('avatar');
            state.address = localStorage.getItem('address');
        },
        setProfile:(state,action)=>{
            state.id = action.payload.id;
            state.name =  action.payload.name;
            state.email = action.payload.email;
            state.mobile = action.payload.mobile;
            state.address = action.payload.address;
            
            if(action.payload.social === 1){
                state.social = action.payload.social;
                state.avatar = action.payload.image;
                localStorage.setItem('avatar',action.payload.image);
            }else{
                if(action.payload.image !== null && action.payload.image !== undefined){
                    state.avatar = action.payload.image;
                    localStorage.setItem('avatar',action.payload.image);
                }
            }
            localStorage.setItem('id',action.payload.id);
            localStorage.setItem('name',action.payload.name);
            localStorage.setItem('email',action.payload.email);
            localStorage.setItem('mobile',action.payload.mobile);
            localStorage.setItem('address',action.payload.address);    
        },
        setDashboard:(state,action)=>{
            state.dashboard = action.payload;
        }
    }
});
export const {setProfile,getProfile,setDashboard} = ProfileSlice.actions;
export default ProfileSlice.reducer;