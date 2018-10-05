import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const getData = () => {
    return{
        type: GET_DATA,
        payload:dataBannerApi()
    }
}

const dataBannerApi = () => {
    const url = "http://172.104.50.9:3000/api/banner_lists"
    axios
    .get(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}