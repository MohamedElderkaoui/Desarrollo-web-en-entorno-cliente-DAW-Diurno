import { Loader } from "@googlemaps/js-api-loader";

const mapOptions = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 4,
};

export const cargarMapa = () => {
  console.log("configurando librería....");
  const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"],
  });

  // Promise
  loader
    .load()
    .then((google) => {
      new google.maps.Map(document.querySelector("#map"), mapOptions);
    })
    .catch((e) => {
      // do something
    });
};
