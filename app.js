// app.js
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log("Data from API:", res.data);
  })
  .catch((err) => {
    console.error("Axios error:", err);
  });
