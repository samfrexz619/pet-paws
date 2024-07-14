import { useEffect } from "react"
import { useCatApiContext } from "@/context/CatApiContext"
import { catsApi } from "@/service/catApi"

export const useGetBreeds = () => {

  const { state, dispatch } = useCatApiContext()

  useEffect(() => {

    const getCatBreeds = async () => {

      dispatch({ type: 'LOADING', payload: true })

      try {
        const res = await catsApi.get('/breeds')
        dispatch({ type: 'SET_BREEDS', payload: res.data })
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
    getCatBreeds()
  }, [])

  return {
    loading: state.loading,
    breeds: state.breeds
  }
}
