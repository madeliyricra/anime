import { createSlice } from '@reduxjs/toolkit'
import IconfigState from '../types/anime'

const initialState: IconfigState = {
  loading: false,
  movies: [],
  search: '',
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
  }
})

export const {
  setLoading,
  setMovies,
  setSearch,
} = configSlice.actions

export default configSlice.reducer