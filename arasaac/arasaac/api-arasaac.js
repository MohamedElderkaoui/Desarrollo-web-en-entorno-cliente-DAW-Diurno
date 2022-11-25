import axios from 'axios'
export const pedirPictos = (searchText) => {
  /* solicitar datos a api.arasaac.org */
  // 1. saber como usar axios
  // 2. url de la api

  const endPoint = `https://api.arasaac.org/api/pictograms/es/search/${searchText}`;
};

/*getUser*/
async function getUser() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log(res.data);
    }
    catch (error) {
        console.log(error);
    }
}