//libreria
import React from 'react';
import { HeaderUser } from '../account-element/HeaderUser';
import { FooterAccount } from '../account-element/FooterAccount';
import { AddPeopleGroup } from '../addPersonGroup/AddPeopleGroup';
import { useNavigate } from 'react-router-dom';

const { verificar_inicio_sesion } = require('./login_acces_verify');

/**
 * @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 * @des page para añadir personas a un grupo
 * @param {json} props 
 */
export function AddPersonGroup(props) {

    //variable de estado
    let state_header_user = Object.values(Object.values(Object.entries(props)[0][1])[0])[1];
    let state_footer_accounts = Object.values(Object.values(Object.entries(props)[0][1])[5])[4];
    let state_group = Object.values(Object.values(Object.entries(props)[0][1])[7])[0];
    const navigate = useNavigate();

    //useEstado
    const [header_user, setHeaderUser] = React.useState({
        state_header_user: Object.values(Object.values(Object.entries(props)[0][1])[0])[1],
        nombre_persona: localStorage.getItem('user_name'),
    });

    //useEffect para cargar la imagen de perfil
    React.useEffect(() => {
        verificar_inicio_sesion(navigate, '/addpersongroup');
    }, []);

    return (
        <>
            {
                (localStorage.getItem('permiso_cargo') === 'Lider' ||
                    localStorage.getItem('permiso_cargo') === 'comite') ?
                    <>
                        <HeaderUser properties={header_user} />
                        <div className={state_header_user['cls-6']}></div>
                        <div className={state_group['cls-1']}>
                            <AddPeopleGroup properties={props} />
                        </div>
                        <FooterAccount properties={state_footer_accounts} />
                    </> : null
            }
        </>
    )

}