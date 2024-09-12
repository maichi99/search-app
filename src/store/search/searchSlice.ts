import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardInformationProps } from "../../component/search/cardInformation/CardInfomation";
import { inFormationData } from "../../component/sidebar/data";

type InFormationData = {
  data: CardInformationProps[];
  originalData: CardInformationProps[];
  loading: boolean;
  error: string | null;
  isFiltered: boolean;
};
const initialState: InFormationData = {
  data: [],
  originalData: [],
  loading: false,
  error: null,
  isFiltered: false,
};
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  // Fake Calling API by using setTimeout
  return new Promise<CardInformationProps[]>((resolve) => {
    setTimeout(() => {
      resolve(inFormationData);
    }, 3000);
  });
});
export const searchSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<CardInformationProps[]>) {
      state.originalData = action.payload;
      state.data = action.payload;
    },
    searchData(state, action: PayloadAction<CardInformationProps[]>) {
      state.data = action.payload;
      state.isFiltered = true;
    },
    resetData(state) {
      state.data = state.originalData;
      state.isFiltered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.originalData = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { searchData, setData, resetData } = searchSlice.actions;

export default searchSlice.reducer;
