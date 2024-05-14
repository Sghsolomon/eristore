//import { Hugos } from "../../app/shared/HUGO";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url =
  "https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=20";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e02c900a5mshc0506a40ea670bbp156b17jsn3411a2d02051",
    "X-RapidAPI-Host": "sneaker-database-stockx.p.rapidapi.com",
  },
};

export const fetchSneaker = createAsyncThunk(
  "retroNikes/fetchSneakers",
  async () => {
    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject("Unable to fetch data " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  jordanRetro: [],
  isLoading: true,
  errMsg: "",
};

const sneakerSlice = createSlice({
  name: "retro",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSneaker.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSneaker.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.jordanRetro = action.payload;
    },
    [fetchSneaker.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const sneakerReducer = sneakerSlice.reducer;

export const selectAllSneaker = (state) => {
  return state.nikes.jordanRetro;
};

export const selectOneSneaker = (state) => {
  const stateItem = state.nikes.jordanRetro[0];
  const result = state.nikes.jordanRetro.map((item, index) => {
    return {
      id: stateItem.node.id,
      path: "nike",
      name: stateItem.node.primaryCategory,
      image: stateItem.node.media.smallImageUrl,
      rating: 3,
      description: stateItem.node.model,
    };
  });

  console.log(result);

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

export const selectSneakerById = (id) => (state) => {
  return state.nikes.jordanRetro.find((nike) => nike.id === parseInt(id));
};

// export const selectAllHugo = (state) => {
//   return null;
// };

// export const selectOneHugo = () => {
//   const selectOne = 2;
//   return Hugos.find((hugo) => {
//     return hugo.id === selectOne;
//   });
// };

// export const selectHugoById = (hugoId) => {
//   return Hugos.find((hugo) => {
//     return hugo.id === hugoId;
//   });
// };
