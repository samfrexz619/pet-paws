import { CatList, Breed } from "@/types/cardTypes"

export type ActionType =
  | { type: 'SET_CAT_IMAGES'; payload: CatList[] } |
  { type: 'LOADING'; payload: boolean } |
  { type: 'SET_BREEDS'; payload: Breed[] } |
  { type: 'SET_LIKED_IMAGES'; payload: number } |
  { type: 'SET_FAVORITE_IMAGES'; payload: number } |
  { type: 'SET_DISLIKED_IMAGES'; payload: number } |
  { type: 'NEXT_SLIDE'; payload: number }

export interface StateType {
  loading: boolean;
  catLists: CatList[];
  breeds: Breed[];
  likedImages: CatList[];
  favoriteImages: CatList[];
  dislikedImages: CatList[];
  currentIndex: number;
}

export const CatApiReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      }
    case 'SET_CAT_IMAGES':
      return {
        ...state,
        loading: false,
        catLists: action.payload
      }
    case 'SET_BREEDS':
      return {
        ...state,
        loading: false,
        breeds: action.payload
      }
    case 'SET_LIKED_IMAGES':
      return {
        ...state,
        loading: false,
        likedImages: [...state.likedImages, state.catLists[action.payload]]
      }
    case 'SET_DISLIKED_IMAGES':
      return {
        ...state,
        loading: false,
        dislikedImages: [...state.dislikedImages, state.catLists[action.payload]]
      }
    case 'SET_FAVORITE_IMAGES':
      return {
        ...state,
        loading: false,
        favoriteImages: [...state.favoriteImages, state.catLists[action.payload]]
      }
    case 'NEXT_SLIDE':
      return {
        ...state,
        currentIndex: state.currentIndex === action.payload - 1 ? 0 : state.currentIndex + 1
      }
    default:
      return state;
  }
}