import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

export const fetchNike = createAsyncThunk("nikes/fetchnike", async () => {
  const response = await fetch(baseUrl + "nikes/");
  if (!response.ok) {
    return Promise.reject("Unable to fetch data " + response.status);
  }
  const data = await response.json();
  console.log(data);
  return data;
});

export const postComment = createAsyncThunk(
  "nikes/postComment",
  async (comment) => {
    const bearer = "Bearer " + localStorage.getItem("token");

    const response = await fetch(
      baseUrl + "nikes/" + comment.nikeId + "/comments",

      {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(comment),
      }
    );
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    let data = await response.json();
    // Add campsiteId to returned comment data for storing in application state
    data = { ...data, nikeId: comment.nikeId };
    console.log("data response ", data);
    return data;
  }
);

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
    [postComment.fulfilled]: (state, action) => {
      const newComment = action.payload.comment;
      const nikeId = action.payload.nikeId;
      newComment.author = action.payload.author;
      const nikeIdx = state.nikeArray.findIndex((nike) => {
        return nike._id === nikeId;
      });
      if (nikeIdx === -1) {
        console.log(`Campsite id of ${nikeIdx} not found, cannot add comment.`);
        return;
      }
      state.nikeArray[nikeIdx].comments.push(newComment);
    },
    [postComment.rejected]: (state, action) => {
      alert(
        "Your comment could not be posted\nError: " +
          (action.error ? action.error.message : "post failed")
      );
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
          node: item.node,
        };
      })
    : "";
  return result;
};

export const selectSampleNike = (state) => {
  const items = state.nikes.nikeArray;
  console.log(state.nikes.nikeArray);
  const result = items
    ? items.map((item) => {
        return {
          id: item._id,
          path: "nike",
          name: item.node.name,
          image: item.node.media.smallImageUrl,
          rating: 3,
          description: item.node.model,
        };
      })
    : "";
  return result.slice(0, 3);
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
  const item = state.nikes.nikeArray.find((nike) => nike._id === id);

  const result = item
    ? {
        id: item._id,
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

// Comments by nike object
export const selectCommentsByNikeId = (nikeId) => (state) => {
  const nike = state.nikes.nikeArray.find((nike) => {
    return nike._id === nikeId;
  });

  return nike.comments;
};
