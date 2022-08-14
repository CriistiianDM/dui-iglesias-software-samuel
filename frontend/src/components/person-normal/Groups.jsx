//librery or import
import { Button, Icon, Typography } from "@material-ui/core";
import React from "react";
import styleGroup from "../../css/style_group.css";
import logoIglesia from '../../images/imagesHome/logo_iglesia.png';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Montserrat_ExtraBold from '../../static/Montserrat-ExtraBold.ttf';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

//token de autenticacion
const { generateToken } = require('../_____/_____')

//bienvenida a casa github copilot, te heche de menos, de verdad que te heche de menos, te quiero mucho


//estilos de los componentes
const useStyles = makeStyles((theme) => ({

    titleGroupAux: {
        //espacio entre el titulo y el texto
        marginTop: '1em',
        fontSize: '4em',
        color: 'hsl(198deg 32% 16%)',
        fontWeight: '600',
        fontFamily: Montserrat_ExtraBold,
    },
    iconStyleGroup: {
        height: '0.8em',
        color: 'hsl(198deg 32% 16%)',
        fontSize: '15em',
    },
    textGroupAux: {
        paddingBottom: '1em',
        color: 'hsl(198deg 32% 16%)',
        fontSize: '2em',
        fontWeight: '500',
        fontFamily: Montserrat_ExtraBold,
    },
    titlteGroupAux: {
        paddingBottom: '1em',
        color: '#fff',
        fontSize: '2em',
        fontWeight: '500',
        fontFamily: Montserrat_ExtraBold,
    },
    textGroupAux2: {
        color: '#fff',
        fontSize: '1em',
        fontWeight: '500',
        textAline: 'italic',
        fontFamily: Montserrat_ExtraBold,
    },
    buttonGroupAux: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: '100%',
        justifyItems: 'center',
        alignItems: 'center',
        width: '18em',
        height: '29em',
        backgroundColor: 'rgb(22 27 34)',
        paddingBottom: '1em',
        //hover
        '&:hover': {
            backgroundColor: 'rgb(22 27 34)',
        }
    }

}));




/**
 * @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 * @des grupo de la aplicacion /Account
 * @param {json} props 
 * @returns 
 */
export function Groups(props) {

    //variable de estado
    let state_group = props.properties;
    const classes = useStyles();
    const navigate = useNavigate();

    //use state para obtener los datos del json
    const [data_array, set_data_array] = React.useState({
        loading: true,
        url_image: '',
        groups: [
            { name: 'grupo 1', description: 'descripcion del grupo 1' },
            { name: 'grupo 2', description: 'descripcion del grupo 2' },
            { name: 'grupo 3', description: 'descripcion del grupo 3' },
        ]
    });

    localStorage.setItem('group_selected', JSON.stringify(data_array.groups));


    //handle para obtener los datos del json
    const handle_get_group = (e) => {
        console.log('handle_get_group', e);

        if (localStorage.getItem('permiso_cargo') === 'Lider' ||
            localStorage.getItem('permiso_cargo') === 'comite') {

            (data_array.groups).map((item, index) => {

                if (item.id == (e.target.id).split('-')[1]) {
                    localStorage.setItem('group_selected', JSON.stringify(item));
                    navigate('/addpersongroup');
                }

            })

        }

    }

    //use effect para obtener los datos del json
    React.useEffect(() => {

        if (localStorage.getItem('permiso_cargo') === 'Lider') {
            get_group_person(data_array, set_data_array, 1)
        } else {
            get_group_person(data_array, set_data_array, 0)
        }

    }, [])



    //como un fressby va y vuelve - es una cansion githubcopilot
    return (

        <div className={state_group['cls-1']}>
            <Typography className={classes.titleGroupAux}> Tus Grupos </Typography>
            {
                (!data_array.loading) ? (
                    <div className={state_group['cls-9']}>
                        <Icon className={classes.iconStyleGroup}>groups</Icon>
                        <Typography className={classes.textGroupAux}> No Perteneces a Ningun Grupo </Typography>
                    </div>
                ) : (

                    <div className={state_group['cls-10']}>
                        {
                            (data_array.groups).map((item, index) => (
                                <Button onClick={handle_get_group} id={`groupInique-${item.id}`} className={classes.buttonGroupAux} key={index}>
                                    <Typography id={`groupInique1-${item.id}`} className={classes.titlteGroupAux}> {item['nombre_grupo']} </Typography>
                                    <Typography id={`groupInique2-${item.id}`} className={classes.textGroupAux2}> {item['descripcion']} </Typography>
                                </Button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )

}



/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  @decs  : Fetch tipo get para trer los grupos de las personas
*/
async function get_group_person(data_array, set_data_array, type) {
    try {

        const doc = localStorage.getItem('user_login');
        const response = await fetch(`https://demon789-4.herokuapp.com/${(type === 0) ? 'gpi' : 'zggl'}/${doc}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': generateToken()
            }
        });
        const data = await response.json();

        if (data[0] != undefined) {
            set_data_array({
                ...data_array,
                loading: true,
                groups: data
            })
        }
        else {
            set_data_array({
                ...data_array,
                loading: false,
                groups: []
            })
        }

        console.log(data, 'salidad bombom');

    } catch (error) {

        set_data_array({
            ...data_array,
            loading: false,
            groups: []
        })

        console.log(error);
    }
}