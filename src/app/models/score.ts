export class Score{
    email: string;
    subjectId: string;
    scoreNumber: number;

    constructor(email: string, subjectId: string, scoreNumber: number){
        this.email = email;
        this.subjectId = subjectId;
        this.scoreNumber = scoreNumber;        
    }
}