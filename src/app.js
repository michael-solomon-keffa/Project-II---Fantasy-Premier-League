import {
    dataController
} from "./controllers/data-controller.js";

//getting ids
const gameweekName = document.querySelector(".gameweektitle");
const gameweekTime = document.querySelector(".gameweektime");
const averageScore = document.querySelector(".averagepoint");
const highestScore = document.querySelector(".highestpoint");

// Fixture Related
const gameweekFixtures = document.getElementById("fixtures");

//basic gameweek information
const mosttransferredin = document.querySelector(".mosttransferredin");
const mosttransferredinplayer = document.querySelector(".mosttransferredinplayer");
const mostcaptainedin = document.querySelector(".mostcaptainedin");
const mostcaptainedinplayer = document.querySelector(".mostcaptainedinplayer");

// Star Player
const starplayertitle = document.querySelector(".starplayertitle");
const starplayerjersey = document.querySelector(".starplayerjersey");
const starplayerfirstname = document.querySelector(".starplayerfirstname");
const starplayerlastname = document.querySelector(".starplayerlastname");
const starplayerteam = document.querySelector(".starplayerteam");
const starplayerpoints = document.querySelector(".starplayerpoints");

// Manager
const managername = document.querySelector(".managername");
const managernickname = document.querySelector(".managernickname");
const managerfavouriteteam = document.querySelector(".managerfavouriteteam");
const manageroverallpoint = document.querySelector(".manageroverallpoint");
const managerrank = document.querySelector(".managerrank");
const overallpoint = document.querySelector(".overallpoints");
const manageraverage = document.querySelector(".manageraverage");

const gameweekscore = document.querySelector(".gameweekscore");
const gameweekonlyrank = document.querySelector(".gameweekonlyrank");

// profile
const profile = document.querySelector(".profile");

// League
const leagues = document.querySelector(".leaguetable");

const urlParams = new URLSearchParams(window.location.search);
let gameweekpage = parseInt(urlParams.get("gameweekpage"));
if (!gameweekpage) {
    gameweekpage = 0;
}

// Authentication table
let authenicatedManager = urlParams.get("managerId");
let managerIdentity = {
    "327713": 0,
    "954118": 1,
    "6292826": 2
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let view = async function () {
    let overallData = await dataController.fetchAll();

    let events = await await overallData[0];
    let elements = await overallData[2];
    let fixtures = await overallData[1];
    let teams = await overallData[3];
    let managers = await overallData[4];
    // Starplayer
    elements.sort((a, b) => (a.id > b.id) ? 1 : -1);

    //Gameweek 1 is at index 0 -> Applies for all
    gameweekName.textContent = events[gameweekpage].name;
    gameweekTime.textContent = new Date(events[gameweekpage].deadline_time).toDateString();
    averageScore.textContent = events[gameweekpage].average_entry_score;
    highestScore.textContent = events[gameweekpage].highest_score;

    mosttransferredin.textContent = elements[events[gameweekpage].most_transferred_in - 1].first_name + " " + elements[events[gameweekpage].most_transferred_in - 1].second_name;
    mosttransferredinplayer.innerHTML = `<img src=${teams[elements[events[gameweekpage].most_transferred_in - 1].team - 1].jersey}>`;
    mostcaptainedin.textContent =elements[events[gameweekpage].most_captained - 1].first_name +" " +elements[events[gameweekpage].most_captained - 1].second_name;
    mostcaptainedinplayer.innerHTML = `<img src=${teams[elements[events[gameweekpage].most_captained - 1].team - 1].jersey}>`;
  
  
  
    starplayertitle.textContent = `GW ${events[gameweekpage].id} star player`;
    starplayerjersey.innerHTML = `<img src=${teams[elements[events[gameweekpage].top_element - 1].team - 1].jersey}>`;
    starplayerfirstname.textContent = elements[events[gameweekpage].top_element - 1].first_name;
    starplayerlastname.textContent = elements[events[gameweekpage].top_element - 1].second_name;
    starplayerteam.textContent = "⚪ " + teams[elements[events[gameweekpage].top_element].team - 1].name;
    starplayerpoints.textContent = events[gameweekpage].top_element_info.points + " " + "points";
  
    // Managers
    managername.textContent = managers[managerIdentity[authenicatedManager]].player_first_name + ' ' + managers[managerIdentity[authenicatedManager]].player_last_name;
    managernickname.textContent = managers[managerIdentity[authenicatedManager]].name;
    managerfavouriteteam.textContent = teams[managers[managerIdentity[authenicatedManager]].favourite_team - 1].name;
    manageroverallpoint.textContent = managers[managerIdentity[authenicatedManager]].summary_overall_points;
    managerrank.textContent = managers[managerIdentity[authenicatedManager]].summary_overall_rank;
  
    overallpoint.textContent = managers[managerIdentity[authenicatedManager]].summary_overall_points;
    
    gameweekscore.textContent = managers[managerIdentity[authenicatedManager]].history[24 - gameweekpage].points;
    gameweekonlyrank.textContent = numberWithCommas(managers[managerIdentity[authenicatedManager]].history[24 - gameweekpage].rank);
  
}

view();