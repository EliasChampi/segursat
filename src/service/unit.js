import axios from "axios";
import { API } from "constants/global";
class UnitService {
  fetchData() {
    return new Promise((resolve, reject) => {
      axios.get(API + "get-units/").then(r => {
        resolve(r.data)
    }).catch(err => reject(err))
    })
  }
}

export default new UnitService();
