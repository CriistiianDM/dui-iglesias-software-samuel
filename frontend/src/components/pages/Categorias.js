import React from 'react';
//import { Header } from '../home-element/Header';
//import { Footer } from '../home-element/Footer';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FilledInput from '@material-ui/core/FilledInput';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Header } from '../home-element/Header';
import { Footer } from '../home-element/Footer';


/* A constant that is used to define the style of the component. */
const styles = {
  paperContainer: {
      height: 1800,
      width: 900,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      background: 'linear-gradient(70deg, rgb(255, 255, 255), rgb(0, 51, 141,1))',      
      margin: -20, 
      padding: 90
  }
};

/*
* Purose: Estilo predefinido/predeterminado, para los componentes en react. 
* A constant that is used to define the style of the component. 
*/
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(2),
          width: '22ch',
        },
      },
  }
  ));


/**
  *  @author : juan felipe osorio zapata <juan.felipe.osorio@correounivalle.edu.co>
  *  @decs  : Componente de categorias de las personas dentro de la App. 
*/

export function Categorias(props) {
    const [name, setName] = React.useState('Cat in the Hat');
    const classes = useStyles();
    //Estos son las variables para declarar los footer y header, de la parte de selección de users. 
    let state_header = Object.values(Object.values(Object.entries(props)[0][1])[0])[0];
    let state_footer = Object.values(Object.values(Object.entries(props)[0][1])[1])[0];

    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    /*
    return (
            <div>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Estandar" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
            </div>
    )
    */
   return (
    <div style={styles.paperContainer}>
      <Header properties={state_header} />
      <h1>Categorias Usuarios</h1>
      <h2>Elige tu rol y digita tus datos basicos</h2>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="user-native-simple">Tipo Usuario</InputLabel>
        <Select
          native
          value={state.user}
          onChange={handleChange}
          inputProps={{
            name: 'user',
            id: 'user-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option>Sistemas</option>
          <option>Administrativo</option>
          <option>Asistente Administrativo</option>
          <option>Pastor local</option>
          <option>Cómite</option>
          <option>Creyente</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sexo-native-helper">Sexo</InputLabel>
        <NativeSelect
          value={state.nombre}
          onChange={handleChange}
          inputProps={{
            name: 'Sexo',
            id: 'sexo-native-helper',
          }}
        > 
        <option aria-label="None" value="" />
        <option>Masculino</option>
        <option>Femenino</option>
        <option>No Definido</option>
        </NativeSelect>
        <FormHelperText>...</FormHelperText>
      </FormControl>

      <FormControl>
      <form className={classes.root} noValidate autoComplete="on">
      <div>
      <TextField
          id="outlined-uncontrolled"
          label="Nombre"
          variant="outlined"
        />
      </div>
      </form>
      </FormControl>

      <FormControl>
      <form className={classes.root} noValidate autoComplete="on">
      <div>
      <TextField
          id="outlined-uncontrolled"
          label="Apellido"
          variant="outlined"
        />
      </div>
      </form>
      </FormControl>

    <Footer properties={state_footer} />
    </div>

  );
}


