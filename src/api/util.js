import axios from "../shared/axios"

export const getRequest = async (uri) => {
    try {

        let response = await axios.get(uri);

        return {
            data: response.data,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };

    }
}

export const putRequest = async (uri) => {
    try {

        let response = await axios.put(uri);

        return {
            data: response.data,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };

    }
}