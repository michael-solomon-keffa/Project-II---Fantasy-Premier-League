import { eventFromJson } from "../models/Event.js";
import { elementFromJson } from "../models/Element.js";
import { fixturesFromJson } from "../models/Fixtures.js";
import { teamsFromJson } from "../models/Team.js";
import { managersFromJson, historyFromJson } from "../models/Manager.js";

export class RemoteService {
  //Return the gameweek events mapping each gameweek to our own Gameweek Object
  async fetchGameweekEvents() {
    const uri = `https://greenethiopia.net/api/v1/fpl`;
    let response = await fetch(uri);
    let res = await response.json();
    if (response.status === 200) {
      let data = res["obj"]["events"];
      return eventFromJson(data);
    } else {
      data = "Please, Try Again";
    }
  }

  async fetchElements() {
    const uri = `https://greenethiopia.net/api/v1/fpl`;
    let response = await fetch(uri);
    let res = await response.json();
    if (response.status === 200) {
      let data = res["obj"]["elements"];
      return elementFromJson(data);
    } else {
      data = "Please, Try Again";
    }
  }

  async fetchFixtures() {
    const uri = `https://greenethiopia.net/api/v1/fixtures`;
    let response = await fetch(uri);
    let res = await response.json();
    if (response.status === 200) {
      let data = res;
      return fixturesFromJson(data);
    } else {
      data = "Please, Try Again";
    }
  }

  async fetchTeams() {
    const uri = `https://greenethiopia.net/api/v1/fpl`;
    let response = await fetch(uri);
    let res = await response.json();
    if (response.status === 200) {
      let data = res["obj"]["teams"];
      return teamsFromJson(data);
    } else {
      data = "Please, Try Again";
    }
  }

  // async fetchTotalPlayers(){
  //     const uri = `https://greenethiopia.net/api/v1/fpl`;
  //     let response = await fetch
  // }

  async fetchManagers() {
    const uri = `https://greenethiopia.net/api/v1/managers`;
    let response = await fetch(uri);
    let res = await response.json();
    let manager1;
    let manager2;
    let manager3;

    if (response.status === 200) {
      let data = res;
      manager1 = managersFromJson(data["327713"]);
      manager2 = managersFromJson(data["954118"]);
      manager3 = managersFromJson(data["6292826"]);
      return manager1;
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
