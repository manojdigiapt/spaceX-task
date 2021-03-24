import axios from "axios";

export function getData(){
    return(dispatch)=> {
        return axios.get("https://api.spacexdata.com/v3/capsules").then((response) => {
            dispatch(getCapsuleData(response.data))
            console.log("response",response)
        })
    }
}

export function getCapsuleData(data){
    return {
        type:"GET_CAPSULE_DATA",
        data: data
    }
}