import axios from "axios";
import config from "../../../config"

export const getMyProgress = () => {
    const token = localStorage.getItem('accessToken')
    return new Promise((resolve, reject) => {
        axios.get(`${config.baseUrl}/progress/myProgress`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response))
    });
}