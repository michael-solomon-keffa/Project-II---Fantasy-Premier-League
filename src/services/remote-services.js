import {eventFromJson} from '../models/Event.js';
import {elementFromJson} from '../models/Element.js';
import { fixturesFromJson } from '../models/Fixtures.js';
import {teamsFromJson} from '../models/Team.js';
import {managersFromJson, historyFromJson} from '../models/Manager.js';

export class RemoteService{
    //Return the gameweek events mapping each gameweek to our own Gameweek Object
    async fetchGameweekEvents(){
        const uri = `https://greenethiopia.net/api/v1/fpl`;
        let response = await fetch(uri);
        let res = await response.json();
        if(response.status === 200){
            let data = res["obj"]["events"]
            return eventFromJson(data);
        }else{
            data = 'Please, Try Again'
        }
    }

    async fetchElements(){
        const uri = `https://greenethiopia.net/api/v1/fpl`;
        let response = await fetch(uri);
        let res = await response.json();
        if(response.status === 200){
            let data = res["obj"]["elements"]
            return elementFromJson(data);
        }else{
            data = 'Please, Try Again'
        }   
    }

    async fetchFixtures(){
        const uri = `https://greenethiopia.net/api/v1/fixtures`;
        let response = await fetch(uri);
        let res = await response.json();
        if(response.status === 200){
            let data = res
            return fixturesFromJson(data);
        }else{
            data = 'Please, Try Again'
        }   
    }

    async fetchTeams(){
        const uri = `https://greenethiopia.net/api/v1/fpl`
        let response = await fetch(uri);
        let res = await response.json();
        if(response.status === 200){
            let data = res['obj']['teams']
            return teamsFromJson(data);
        }else{
            data = 'Please, Try Again'
        }  
    }

    // async fetchTotalPlayers(){
    //     const uri = `https://greenethiopia.net/api/v1/fpl`;
    //     let response = await fetch
    // }

    async fetchManagers(){
        const uri = `https://greenethiopia.net/api/v1/managers`;
        let response = await fetch(uri);
        let res = await response.json();
        let manager1;
        let manager2;
        let manager3;

        if(response.status === 200){
            let data = res;
            manager1 = managersFromJson(data["327713"]);
            manager2 = managersFromJson(data["954118"]);
            manager3 = managersFromJson(data["6292826"]);
            return manager1;
        }
    }

    async fetchHistories(){
        const uri = `https://greenethiopia.net/api/v1/history`;
        let response = await fetch(uri);
        let res = await response.json();
        let manager4;
        let manager5;
        let manager6;
        if(response.status === 200){
            let data1 = res["327713"]["current"];
            let data2 = res["954118"]["current"];
            let data3 = res["6292826"]["current"];
            manager4 = historyFromJson(data1);
            manager5 = historyFromJson(data2);
            manager6 = historyFromJson(data3);
            return {
                manager4,
                manager5,
                manager6,
            }
        }
    }   
}


















// const baseURL = 'https://greenethiopia.net/api/v1/fpl';
// export const reqType = {
//     bootstrap : '',
    // element : 'element-summary/',
    // events: 'events',
    // event: 'event',
    // entry: 'entry',
    // elementTypes: 'element-types',
    // gameweekFixtures: 'fixtures/?event',
    // teams: 'teams/',
    // leagueClassicStanding: 'leagues-classic'
//}
// const makeRequest = async (url, param) => {
//     const response = await fetch(`${baseURL}${url}`);
//     const res = await response.json();
//     let data;
//     if(response.status === 200){
//         data = res['obj'];
//     }
//     return data;
// }
// // Get Overall Gameweek Information Data
// export const getBootstrap = async () => {
//       const data = makeRequest(reqType.bootstrap);
//       return data;
// }

