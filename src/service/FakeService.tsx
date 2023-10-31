import axios from "axios";

export const getItems=()=>{
    return axios.get('https://fakestoreapi.com/products')
}