export function getPopularMovies() {
    return fetch('https://api.themoviedb.org/3/movie/popular', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTAxNGY5OGMzNjI0NjhlY2Q2Yzk4ZGM2ZDZiNDBhNSIsIm5iZiI6MTczMDkyMzk3MC4yODMyNzk0LCJzdWIiOiI1OWMzMzU1NzkyNTE0MTViMzIwMDgyMmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QTGNk90Su7pXRp6kn8joK2n2n_lyiHhW6qlnHRD8uoQ'
        }
    })
    .then(res => res.json());
}