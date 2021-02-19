class Team{
    constructor(parsedJson){
        this.emblem = emblem[parsedJson['name']],
        this.arena = arena[parsedJson['name']],
        this.jersey = jersey[parsedJson['name']],
        this.code = parsedJson['code'],
        this.draw = parsedJson['draw'],
        this.id = parsedJson['id'],
        this.loss = parsedJson['loss'],
        this.name = parsedJson['name'],
        this.short_name = parsedJson['short_name'],
        this.win = parsedJson['win']
    }
}

let teams = [];
export let teamsFromJson = (str) => {
    str.forEach((s) => {
        let team = new Team(s);
        teams.push(team);
    });
    return teams;
}
