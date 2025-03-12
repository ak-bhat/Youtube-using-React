import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage: (state, action) =>{
            state.messages.splice(LIVE_CHAT_COUNT,1)   //Removes one elememnt if message length becomes 20. Restrict msgs to 20
            state.messages.unshift(action.payload)   //Unshift because newer messages should show in bottom first 
        }
    }
})

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;