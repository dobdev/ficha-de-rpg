import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CharacterModel from '../../../models/Character';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './Character.css';

import '../../../services/localDatabase/indexedDB.js'

class Character extends Component {
    constructor() {
        super();
        
        this.character = new CharacterModel();
        this.character.Name = '';
        this.character.Level = 1;
        this.character.Gender = 1;
        this.character.Race = 1;
        this.character.Classe = 1

        this.state = {
            name: this.character.Name,
            level: this.character.Level,
            gender: this.character.Gender,
            race: this.character.Race,
            classe: this.character.Classe,
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    handleSelectChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    convertIntoCharacter = () => {
        this.character.Name = this.state.name;
        this.character.Level = this.state.level;
        this.character.Gender = this.state.gender;
        this.character.Race = this.state.race;
        this.character.Classe = this.state.classe;
    }
    
    render() {
        return (
            <div>
                <Grid container spacing={40}>
                    <Grid item xs={12}>
                        <h1>Dados Básicos do Personagem</h1>
                    </Grid>
                </Grid>

                <Grid container spacing={40}>
                    <Grid item xs>
                        <TextField
                            className="form-element"
                            id="name"
                            name="name"
                            label="Nome"
                            onChange={this.handleChange('name')}
                            value={this.state.name}/>
                    </Grid>
                </Grid>

                <Grid container spacing={40}>
                    <Grid item xs>
                        <FormControl style={{minWidth: '180px' }}
                            className="form-element">
                            <InputLabel htmlFor="race-simple">Raça</InputLabel>
                            <Select
                                className="form-element"
                                value={this.state.race}
                                onChange={this.handleChange('race')}
                                inputProps={{
                                    name: 'race',
                                    id: 'race-simple',
                                }}>
                            
                                <MenuItem value={1}>Humano</MenuItem>
                                <MenuItem value={2}>Anão</MenuItem>
                                <MenuItem value={3}>Elfo</MenuItem>
                                <MenuItem value={4}>Halfling</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={40}>
                    <Grid item xs>
                        <FormControl style={{minWidth: '180px' }}
                            className="form-element">
                            <InputLabel htmlFor="race-simple">Classes</InputLabel>
                            <Select
                                className="form-element"
                                value={this.state.classe}
                                onChange={this.handleChange('classe')}
                                inputProps={{
                                    name: 'class',
                                    id: 'class-simple',
                                }}>
                            
                                <MenuItem value={1}>Clérigo</MenuItem>
                                <MenuItem value={2}>Homem de Armas</MenuItem>
                                <MenuItem value={3}>Ladrão</MenuItem>
                                <MenuItem value={4}>Mago</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={40}>
                    <Grid item xs>
                        <FormControl style={{minWidth: '180px' }}
                            className="form-element">
                            <InputLabel htmlFor="level-simple">Nível</InputLabel>
                            <Select
                                className="form-element"
                                value={this.state.level}
                                onChange={this.handleChange('level')}
                                inputProps={{
                                    name: 'level',
                                    id: 'level-simple',
                                }}>
                            
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={40}>
                    <Grid item xs>
                        <FormControl style={{minWidth: '180px' }}>
                            <InputLabel htmlFor="gender-simple">Gênero</InputLabel>
                            <Select
                                className="form-element"
                                value={this.state.level}
                                onChange={this.handleChange('level')}
                                inputProps={{
                                    name: 'gender',
                                    id: 'gender-simple',
                                }}>
                            
                                <MenuItem value={1}>Masculino</MenuItem>
                                <MenuItem value={2}>Feminino</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Character;