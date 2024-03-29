//libreria
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, TextField } from '@material-ui/core';


//token de autenticacion
const { generateToken } = require('../_____/_____')


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

  titleCongrecasion: {
    fontSize: '4em',
    fontWeight: 'bold',
    color: 'hsl(198deg 32% 16%)',
    textAlign: 'center',
    //media queries
    '@media (max-width:600px)': {
      fontSize: '2em',
    }
  },
  titleCongrecasion2: {
    width: 'auto',
    height: '5em',
    fontSize: '3m',
    fontWeight: 'bold',
    color: 'hsl(198deg 32% 16%)',
    textAlign: 'center',
  },
  boxCongregacion: {
    display: 'grid',
    gridAutoRows: 'auto',
    gridTemplateColumns: 'repeat(auto-fit, minmax( min(100%, 5em), 1fr))',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '1em',
    width: '100%',
    height: 'auto',
    padding: '1em',
    overflow: 'hidden',
  }

}));



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Vista para ver la informacion de la iglesia
  *
*/
export function PageCongrecasion(props) {

  //variables
  const classes = useStyles();

  //useEstado
  const [data_array, set_data_array] = React.useState({
    loading: true,
    data: [
      {
        name: 'iglesia',
        dir: 'calle 1',
        tel1: '1234567',
        tel2: '1234567',
        date_init: '01/01/2020',
      }
    ],
  });


  //useEffect
  React.useEffect(() => {
    get_data_congregacion(data_array, set_data_array)
  }, []);

  return (
    <>
      <Typography className={classes.titleCongrecasion}>CONGREGACION</Typography>
      {
        (data_array.loading) ? (
          <Typography className={classes.titleCongrecasion2}>Cargando...</Typography>
        ) :
          (data_array.data).map((item, index) => (
            <div key={index} className={classes.boxCongregacion}>
              <TextField disabled={true} key={`${index}-1`} variant='outlined' type="text" label={'Iglesia'} value={item.name} />
              <TextField disabled={true} key={`${index}-2`} variant='outlined' type="text" label={'Direccion'} value={item.dir} />
              <TextField disabled={true} key={`${index}-3`} variant='outlined' type="text" label={'Telefono 1'} value={item.tel1} />
              <TextField disabled={true} key={`${index}-4`} variant='outlined' type="text" label={'Telefono 2'} value={item.tel2} />
              <TextField disabled={true} key={`${index}-5`} variant='outlined' type="text" label={'Fecha de Creacion'} value={item['date_init']} />
            </div>
          ))
      }
    </>
  )
}

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : fect tipo get para traer los datos de la iglesia
  *
*/
async function get_data_congregacion(data_array, set_data_array) {

  try {

    const response = await fetch(`https://demon789-4.herokuapp.com/zgchurch/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': generateToken()
      }
    });

    const data = await response.json();

    //console.log(data, 'data11');
    if (data[0] !== undefined) {
      set_data_array({ ...data_array, loading: false, data: data });
    }

  } catch (error) {
    console.log(error);
  }

}