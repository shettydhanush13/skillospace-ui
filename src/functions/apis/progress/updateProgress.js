import axios from "axios";
import config from "../../../config"

export const updateProgress = (body, progressId) => {
    const token = localStorage.getItem('accessToken')
    return new Promise((resolve, reject) => {
        axios.put(`${config.baseUrl}/progress/${progressId}`, body, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response))
    });
}