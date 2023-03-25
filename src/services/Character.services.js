import axios from "axios";

export async function fetcherCharacter({ url }) {

    try {
        const response = await axios.get(url ?? 'https://rickandmortyapi.com/api/character');

        return response.data;
    } catch (error) {
        if (error) {
            return {
                error: true,
                message: error.response.data
            }
        }
    }
}

export async function serviceFilterCharacters({ filter, value }) {

    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?${filter}=${value}`);
        return response.data;
    } catch (error) {
        if (error) {
            return {
                error: true,
                message: error.response.data
            }
        }
    }
}