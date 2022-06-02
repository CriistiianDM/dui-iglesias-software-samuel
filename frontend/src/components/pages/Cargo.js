import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createTheme, Grid} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import FormHelperText from '@material-ui/core/FormHelperText';


  
const theme = createTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontFamily: 'Raleway, Arial',
      fontSize: 12,
    },
  });
  

/* Defining the style of the component. */
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    display: Grid, 
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paperContainer: {
    height: 1800,
    width: 900,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    background: 'linear-gradient(70deg, rgb(255, 255, 255), rgb(0, 51, 141,1))',      
    margin: -20, 
    padding: 90
},
}));


/**
 * The Cargo function is used to select the user's role in the church
 * @param props - The props that are passed to the component.
 * @returns The return is a form control with a select and a label.
 */
export function Cargo(props) {

  const theme = createTheme();   
  const classes = useStyles();
  const [Cargo, setCargo] = React.useState('');
  const [open, setOpen] = React.useState(false);


  theme.typography.h4 = {
    fontSize: '0rem',
    '@media (min-width:400px)': {
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  };

  theme.typography.h2 = {
    align: 'center',
    fontSize: '1.1rem',
    '@media (min-width:600px)': {
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2rem',
    },
  };

 /**
  * The handleChange function is used to set the Cargo to the value of the event target
  * @param event - The event that triggered the function.
  */
 /*
  const handleChange = (event) => {
    setCargo(event.target.value);
  };
  */
  const handleChange = (event) => {
    const name = event.target.name;
    setCargo({
      ...open,
      [name]: event.target.value,
    });
  };

 /**
  * The handleClose function sets the open state to false
  */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * The function handleOpen is called when the button is clicked
   * @param event - The event that triggered the open.
   */
  const handleOpen = (event) => {
    setOpen(true);
    alert("eres:" + event); 
  };

  return (
    <div className= {classes.paperContainer}>
        <Typography variant="h3">Iglesia pentecostal Colombia</Typography>
        <Typography variant="h5">Elige el cargo por el cual deseas ingresar:</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="user-native-simple">Cargo</InputLabel>
        <Select
          native
          value={open.user}
          onChange={handleChange}
          onOpen={handleOpen}
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
        <FormHelperText id="my-helper-text">I can do everything in God.</FormHelperText>
      </FormControl>
    </div>
  );
}
