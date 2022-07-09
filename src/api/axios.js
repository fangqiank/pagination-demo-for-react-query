import axios from 'axios'

export const axiosInstance1 = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const axiosInstance2 = axios.create({
  baseURL: 'https://reqres.in/api',
})

export const getPosts = async (page = 1) => {
  const res = await axiosInstance1.get(`posts?_page=${page}`)
  return res.data
}

export const getUsers = async (page = 1) => {
  const res = await axiosInstance2.get(`/users?page=${page}`)
  return res.data
}
