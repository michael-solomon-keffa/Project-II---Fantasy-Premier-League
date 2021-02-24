import { dataController } from "./controllers/data-controller.js";

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