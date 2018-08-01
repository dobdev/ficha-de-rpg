class CharacterModel {
    constructor() {
        this.Name = '';
        this.Level = 1;
        this.Gender = 1;
        this.Race = 1;
        this.Classe = 1;
        this.Pow = 1;
        this.Dex = 1;
        this.Con = 1;
        this.Int = 1;
        this.Sab = 1;
        this.Car = 1;
    }

    LevelUp() {
        this.Level = this.Level + 1;
    }
}

export default CharacterModel;