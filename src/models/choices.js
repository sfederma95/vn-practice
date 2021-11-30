export class Choice {
    constructor(label, action){
        this.label = label;
        this.action = action;
    }
}

export class Choices {
    constructor(choices=[]){
        this.choices = choices;
    }

    printAll(){
        for (let choice of this.choices){
            console.log(choice);
        }
    }
}

