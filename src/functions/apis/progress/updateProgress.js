import axios from "axios";
import config from "../../../config"

export const updateProgress = (body, progressId, token) => {
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