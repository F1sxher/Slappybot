import fetch from 'node-fetch';

exports.via_steam = async function(id: any, type: number){
    if(!type) type = 0;
    let headers: any = {
        "x-api-key": process.env.API_KEY,
        "PlayerId": [id]
    }

    return fetch(`${process.env.API_URI}/getplayerdata`, { method: 'GET', headers: headers})
    .then((res: any) => {
       return res.json()
    })
    .then((json: any) => {
        return json
    })
}