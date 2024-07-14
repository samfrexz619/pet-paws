import axios from "axios";


export const catsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'x-api-key': import.meta.env.API_KEY
  }
})