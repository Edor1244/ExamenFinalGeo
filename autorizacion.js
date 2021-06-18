
const formaingresar = document.getElementById('ingresar');
const salir = document.getElementById('btnCS');


    formaingresar.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = formaingresar['email'].value;
        let password = formaingresar['password'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log('Existe el Usuario');
            formaingresar.reset();
            window.location = 'Index.html';

        }).catch(err => {
            alert('Correo o Contraseña Erroneas');
            console.log(err);
        });
    });








