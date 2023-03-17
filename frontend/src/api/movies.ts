import axios from 'axios';

export function getMovies() {
  return axios
    .get('http://127.0.0.1:8080/movie', { params: { _sort: 'movieName' } })
    .then((res) => res.data);
}

export function getMovieDetails(movieName: string) {
  return axios
    .get(`http://127.0.0.1:8080/movie/${movieName}`)
    .then((res) => res.data);
}

export function addMovie({
  movieName,
  releaseDate,
}: {
  movieName: string;
  releaseDate: string;
}) {
  return axios
    .post('http://127.0.0.1:8080/movie', {
      movieName,
      releaseDate,
    })
    .then((res) => res.data);
}
