import axios from "axios";

const KEY = "AIzaSyCYTqeJXGa8Yk8VKvhC7-qIKUFRrY5O1Ts";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
