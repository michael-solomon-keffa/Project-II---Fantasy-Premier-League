

class Manager{
    constructor(parsedJson){
        //From basic info
        this.id = parsedJson["id"];
        this.favourite_team = parsedJson["favourite_team"];
        this.player_first_name = parsedJson["player_first_name"];
        this.player_last_name = parsedJson["player_last_name"];
        this.player_region_name = parsedJson["player_region_name"];
        this.summary_overall_points = parsedJson["summary_overall_points"];
        this.summary_overall_rank = parsedJson["summary_overall_rank"];
        this.summary_event_points = parsedJson["summary_event_rank"];
        this.current_event = parsedJson["current_event"];
        this.name = parsedJson["name"];
        this.leagues = parsedJson["leagues"];
        this.history = [];
        // From history


    }
}

class History{
    constructor(parsedJson){
        this.event = parsedJson["event"];
        this.points = parsedJson["points"];
        this.total_points = parsedJson["total_points"];
        this.rank = parsedJson["rank"];
        this.overall_rank = parsedJson["overall_rank"];
    }
}

let managers = [];
export let managersFromJson = (s) =>{
    let manager = new Manager(s);
    managers.push(manager);
    return managers;
}

let histories = [];
export let historyFromJson = (str) => {
    str.forEach((s) => {
        let history = new History(s);
        histories.push(history);
    });
    return histories;
}