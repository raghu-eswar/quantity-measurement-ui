import axios from 'axios';

const api = 'http://localhost:8080/measurements/';

class Api {
    
    getValidUnits = (quantityName) => {
        let resp = axios.get(api+`${quantityName}`)
        return resp;
    }

    getConvertedUnit = (oldUnit, value, newUnit) => {
        let resp = axios.get(api+`convert/${oldUnit}/${value}/${newUnit}/`)
        return resp;
    }
}
export default new Api();