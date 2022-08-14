

/**
  *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
  *  TODO: para una version futura no olvidar verificar si el usuario existe en la base de datos.
  *  @decs  : timer para verficar si inicio sesion o no
*/
function verificar_inicio_sesion(navigate) {

    //expresion regular para verificar numeros
    const regex = /^[0-9]{9,15}$/;

    const timer = setInterval(() => {

        if (localStorage.getItem('user_login') === null) {
            navigate('/');
        }
        else {

            if (!regex.exec(localStorage.getItem('user_login'))) {
                navigate('/');
            }

        }
    
         console.log(localStorage.getItem('user_login'));

    }, 100);

    return timer;

}


//exportar module
module.exports = {
    verificar_inicio_sesion,
}