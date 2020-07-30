import axios from 'axios';

const api = 'http://localhost:8080/';

class Api {
    
    getValidUnits = (quantityName) => {
        let resp = axios.get(api+`measurements/${quantityName}`)
        return resp;
    }
}
export default new Api();