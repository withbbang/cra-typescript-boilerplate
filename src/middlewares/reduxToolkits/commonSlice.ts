import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  message?: string;
  isLoading?: boolean;
  isConfirmPopupActive?: boolean;
  isErrorPopupActive?: boolean;
  handleConfirmBtn?: () => void;
  handleCancelBtn?: () => void;
  handleErrorBtn?: () => void;
}

export const initialState: CommonState = {
  message: '',
  isLoading: false,
  isErrorPopupActive: false,
  isConfirmPopupActive: false,
  handleConfirmBtn: () => {},
  handleCancelBtn: () => {},
  handleErrorBtn: () => {},
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    handleMessage(state: CommonState, action) {
      state.message = action.payload.message;
    },
    handleSetIsLoading(state: CommonState, action) {
      state.isLoading = action.payload.isLoading;
    },
    handleSetIsConfirmPopupActive(state: CommonState, action) {
      state.isConfirmPopupActive = action.payload.isConfirmPopupActive;
    },
    handleSetIsErrorPopupActive(state: CommonState, action) {
      state.isErrorPopupActive = action.payload.isErrorPopupActive;
    },
    handleSetConfirmBtn(state: CommonState, action) {
      state.handleConfirmBtn = action.payload.callback;
    },
    handleSetCancelBtn(state: CommonState, action) {
      state.handleCancelBtn = action.payload.callback;
    },
    handleSetErrorBtn(state: CommonState, action) {
      state.handleErrorBtn = action.payload.callback;
    },
  },
  // API 리듀서들 비동기 상태값들 한번에 관리하기 위한 extraReducers 모음
  extraReducers: {
    // ...add others
  },
});

export const {
  handleMessage,
  handleSetIsLoading,
  handleSetIsErrorPopupActive,
  handleSetIsConfirmPopupActive,
  handleSetConfirmBtn,
  handleSetCancelBtn,
  handleSetErrorBtn,
} = commonSlice.actions;

export default commonSlice.reducer;
