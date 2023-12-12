import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

// Necessary for reducer: (create) to work with Thunks. Read more here: https://redux-toolkit.js.org/api/createSlice#createasyncthunk
export const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})