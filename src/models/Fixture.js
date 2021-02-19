
class Fixture{
    constructor(parsedJson){
        this.code = parsedJson['code'],
        this.event = parsedJson['event'],
        this.finished = parsedJson['finished'],
        this.id = parsedJson['id'],
        this.kickoff_time = parsedJson['kickoff_time'],
        this.minutes = parsedJson['minutes'],
        this.started = parsedJson['started'],
        this.team_a = parsedJson['team_a'],
        this.team_a_score = parsedJson['team_a_score'],
        this.team_h = parsedJson['team_h'],
        this.team_h_score = parsedJson['team_h_score'],
        this.team_h_difficulty = parsedJson['team_h_difficulty'],
        this.team_a_difficulty = parsedJson['team_a_difficulty']
    }
}

let fixtures = [];
export let fixturesFromJson = (str) => {
    str.forEach((s) => {
        let fixture = new Fixture(s);
        fixtures.push(fixture);
    });
    return fixtures;
}