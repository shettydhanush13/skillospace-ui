import axios from "axios";
import config from "../../../config"

export const createProgress = (body) => {
    const token = localStorage.getItem('accessToken')
    return new Promise((resolve, reject) => {
        axios.post(`${config.baseUrl}/progress`, body, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response))
    });
}