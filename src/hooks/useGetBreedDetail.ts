import { useEffect, useState } from "react"
import { catsApi } from "@/service/catApi"
import { Breed } from "@/types/cardTypes"

export const useGetBreedDetail = (id: string) => {

  const [breedDetail, setBreedDetail] = useState<Breed | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const getCatBreedDetail = async () => {

      setIsLoading(true);

      try {
        const res = await catsApi.get(`/breeds/${id}`)
        setBreedDetail(res.data)
      } catch (error: any) {
        if (error.response) {
          console.error('Server Error:', error.response.status);
        } else if (error.request) {
          console.error('Network Error:', error.request);
        } else {
          console.error('Error:', error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getCatBreedDetail()
  }, [])

  return {
    isLoading,
    breedDetail
  }
}
