//import { Nikes } from "../../app/shared/NIKE";
import { compose, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const datas = [
  {
    _id: "66d2296faa6a597f3443d151",
    name: "Bicoastal",
    image:
      "https://images.stockx.com/images/Air-Jordan-1-High-Zoom-Air-CMFT-2-Bicoastal-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1722012531",
    description: "Jordan 1 High Zoom Air CMFT 2 Bicoastal",
    cost: 65,
    comments: [],
    createdAt: "2024-08-30T20:19:59.486Z",
    updatedAt: "2024-08-30T20:19:59.486Z",
    __v: 0,
  },
  {
    _id: "66d22c98aa6a597f3443d153",
    name: "Dark Powder Blue",
    image:
      "https://images.stockx.com/images/Air-Jordan-1-High-Zoom-Air-CMFT-2-Dark-Powder-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1709761405",
    description: "Jordan 1 High Zoom Air CMFT 2 Dark Powder Blue",
    cost: 65,
    comments: [],
    createdAt: "2024-08-30T20:33:28.621Z",
    updatedAt: "2024-08-30T20:33:28.621Z",
    __v: 0,
  },
  {
    _id: "66d22ccfaa6a597f3443d156",
    name: "Cement University Blue",
    image:
      "https://images.stockx.com/images/Air-Jordan-1-High-Zoom-Air-CMFT-2-Cement-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1698851819",
    description: "Jordan 1 High Zoom Air CMFT 2 Cement University Blue",
    cost: 80,
    comments: [],
    createdAt: "2024-08-30T20:34:23.247Z",
    updatedAt: "2024-08-30T20:34:23.247Z",
    __v: 0,
  },
  {
    _id: "66d22ce0aa6a597f3443d158",
    name: "Muslin Blackened Blue",
    image:
      "https://images.stockx.com/images/Air-Jordan-1-High-Zoom-Air-CMFT-2-Muslin-Blackened-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1688653386",
    description: "Jordan 1 High Zoom Air CMFT 2 Muslin Blackened Blue",
    cost: 73,
    comments: [],
    createdAt: "2024-08-30T20:34:40.195Z",
    updatedAt: "2024-08-30T20:34:40.195Z",
    __v: 0,
  },
];

export default datas;

//const url =  "https://sneaker-db-stockx-light-version.p.rapidapi.com/relatedProducts?urlKey=air-jordan-1-high-zoom-air-cmft-2-honeydew";
const url = "http://localhost:3000/nike";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e02c900a5mshc0506a40ea670bbp156b17jsn3411a2d02051",
    "X-RapidAPI-Host": "sneaker-db-stockx-light-version.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/nike");
    console.log(res);
    if (!res.ok) {
      throw new Error(`HTTP ERROR! status : ${res.status}`);
    }
    const data = await res.json();
    console.log("data");
    console.log(data);
  } catch (error) {
    console.error(`Error fetching data:`, error);
  }
}

getData();
export const fetchNike = createAsyncThunk("nikes/fetchnike", async () => {
  //const response = await fetch(url, options);
  const response = await fetch(url);
  if (!response.ok) {
    return Promise.reject("Unable to fetch data " + response.status);
  }
  const data = await response.json();
  console.log(data);
  return data;
});

const initialState = {
  //nikeArray: [],
  nikeArray: datas,
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
          id: item._id,
          path: "nike",
          name: item.name,
          image: item.image,
          rating: 3,
          description: item.description,
          //node: item.node,
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
  const item = state.nikes.nikeArray;
  const index = Math.floor(Math.random() * item.length);
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
