import axios from "axios";
import config from "../../../config"

export const getProgressBySkillId = (skill_id) => {
    return new Promise((resolve, reject) => {
        axios.post(`${config.baseUrl}/progress/${skill_id}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.response))
    });
}