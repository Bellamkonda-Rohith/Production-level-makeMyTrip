import axios from "axios"

const Base_url="https://api.escuelajs.co/api/v1/products/"
export const fectchdataapi = {
  flightsearch: async (paylod) => {
    const url=await axios.post(`${Base_url},${paylod}`)
  }
}