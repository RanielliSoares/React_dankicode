import React, { useState, useEffect } from 'react';
import axios from 'axios';

function API(){

    const [user, setUser] = useState([{}])

    async function initAPI(){
        
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        let {data} = await res;
        return data;
    }
    useEffect(() => {
        initAPI();
    })


    return(
        <div>API 123</div>
    )
}
export default API