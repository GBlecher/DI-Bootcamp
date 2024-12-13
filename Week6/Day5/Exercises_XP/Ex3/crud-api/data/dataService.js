import axios from "axios";


export const fetchPosts = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
    catch(error)
    {
        console.log(error);
        throw error
    }
}

