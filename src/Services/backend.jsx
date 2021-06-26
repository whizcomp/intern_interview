import axios from "axios";
const apikey = "18d5273e";
export function getSearch(title) {
  return axios.get(
    `http://www.omdbapi.com/?s=${title}&apikey=${apikey}&plot=full`
  );
}
export function getDetails(id) {
  return axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${apikey}&plot=full`
  );
}
