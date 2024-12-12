import axios from "axios";

export async function getUser(url) {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


 