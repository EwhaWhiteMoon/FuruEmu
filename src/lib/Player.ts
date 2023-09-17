export default class Player{
    name : string;
    aura : number;
    life : number;
    conc : number;
    flare: number;
    megami : [number, number];
    is_turn : boolean
    constructor(name: string, is_first_turn: boolean){
        this.name = name;

        this.aura = 3;
        this.life = 10;
        this.conc = 1;
        this.flare = 0;
        this.megami = [1, 1];

        this.is_turn = is_first_turn;
    }
}