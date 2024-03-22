import axios from "axios";
import { ref } from "vue";
export const autores = ref([]);
export const getAutores = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get("http://localhost:3000/autores", {headers});
    autores.value = response.data;
  } catch (error) {
    console.log(error)
  }
}

