import axios from 'axios';

export const pedirPictos = async (searchText) => {
  /* solicitar datos a api.arasaac.org */
  // 1. saber como usar axios
  // 2. url de la api
  const endPoint = `https://api.arasaac.org/api/pictograms/es/search/${searchText}`;
  const url = `https://api.arasaac.org/pictograms/${id}/${id}_500.png`;

  try {
    const { data: pictos } = await axios.get(endPoint);
    console.log(pictos);
    console.log(pictos.id);
    const imagearray = pictos.map(
      ({ _id }) => `https://api.arasaac.org/pictograms/${_id}/${_id}_500.png`
    );
    console.log(imagearray);
  } catch (error) {
    console.log(error);
  }
};
export const cargarpKeywords = async (searchText) => {
  /* solicitar datos a api.arasaac.org */
  // 1. saber como usar axios
  // 2. url de la api
  const endPoint = `https://api.arasaac.org/api/pictograms/es/search/${searchText}`;
  const url = `https://api.arasaac.org/pictograms/${id}/${id}_500.png`;

  try {
    const { data: pictos } = await axios.get(endPoint);
    console.log(pictos);
    console.log(pictos.id);
    const imagearray = pictos.map(
      ({ _id }) => `https://api.arasaac.org/pictograms/${_id}/${_id}_500.png`
    );
    console.log(imagearray);
  } catch (error) {
    console.log(error);
  }
};
