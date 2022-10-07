    const fetch = require('node-fetch');

    const login = async ()=>{
        const tokenResponse = await fetch('https://dev.stedi.me/login')

            method: 'POST',
            body:JSON.stringify({
            username:"rom1901@byui.edu.",
            password:"Patricia259@"
        })

    }
export{login};