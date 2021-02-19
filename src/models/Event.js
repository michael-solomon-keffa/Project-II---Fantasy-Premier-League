
class GameweekEvent{
    constructor(parsedJson){
        this.id = parsedJson['id'],
        this.name = parsedJson['name'],
        this.deadline_time = parsedJson['deadline_time'],
        this.average_entry_score = parsedJson['average_entry_score'],
        this.finished = parsedJson['finished'],
        this.data_checked = parsedJson['data_checked'],
        this.highest_scoring_entry = parsedJson['highest_scoring_entry'],
        this.highest_score = parsedJson['highest_score'],
        this.is_previous = parsedJson['is_previous'],
        this.is_current = parsedJson['is_current'],
        this.next = parsedJson['is_next'],
        this.chip_plays = parsedJson['chip_plays'],
        this.most_selected = parsedJson['most_selected'],
        this.most_transferred_in = parsedJson['most_transferred_in'],
        this.top_element = parsedJson['top_element'],
        this.top_element_info = parsedJson['top_element_info'],
        this.transfers_made = parsedJson['transfers_made'],
        this.most_captained = parsedJson['most_captained'],
        this.most_vice_captained = parsedJson['most_vice_captained']
    }
}

let gameweeks = [];
export let eventFromJson = (str) => {
    str.forEach((s) => {
        let gameweek = new GameweekEvent(s);
        gameweeks.push(gameweek);
    });
    return gameweeks;
}

