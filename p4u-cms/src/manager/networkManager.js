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

const eventRemove = (placeId, eventId) => httpClient.delete(PLACELIST + "/" + placeId + '/events/' + eventId );

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
  eventRemove
};
