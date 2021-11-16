const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '055871906cd260f8de815ef83f9d591e';

async function fetchBase(url = '', config = {}) {
    const res = await fetch(url, config);
    return res.ok ? await res.json() : Promise.reject(new Error('Not found'));
}

export function fetchTrends() {
    return fetchBase(`${BASE_URL}/trending/movie/week?api_key=${KEY}`);
}

export function fetchSearchMovie(query = '') {
    return fetchBase(`${BASE_URL}/search/movie?query=${query}&api_key=${KEY}`);
}

export function fetchMoreInfo(movieId) {
    return fetchBase(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
}

export function fetchCast(movieId) {
    return fetchBase(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`);
}

export function fetchReviews(movieId) {
    return fetchBase(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`);
}