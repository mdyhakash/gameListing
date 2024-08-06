import axios from "axios";

const key = "7a046576117b49919429921afaad273d";
const axiosCreate=axios.create({
    baseURL: 'https://rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}