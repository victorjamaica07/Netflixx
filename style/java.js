function leerinput(){
    let victor = $(".input1").val();
    let victr = $(".input2").val();
    let passwordd = $(".input3").val();
    let vector = [victor,victr,passwordd];
    return vector
}

function almacenarDatos(a,b,c){
    localStorage.setItem("usuario",a);
    localStorage.setItem("email",b);
    localStorage.setItem("password",c);
}
 
$(".btn").click(function (){
    let victor = leerinput();
    almacenarDatos(victor[0],victor[1],victor[2]);
});

function validacion(){
    let victor = $(".input3").val();
    if (victor == localStorage.getItem("password") && victor == localStorage.getItem("usuario")&& victor == localStorage.getItem("email") ){
        alert ("usuario valido");
        document.querySelector(".btn1").setAttribute("type", "submit");
    }else{
        alert ("usuario invalido");
        $(".btn1").setAttribute("type", "button");
    }
}

$(".btn1").click(function(){
    document.querySelector(".popup").classList.add("popupp1")
})

$(".loginn").click(function(){

    let email = $(".inputemail").val();

    let password = $(".inputpassword").val();

    if (email == localStorage.getItem("email") && password == localStorage.getItem("password")){
       document.querySelector(".loginn").href = "pantallas.html";
    }
    else{
        alert ("usuario invalido");
    }
})

$(".equis").click(function(){
    document.querySelector(".popup").classList.remove("popupp1")
})