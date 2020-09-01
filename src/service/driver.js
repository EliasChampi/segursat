import axios from "axios";
import { API } from "constants/global";
class DriverService {
    fetchData() {
        return new Promise((resolve, reject) => {
            axios.get(API + "get-drivers/").then(r => {
                resolve(r.data)
            }).catch(err => reject(err))
        })
    }
}

export default new DriverService();
