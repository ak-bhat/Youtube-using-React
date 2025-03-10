import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache:{},
    selectedQuery:""
  },
  reducers: {
    cacheResults: (state, action) => {
      // return { ...action.payload, ...state };      
      state.cache = Object.assign(state.cache, action.payload)
    },
    selectedQuery: (state, action) =>{
      state.selectedQuery = action.payload;
    }
  },
});

export const { cacheResults, selectedQuery } = searchSlice.actions;

export default searchSlice.reducer;
