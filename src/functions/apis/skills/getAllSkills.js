import axios from "axios";
import config from "../../../config"

export const getAllSkills = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${config.baseUrl}/skill`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response))
    });
}