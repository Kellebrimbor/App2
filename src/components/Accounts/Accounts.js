import React from 'react';
import Account from "./Account/Account";
import {API, AXIOS_CONFIG} from "../../config/server";
const axios = require('axios').default;

class Accounts extends React.Component{

    componentDidMount() {
        axios.get(API.GET_USERS, AXIOS_CONFIG).then((resp)=>{
            console.log(resp);
        }).catch((e)=>{
            console.log(e);
        });
    }

    render() {
        return(
            <div>
                <Account/>
                <Account/>
                <Account/>
            </div>
        )
    }
}
export default Accounts;
