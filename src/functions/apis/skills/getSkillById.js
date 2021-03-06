import axios from "axios";
import config from "../../../config"

export const getSkillById = (skill_id) => {
    const token = localStorage.getItem('accessToken')
    return new Promise((resolve, reject) => {
        axios.get(`${config.baseUrl}/skill/${skill_id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response))
    });
}