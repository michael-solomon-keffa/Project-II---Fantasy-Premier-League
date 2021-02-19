
class Element{
    constructor(parsedJson){
        this.code = parsedJson['code'],
        this.dreamteam_count = parsedJson['dreamteam_count'],
        this.first_name = parsedJson['first_name'],
        this.id = parsedJson['id'],
        this.second_name = parsedJson['second_name'],
        this.selected_by_percent = parsedJson['selected_by_percent'],
        this.team = parsedJson['team'],
        this.team_code = parsedJson['team_code'],
        this.total_points = parsedJson['total_points'],
        this.squad_number = parsedJson['squad_number']
    }
}

let elements = [];
export let elementFromJson = (str) => {
    str.forEach((s) => {
        let element = new Element(s);
        elements.push(element);
    });
    return elements;
}