import { API_KEY, ENDPOINT } from "../constants";

export const getUrlMovie = (id: string) => {
    return `${ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
}
