import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CharacterModel from '../../../models/Character';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Character extends Component {
    constructor() {
        super();
        
        this.character = new CharacterModel();
        this.character.Name = 'David';
        this.character.Level = 1;
        this.character.Gender = 'Masculino';
        this.character.Race = 'Humano';

        this.state = {
            name: this.character.Name,
            level: this.character.level,
            gender: this.character.gender,
            race: this.character.race
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    

    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <h1>Ficha de Personagem</h1>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="name"
                        label="Nome"
                        onChange={this.handleChange('name')}
                        value={this.state.name}/>
                </Grid>

                <Grid item xs={12}>
                    <FormControl>
                        <InputLabel htmlFor="level-simple">Nível</InputLabel>
                        <Select
                            value={this.state.level}
                            onChange={this.handleChange}
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

                <Grid item xs={6}>
                    <label>Gênero: </label>
                    <span>{ this.character.Gender }</span>
                </Grid>

                <Grid item xs={6}>
                    <label>Raça: </label>
                    <span>{ this.character.Race }</span>
                </Grid>
            </Grid>
        );
    }
}

export default Character;