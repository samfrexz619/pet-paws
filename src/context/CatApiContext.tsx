import React, { createContext, Dispatch, SetStateAction, useReducer, useContext, useEffect, useState } from "react";
import { ActionType, CatApiReducer, StateType } from "../reducers/CatApiReducer";


interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}


const initialState: StateType = {
  loading: false,
  catLists: [],
  breeds: [],
  likedImages: [],
  dislikedImages: [],
  favoriteImages: [],
  currentIndex: 0
}

export const CatApiContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
  query: '',
  setQuery: () => null
})


export const CatApiContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [state, dispatch] = useReducer(CatApiReducer, initialState)

  const [query, setQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('liked-images', JSON.stringify(state.likedImages))
  }, [state.likedImages])
  return (
    <CatApiContext.Provider value={{ state, dispatch, query, setQuery }}>
      {children}
    </CatApiContext.Provider>
  )
}

export const useCatApiContext = () => {
  const context = useContext(CatApiContext);
  if (!context) {
    throw new Error('must be used within catImageContextProvider')
  }
  return context;
}