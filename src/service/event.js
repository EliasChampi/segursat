import request from "./request";
const sub = "/control/web/api/";
class Event {
    fetchData() {
        return new Promise((resolve, reject) => {
            request.get(sub + "get-events/").then(r => {
                resolve(r.data)
            }).catch(err => reject(err))
        })
    }
}
export default new Event();
