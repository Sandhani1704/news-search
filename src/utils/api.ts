import { BASE_URL } from "./constants";
import { API_KEY } from "./constants";

export const getInitialNews = () => {
    return fetch(`${BASE_URL}v2/top-headlines?country=ru&category=business&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
        },
    }).then((res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    });
}

export const getNewsByKeyWord = (keyword: string) => {
    return fetch(`${BASE_URL}v2/everything?q=${keyword}&sortBy=popularity&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
            "Accept": "application/json",
        },
    }).then((res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    });
}


