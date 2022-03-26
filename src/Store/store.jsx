import {configureStore} from "@reduxjs/toolkit";

//reducer
import userReducer from "../Slices/Users/userSlices";

export default configureStore({
  reducer: {
    // reducer
    user: userReducer,
    
  },
});
