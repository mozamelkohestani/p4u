import axios from "axios";

const httpClient = axios.create({
  baseUrl: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // anything you want to add to the headers
  },
});

const getAuthToken = () => localStorage.getItem("token");

const authInterceptor = (config) => {
  config.headers["authorization"] = getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;

const SIGNUP = process.env.VUE_APP_BASE_URL + "/api/auth/signup";
const SIGNIN = process.env.VUE_APP_BASE_URL + "/api/auth/login";
const PLACELIST = process.env.VUE_APP_BASE_URL + "/api/me/places";

// you can pass arguments to use as request parameters/data
const login = (username, password) =>
  httpClient.post(SIGNIN, { username, password });
// maybe more than one..
const register = (
  firstname,
  surname,
  username,
  password,
  password_confirmation
) =>
  httpClient.post(SIGNUP, {
    firstname,
    surname,
    username,
    password,
    password_confirmation,
  });

const placelist = () => httpClient.get(PLACELIST);
const placeGet = (id) => httpClient.get(PLACELIST + "/" + id);
const placeCreate = (title, description, image) =>
  httpClient.post(PLACELIST, { title, description, image });
const placeUpdate = (id, title, description, image) =>
  httpClient.post(PLACELIST + "/" + id, { title, description, image });
const placeRemove = (id) => httpClient.delete(PLACELIST + "/" + id);

const eventlist = (id) => httpClient.get(PLACELIST + "/" + id + "/events");
const eventCreate = (id, title, description, image, date) =>
  httpClient.post(PLACELIST + "/" + id + "/events", {
    title,
    description,
    image,
    date,
  });

const eventGet = (placeId, eventId) => httpClient.get(PLACELIST + "/" + placeId + '/events/' + eventId );

const eventRemove = (placeId, eventId) => httpClient.delete(PLACELIST + "/" + placeId + '/events/' + eventId );

const eventUpdate = (placeId, eventId, title, description, image, date) => httpClient.post(PLACELIST + "/" + placeId + '/events/' + eventId, {title, description, image, date} );

const productlist = (placeId, eventId) => httpClient.get(PLACELIST + "/" + placeId + '/events/' + eventId + '/products');

const productCreate = (placeId, eventId, title, description, image, price) => httpClient.post(PLACELIST + "/" + placeId + '/events/' + eventId + '/products', {title, description, image, price});

const removeProduct = (placeId, eventId, productId) => httpClient.delete(PLACELIST + "/" + placeId + '/events/' + eventId + '/products/' + productId);

const productGet = (placeId, eventId, productId) => httpClient.get(PLACELIST + "/" + placeId + '/events/' + eventId + '/products/' + productId);

const productUpdate = (placeId, eventId, productId, title, description, image, price) => httpClient.post(PLACELIST + "/" + placeId + '/events/' + eventId + '/products/' + productId, {title, description, image, price});


export {
  login,
  register,
  placelist,
  placeCreate,
  placeGet,
  placeUpdate,
  placeRemove,
  eventlist,
  eventCreate,
  eventRemove,
  eventGet,
  eventUpdate,
  productlist,
  productCreate,
  removeProduct,
  productGet,
  productUpdate
};
