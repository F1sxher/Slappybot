import fetch from 'node-fetch';

module.exports = async function(){
    let headers: any = {
        "x-api-key": process.env.API_KEY
    }

    return fetch(`${process.env.API_URI}/getonlineplayercount`, { method: 'GET', headers: headers})
    .then((res: any) => {
       return res.json()
    })
    .then((json: any) => {
        return json
    })
}