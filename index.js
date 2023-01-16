var figlet = require ('figlet');

figlet( 'intocode', function(errorrr, text){
    if (errorrr){
        console.log('Что-то пошло не так... ')
    }
    console.log(text)
})