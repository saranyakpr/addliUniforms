import axios from "axios";

const ApiClient = axios.create({
    baseURL: "/api", // proxy handle pannum
    headers: {
        "Content-Type": "application/json",
    },
});

export default ApiClient;