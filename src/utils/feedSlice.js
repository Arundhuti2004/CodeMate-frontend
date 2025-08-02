import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : "feed",
    initialState : null,
    reducers :{
        addFeed : (State , action) =>{
            return action.payload;
        },
    },
});

export default feedSlice.reducer;