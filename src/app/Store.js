import { configureStore } from '@reduxjs/toolkit';
import FollowReducer from '../features/FollowSlice';
import StoreReducer from '../features/StoreSlice';
import ProfileReducer from '../features/ProfileSlice';
import CartReducer from '../features/CartSlice';
import AppReducer from '../features/AppSlice';
const store = configureStore({
    reducer: {
      follow: FollowReducer,
      store: StoreReducer,
      profile: ProfileReducer,
      cart:CartReducer,
      app:AppReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['cart/getCart/fulfilled','cart/removeCart/fulfilled','cart/addCart/fulfilled',
                                'app/getVideo/fulfilled','app/getBrand/fulfilled','app/getStore/fulfilled',
                                'app/getComment/fulfilled','app/getCategory/fulfilled','follow/getFollow/fulfilled'],
            },
        }),
  });
  
  export default store;
