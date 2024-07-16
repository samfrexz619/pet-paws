import { useEffect } from 'react';
import { catsApi } from '@/service/catApi';
import { useCatApiContext } from '@/context/CatApiContext';


const useGetCatApi = () => {

  const { state, dispatch } = useCatApiContext()

  useEffect(() => {
    const fetchCatLists = async () => {

      dispatch({ type: 'LOADING', payload: true })
      try {
        const res = await catsApi.get('/images/search?limit=20')
        dispatch({ type: 'SET_CAT_IMAGES', payload: res.data })
        localStorage.setItem('images', JSON.stringify(res.data))
      } catch (error: any) {
        if (error.response) {
          console.error('Server Error:', error.response.status);
        } else if (error.request) {
          console.error('Network Error:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      } finally {
        dispatch({ type: 'LOADING', payload: false })
      }
    }

    fetchCatLists()
  }, [])

  return {
    catLists: state.catLists,
    loading: state.loading,
    dispatch,
    currentIndex: state.currentIndex,
    likedImages: state.likedImages,
    favoriteImages: state.favoriteImages,
    dislikedImages: state.dislikedImages
  }

}

export default useGetCatApi;
