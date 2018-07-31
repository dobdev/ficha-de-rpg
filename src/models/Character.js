class CharacterModel {
    constructor() {
        this.Name = '';
        this.Level = 1;
        this.Gender = 'Masculino';
        this.Race = 'Humano';
    }

    LevelUp() {
        this.Level = this.Level + 1;
    }
}

export default CharacterModel;