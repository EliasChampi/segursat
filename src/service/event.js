import axios from "axios";
import { API } from "constants/global";
class Event {
    fetchData() {
        return new Promise((resolve, reject) => {
            axios.get(API + "get-events/").then(r => {
                resolve(r.data)
            }).catch(err => reject(err))
        })
    }
}
export default new Event();
