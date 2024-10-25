
function ValidarCampos(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    if (nome.value == ""){
        alert("Digite o nome!");
        nome.focus();
        return;


    }
    else {
        if(nome.length > 20) {
            alert("campos com mais de 20 caracteristicas!");
            nome.value = "";
            nome.focus();
            return;
            
        }


    }

    if (email.value == ""){
        alert("Digite o Email!");
        email.focus();
        return;
    }
    else
    {
        if(!ValidadeEmail(email.value.trim())){
            alert("E-mail inválido!");
            email.value = "";
            email.focus();
            return;
    
            }
            else{
                //let parteEmail = email.value.substring(0,5);
                //alert(parteEmail);

                let antesDoArroba = email.value.substring(0, email.value.indexOf("@"));
                alert(antesDoArroba);

            }


    }

}


function ValidadeEmail(email){
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}














