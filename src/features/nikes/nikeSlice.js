//import { Nikes } from "../../app/shared/NIKE";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url =
  "https://sneaker-db-stockx-light-version.p.rapidapi.com/relatedProducts?urlKey=air-jordan-1-high-zoom-air-cmft-2-honeydew";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e02c900a5mshc0506a40ea670bbp156b17jsn3411a2d02051",
    "X-RapidAPI-Host": "sneaker-db-stockx-light-version.p.rapidapi.com",
  },
};

export const fetchNike = createAsyncThunk("nikes/fetchnike", async () => {
  const response = await fetch(url, options);
  if (!response.ok) {
    return Promise.reject("Unable to fetch data " + response.status);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  nikeArray: [],
  isLoading: true,
  errMsg: "",
};

const nikeSlice = createSlice({
  name: "nikes",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNike.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.nikeArray = action.payload;
    },
    [fetchNike.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const nikeReducer = nikeSlice.reducer;

export const selectAllNike = (state) => {
  const items = state.nikes.nikeArray;
  console.log(items);
  const result = items
    ? items.map((item) => {
        return {
          id: item.node.id,
          path: "nike",
          name: item.node.name,
          image: item.node.media.smallImageUrl,
          rating: 3,
          description: item.node.model,
        };
      })
    : "";
  return result;
};

export const selectSampleNike = (state) => {
  const items = state.nikes.nikeArray;
  console.log(items);
  const result = items
    ? items.map((item) => {
        return {
          id: item.node.id,
          path: "nike",
          name: item.node.name,
          image: item.node.media.smallImageUrl,
          rating: 3,
          description: item.node.model,
        };
      })
    : "";
  return result.slice(0, 3);
  console.log(result);

  // return stateItem
  //   ? {
  //       id: stateItem.node.id,
  //       path: "nike",
  //       name: stateItem.node.primaryCategory,
  //       image: stateItem.node.media.smallImageUrl,
  //       rating: 3,
  //       description: stateItem.node.model,
  //     }
  //   : null;
};

export const selectOneNike = (state) => {
  let item = state.nikes.nikeArray;
  const index = Math.floor(Math.random() * item.length());
  let stateItem = item[index];

  return stateItem
    ? {
        id: stateItem.node.id,
        path: "nike",
        name: stateItem.node.primaryCategory,
        image: stateItem.node.media.smallImageUrl,
        rating: 3,
        description: stateItem.node.model,
      }
    : null;
};

export const selectNikeById = (id) => (state) => {
  const item = state.nikes.nikeArray.find((nike) => nike.node.id === id);

  console.log(item);

  const result = item
    ? {
        id: item.node.id,
        path: "nike",
        name: item.node.name,
        image: item.node.media.smallImageUrl,
        rating: 3,
        description: item.node.model,
        node: item.node,
      }
    : "";

  return result;
};
