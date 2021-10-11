let txtEmail = document.querySelector('input[name="email"]');
let errorEmail = document.querySelector('#errorEmail');
let formLogin = document.getElementById('formLogin');
let inputEmail =document.getElementById('inputEmail');
let errorImage = document.getElementById('error-image')


    function validateEmailVacio() {

  if( txtEmail.value.lastIndexOf('@') !== -1) {
    errorEmail.innerHTML = '<span style="color:green">Muchas gracias, tu mensaje ha sido enviado</span>';

  } else {
      errorEmail.innerHTML = 'Please provide a valid email';
      inputEmail.style.border = '1px solid red';
      errorImage.style.display = 'block';
  }

}

    formLogin.addEventListener('submit', e => {
    e.preventDefault();
    validateEmailVacio();
})

