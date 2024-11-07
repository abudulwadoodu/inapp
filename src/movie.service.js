export function getPopularMovies() {
    return fetch('https://api.themoviedb.org/3/movie/popular', {
        method: 'GET',
        headers: {
        }
    })
    .then(res => res.json());
}