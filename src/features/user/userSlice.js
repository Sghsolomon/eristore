import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

export const userSignup = createAsyncThunk(
  "user/signup",
  async ({ firstname, lastname, username, password }, { dispatch }) => {
    const response = await fetch(baseUrl + "user/signup", {
      method: "POST",
      body: JSON.stringify({ firstname, lastname, username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    const data = await response.json();
    if (data.success) {
      dispatch(userLogin({ username, password }));
    }
    return data;
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, { dispatch }) => {
    const response = await fetch(baseUrl + "user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return Promise.reject(response.status);
    }

    const data = await response.json();
    dispatch(setCurrentUser(data));
    return data;
  }
);

export const userLogout = createAsyncThunk("user/logout", async () => {
  const bearer = "Bearer " + localStorage.getItem("token");

  const response = await fetch(baseUrl + "user/logout", {
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  });

  // Remove the token on client side no matter what happens with the fetch
  localStorage.removeItem("token");

  if (!response.ok) {
    return Promise.reject(
      "There was a problem with logging out on the server side, status: " +
        response.status
    );
  }

  const data = await response.json();
  return data;
});

export const validateLogin = createAsyncThunk(
  "user/validateLogin",
  async (values, { dispatch }) => {
    const bearer = "Bearer " + localStorage.getItem("token");

    const response = await fetch(baseUrl + "user/checkJWTtoken", {
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });

    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();

    if (!data.success) {
      dispatch(clearCurrentUser());
    }

    return data;
  }
);

export const postOrder = createAsyncThunk("user/postOrder", async (order) => {
  const bearer = "Bearer " + localStorage.getItem("token");

  // const response = await fetch(baseUrl + "user/orders", {
  //   method: "POST",
  //   body: JSON.stringify(order),
  //   headers: {
  //     Authorization: bearer,
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "same-origin",
  // });

  const response = await fetch(
    baseUrl + "user/orders",

    {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(order),
    }
  );

  if (!response.ok) {
    return Promise.reject(response.status);
  }

  const data = await response.json();
  return data;
});

export const deleteOrder = createAsyncThunk(
  "user/deleteOrder",
  async (order) => {
    const bearer = "Bearer " + localStorage.getItem("token");

    const response = await fetch(baseUrl + "user/orders", {
      method: "DELETE",
      body: JSON.stringify({ campsiteId: order }),
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });

    if (!response.ok) {
      return Promise.reject(response.status);
    }
    const data = await response.json();
    return data;
  }
);

//redux store
const initialState = {
  orders: [],
  isLoading: false,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.firstName;
      state.currentUserId = action.payload.id;
    },
    clearCurrentUser: (state) => {
      state.isAuthenticated = false;
      state.orders = [];
      state.isLoading = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.orders = [];
      localStorage.removeItem("token");
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("state.order", action.payload);
      //state.orders = action.payload.orders;
      localStorage.setItem("token", action.payload.token);
      console.log(`Login successful for user with _id: ${action.payload.id}`);
    },
    [userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.orders = [];
      localStorage.removeItem("token");
      alert("Login failed.", action.error.message);
    },
    [userLogout.fulfilled]: (state) => {
      state.isLoading = false;
      state.orders = [];
    },
    [userLogout.rejected]: (state) => {
      state.isLoading = false;
      state.orders = [];
    },
    [userSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [userSignup.rejected]: (state) => {
      state.isLoading = false;
      state.orders = [];
    },
    [postOrder.rejected]: (state, action) => {
      alert(
        "Your order could not be saved\nError: " +
          (action.error ? action.error.message : "Fetch failed")
      );
    },
    [postOrder.fulfilled]: (state, action) => {
      console.log("post order", action.payload);
      state.orders.push(action.payload);
    },
    [deleteOrder.fulfilled]: (state, action) => {
      state.orders = action.payload;
    },
    [deleteOrder.rejected]: (state, action) => {
      alert(
        "Your order could not be deleted\nError: " +
          (action.error ? action.error.message : "Fetch failed")
      );
    },
  },
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

export const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

export const selectCurrentUserFavorites = (state) => {
  return state.user.favorites;
};
