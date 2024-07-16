import React, { createContext, useReducer, useContext, useEffect } from "react";
import { ActionType, CatApiReducer, StateType } from "../reducers/CatApiReducer";


interface ContextType {
  state: StateType;
  dispatch: React.Dispatch<ActionType>
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

export const CatApiContext = createContext<ContextType>({ state: initialState, dispatch: () => null })


export const CatApiContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [state, dispatch] = useReducer(CatApiReducer, initialState)

  useEffect(() => {
    localStorage.setItem('liked-images', JSON.stringify(state.likedImages))
  }, [state.likedImages])
  return (
    <CatApiContext.Provider value={{ state, dispatch }}>
      {children}
    </CatApiContext.Provider>
  )
}

export const useCatApiContext = () => {
  const context = useContext(CatApiContext);
  // console.log(context.dispatch({ type: 'NEXT_SLIDE', payload: context.state.catLists.length }))
  if (!context) {
    throw new Error('must be used within catImageContextProvider')
  }
  return context;
}