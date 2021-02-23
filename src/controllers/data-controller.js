import {RemoteService} from '../services/remote-services.js';

export class DataController{

    constructor(){
        // Pagination controller
        this.gameweekEventList = [];
        this.elementList = [];
        this.fixturesList = [];
        this.teamsList = [];
        this.managersList = [];
        this.historiesManager = {};
    }
    async fetchAll(){
        return [
            this.fetchGameweekEvents(),
            this.fetchFixtures(),
            this.fetchElements(),
            this.fetchTeams(),
            this.fetchManagers(),      
            ]
        }
        // Controller for fetching gameweek events
    async fetchGameweekEvents(){
        try{
            this.gameweekEventList = await new RemoteService().fetchGameweekEvents();
            if(this.gameweekEventList != null){
                return this.gameweekEventList;
            }
        }catch(e){
        }
    }
    async fetchElements(){
        try{
            this.elementList = await new RemoteService().fetchElements();
            if(this.elementList != null){
                return this.elementList;
            }
        }catch(e){
        }
    }
    async fetchFixtures(){
        try{
            this.fixturesList = await new RemoteService().fetchFixtures();
            if(this.fixturesList != null){
                return this.fixturesList;
            }
        }catch(e){
        }
    }

}