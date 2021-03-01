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

const urlParams = new URLSearchParams(window.location.search);
let gameweekpage = parseInt(urlParams.get("gameweekpage"));
if (!gameweekpage) {
  gameweekpage = 0;
}

// Authentication table
let authenicatedManager = urlParams.get("managerId");
let managerIdentity = {
  "327713" : 0,
  "954118" : 1,
  "6292826" : 2
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//Ultimate data controller
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
  averageScore.textContent =events[gameweekpage].average_entry_score;
  highestScore.textContent = events[gameweekpage].highest_score;

  //TODO
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

  profile.innerHTML = `<img  src="${teams[managers[managerIdentity[authenicatedManager]].favourite_team - 1].emblem}" alt="">`

  // Leagues
  let tableitems = '';
  tableitems += `
    <tr>
      <th>League Name</th>
      <th>Previous Rank</th>
      <th>Current Rank</th>
    </tr>
  `
  
  managers[managerIdentity[authenicatedManager]].leagues.classic.forEach((league) => {
    tableitems += `
      <tr>
        <td class="info-left bottom-border" style="padding:10px;"><strong>${league.name}</strong></td>
        <td class="info-highlight bottom-border" style="padding:10px;">${numberWithCommas(league.entry_last_rank)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td class="info-highlight bottom-border ">${numberWithCommas(league.entry_rank)}</td>
      </tr>
    `
  });
  managers[managerIdentity[authenicatedManager]].leagues.h2h.forEach((league) => {
    tableitems += `
     <tr>
       <td class="info-left bottom-border style="padding:10px;"><strong>${league.name}</strong></td>
       <td class="info-highlight bottom-border" style="padding:10px;">${numberWithCommas(league.entry_last_rank)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
       <td class="info-highlight bottom-border">${numberWithCommas(league.entry_rank)}</td>
     </tr>
   `
 });
  leagues.innerHTML = tableitems;

  let homeDiv = "";

  let gameweekfixtures = fixtures.filter((x) => {
    return x.event === gameweekpage + 1;
  });

  let teamDifficulity = {
    5: "#FFEBEE",
    4: "#EF9A9A",
    3: "#E57373",
    2: "#F44336",
    1: "#571C1C"
  }

  gameweekfixtures.forEach((x) => {
    homeDiv += `<div class="row mt-4">
            <div class="col-sm-12 fixturebox py-3">
                <div class="row mt-2">
                    <div class="col-sm-2 hometeam">
                      <div class="row">
                        <div class="col-sm-12">
                          <img src=${teams[x.team_h - 1].emblem}>
                        </div>
                        <div class="col-sm-12">
                          <div style="width: 50px; height: 2px; background: ${teamDifficulity[x.team_h_difficulty]}"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-2 versus text-center py-2">
                        ${x.team_a_score !== null && x.team_h_score !== null ? x.team_h_score + '-' + x.team_a_score: 'V'}
                    </div>
                    <div class="col-sm-2 awayteam">
                      <div class="row">
                        <div class="col-sm-12">
                          <img src=${teams[x.team_a - 1].emblem}>
                        </div>
                        <div class="col-sm-12">
                          <div style="width: 50px; height: 2px; background: ${teamDifficulity[x.team_a_difficulty]}"></div>
                        </div>
                      </div>                  
                    </div>
                    <div class="col-sm-5 fixtureplacetime">
                        <div class="row">
                            <div class="col-sm-12 fixturetime">${new Date(x.kickoff_time).getHours() +':'+ new Date(x.kickoff_time).getMinutes()}</div>
                            <div class="col-sm-12 fixtureplace text-muted">${teams[x.team_h - 1].arena}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  });

        

  

    // while(fixtures[thisEvent].event == y){
    //   eventLength++
    // }

  gameweekFixtures.innerHTML = homeDiv;

  // Set the date we're counting down to
  var countDownDate = new Date(events[26].deadline_time).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.querySelector(".newsHeadline").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".newsHeadline").innerHTML = "EXPIRED";
    }
  }, 1000);

  document.querySelector(".newsDescription").innerHTML = `<div class="pt-3 pl-5">
    Next Gameweek : ${events[26].name} <br>
    Until ${new Date(events[26].deadline_time).toDateString()} <br>
    Time Zone : London, England
  </div>`

  // Logic to calculate the average of player
  let managerOnePoints = managers[managerIdentity[authenicatedManager]].history.map((x) => x.points)
  let sum = managers[managerIdentity[authenicatedManager]].history.reduce((acc, current) => {
    return current.points + acc
  }, 0);

  let average = sum / 25;
  manageraverage.textContent = average;

  // Chart
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['GW1', 'GW2', 'GW3', 'GW4', 'GW5', 'GW6', 'GW7','GW8', 'GW9', 'GW10', 'GW11', 'GW12', 'GW13', 'GW14','GW15', 'GW16', 'GW17', 'GW18', 'GW19', 'GW20', 'GW21','GW22', 'GW23', 'GW24', 'GW25'],
          datasets: [{
              label: `${managers[managerIdentity[authenicatedManager]].player_first_name}'s point history`,
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              data: managerOnePoints
          }]
      },

      // Configuration options go here
      options: {
        layout: {
          padding: {
              left: 5,
              right: 5,
              top: 10,
              bottom: 5
          }
      }
      }
  });
}

view();
