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
}