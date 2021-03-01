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

    async fetchTeams(){
        try{
            this.teamsList = await new RemoteService().fetchTeams();
            if(this.teamsList != null){
                return this.teamsList;
            }
        }catch(e){
        }
    }

    async fetchManagers(){
        try{
            this.managersList = await new RemoteService().fetchManagers();
            this.historiesManager = await new RemoteService().fetchHistories();
            if(this.managersList != null){
                this.managersList[0].history = this.historiesManager.manager6.slice(0, 25);
                this.managersList[1].history = this.historiesManager.manager6.slice(25, 50);
                this.managersList[2].history = this.historiesManager.manager6.slice(50, );
                return this.managersList;
            }
        }catch(e){

        }
    }
}

export let dataController = new DataController();

