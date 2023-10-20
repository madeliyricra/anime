import * as configSlices from 'redux/slices/anime'
import store from "redux/store"

export const actionSetLoading = (loading: boolean) => {
  store.dispatch(configSlices.setLoading(loading))
}

export const actionSetMovies = (movies: any) => {
  store.dispatch(configSlices.setMovies(movies))
}

export const actionSetSearch = (search: string) => {
  store.dispatch(configSlices.setSearch(search))
}