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

      handleSelectChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h1>Ficha de Personagem</h1>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className="form-element"
                        id="name"
                        name="name"
                        label="Nome"
                        onChange={this.handleChange('name')}
                        value={this.state.name}/>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        className="form-element"
                        id="race"
                        name="race"
                        label="Raça"
                        onChange={this.handleChange('race')}
                        value={this.state.race}/>
                </Grid>

                <Grid item xs={12}>
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

                <Grid item xs={12}>
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

                <Grid item xs={6}>
                    <Button style={{width: "80%", margin: '10%'}}
                        color="primary" 
                        size="large" 
                        variant="contained">
                        Salvar
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button style={{width: "80%", margin: '10%'}}
                        color="secondary" 
                        size="large" 
                        variant="contained">
                        Limpar
                    </Button>
                </Grid>

            </Grid>
        );
    }
}

export default Character;