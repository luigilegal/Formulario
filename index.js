
let username;
let email;
let senha;
let idade;
let cpf;
let telefone;
let pais;
let estado;
let cidade;
let bairro;
let numero;
let cep;
let check;

let checkall;
//funcao para quando o usuario clicar em validar ela acionar


document.getElementById("check").onclick = function(){
    check = document.getElementById("check").checked;
    if(check === true){
        document.getElementById("checkText").style.color = "green";
    }else{
        document.getElementById("checkText").style.color = "white";
    }
}


document.getElementById("submit").onclick = function(){

    check = document.getElementById("check").checked;
    checkall = 0;

    checkall += verUsername();

    checkall += verEmail();

    checkall += verSenha();

    checkall += verIdade();

    checkall += vertele();

    checkall += verCpf();

    checkall += verPais();

    checkall += verEstado();

    checkall += verCity();

    checkall += verBairro();

    checkall += verNum();

    checkall += verCep();

    if(check === false){
        document.getElementById("checkText").style.color = "red";
    }else{
        document.getElementById("checkText").style.color = "rgb(59, 228, 59)";
        checkall += 1;
    }
    console.log(checkall);
    if(checkall == 13){
        document.getElementById("form1").style.outline = "2px solid rgb(59, 228, 59)";
    }else{
        document.getElementById("form1").style.outline = "none";
    }
}
//Mostrar a senha e esconder ela.
document.getElementById("visi").onchange = function(){
    if(this.checked){
        document.getElementById("senha").type = "text";
    }else{
        document.getElementById("senha").type = "password";
    }
}

//funcao para verificar o nome do usuario.
function verUsername(){

    username = document.getElementById("nome").value;

    if(verCamp(username, "userName", "warningName", " nome")){
        return 0;
    }else{
        if(username.length < 3 || username.length > 15){
            document.getElementById("warningName").style.display = "inline";
            document.getElementById("warningName").textContent = "O nome deve ter entre 3 e 15 caracteres";
            formbtWarnig("userName", true);
            return 0;
        }
        if(/^[A-Za-zÀ-ÿ\s]+$/.test(username) === false){
            document.getElementById("warningName").style.display = "inline";
            document.getElementById("warningName").textContent = "O nome deve conter apenas letras e espaços";
            formbtWarnig("userName", true);
            return 0;
        }
        formbtWarnig("userName", false);
        warnigOff("warningName");
        return 1;
    }
}

function verEmail(){

    email = document.getElementById("email").value;
    
    if(verCamp(email, "EmailC", "warningEmail", " email")){
        return 0;
    }else{
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false){
            document.getElementById("warningEmail").style.display = "inline";
            document.getElementById("warningEmail").textContent = "Porfavor insira um email válido";
            formbtWarnig("EmailC", true);
            return 0;
        }
        formbtWarnig("EmailC", false);
        warnigOff("warningEmail");
        return 1;
    }
}

function verSenha(){

    senha = document.getElementById("senha").value;
    
    if(verCamp(senha, "SenhaC", "warningSenha", "a senha")){
        return 0;
    }else{
        if(senha.length < 8 || senha.length > 20){
            document.getElementById("warningSenha").style.display = "inline";
            document.getElementById("warningSenha").textContent = "A senha deve ter entre 8 e 20 caracteres";
            formbtWarnig("SenhaC", true);
            return 0;
        }
        if (/[a-z]/.test(senha) === false) {
            document.getElementById("warningSenha").style.display = "inline";
            document.getElementById("warningSenha").textContent = "A senha deve conter pelo menos uma letra minúscula";
            formbtWarnig("SenhaC", true);
            return 0;
        }
        if (/[A-Z]/.test(senha) === false) {
            document.getElementById("warningSenha").style.display = "inline";
            document.getElementById("warningSenha").textContent = "A senha deve conter pelo menos uma letra maiúscula";
            formbtWarnig("SenhaC", true);
            return 0;
        }
        if(/\d/.test(senha) === false){
            document.getElementById("warningSenha").style.display = "inline";
            document.getElementById("warningSenha").textContent = "A senha deve conter pelo menos um número";
            formbtWarnig("SenhaC", true);
            return 0;
        }
        if(/[^A-Za-z0-9]/.test(senha) === false){
            document.getElementById("warningSenha").style.display = "inline";
            document.getElementById("warningSenha").textContent = "A senha deve conter pelo menos um caractere especial";
            formbtWarnig("SenhaC", true);
            return 0;
        }
        formbtWarnig("SenhaC", false);
        warnigOff("warningSenha");
        return 1;
    }
}

function verIdade(){

    idade = document.getElementById("data").value;

    if(idade === "" || idade === null || idade == NaN ||idade == undefined){
        document.getElementById("warningIdade").style.display = "inline";
        document.getElementById("warningIdade").textContent = "Porfavor insira uma idade";
        formbtWarnig("idade", true);
        return 0;
    }else{
        formbtWarnig("idade", false);
        warnigOff("warningIdade");
        return 1;
    }
}

function vertele(){
    
    telefone = document.getElementById("tele").value;
    let telefoneTest;

    if(verCamp(telefone, "TeleC", "warningTelefone", " telefone")){
        return 0;
    }
    if(/\d/.test(telefone) === false){
        document.getElementById("warningTelefone").style.display = "inline";
        document.getElementById("warningTelefone").textContent = "Porfavor insira apenas numeros";
        formbtWarnig("TeleC", true);
        return 0;
    }
    if(telefone.length < 10 || telefone.length > 11){
        document.getElementById("warningTelefone").style.display = "inline";
        document.getElementById("warningTelefone").textContent = "Porfavor insira um telefone entre 10 a 11 digitos";
        formbtWarnig("TeleC", true);
        return 0;
    }
    if(telefoneTest < 0){
        document.getElementById("warningTelefone").style.display = "inline";
        document.getElementById("warningTelefone").textContent = "O telefone não pode ser negativo";
        formbtWarnig("TeleC", true);
        return 0;
    }
    formbtWarnig("TeleC", false);
    warnigOff("warningTelefone");
    return 1;


}

function verCpf(){

    cpf = document.getElementById("cpf").value;

    if(verCamp(cpf, "CPFc", "warningCpf", " CPF")){
        return 0;
    }else{
        if(cpf.length != 11){
            document.getElementById("warningCpf").style.display = "inline";
            document.getElementById("warningCpf").textContent = "Porfavor insira um CPF de ate 11 digitos";
            formbtWarnig("CPFc", true);
            return 0;
        }
        if(/^\d{11}$/.test(cpf) === false){
            document.getElementById("warningCpf").style.display = "inline";
            document.getElementById("warningCpf").textContent = "Porfavor insira apenas numeros";
            formbtWarnig("CPFc", true);
            return 0;
        }
        formbtWarnig("CPFc", false);
        warnigOff("warningCpf");
        return 1;
    }
}


function verPais(){
    pais = document.getElementById("pais").value;

    if(verCamp(pais, "PaisC", "warningPais", " pais")){
        return 0;
    }
    if(verCaracter(pais, "PaisC", "warningPais")){
        return 0;
    }
    formbtWarnig("PaisC", false);
    warnigOff("warningPais");
    return 1;
}

function verEstado(){

    estado = document.getElementById("est").value;
    
    if(verCamp(estado, "ESTc", "warningEstado", " estado")){
        return 0;
    }else{
        if(verCaracter(estado, "ESTc", "warningEstado")){
            return 0;
        }
        formbtWarnig("ESTc", false);
        warnigOff("warningEstado");
        return 1;
    }
}

function verCity(){

    cidade = document.getElementById("city").value;

    if(verCamp(cidade, "CityC", "warningCidade", "a cidade")){
        return 0;
    }else{
        if(verCaracter(cidade, "CityC", "warningCidade")){
            return 0;
        } 
        formbtWarnig("CityC", false);
        warnigOff("warningCidade");
        return 1;
    }
}

function verBairro(){

    bairro = document.getElementById("bairro").value;

    if(verCamp(bairro, "BairroC", "warningBairro", " bairro")){
        return 0;
    }else{
        if(verCaracter(bairro, "BairroC", "warningBairro")){
        return 0;
        }
        formbtWarnig("BairroC", false);
        warnigOff("warningBairro");
        return 1;
    }
}

function verNum(){

    numero = document.getElementById("numE").value;

    if(verCamp(numero, "numEc", "warningNumero", " numero de endereço")){
        return 0;
    }
    if(Number(numero) === NaN){
        document.getElementById("warningNumero").style.display = "inline";
        document.getElementById("warningNumero").textContent = "Porfavor digite apenas numeros.";
        formbtWarnig("numEc",true);
        return 0;
    }
    if(numero.length > 4 || Number(numero) < 0){
        document.getElementById("warningNumero").style.display = "inline";
        document.getElementById("warningNumero").textContent = "Apenas numeros positivos ate 4 digitos.";
        formbtWarnig("numEc",true);
        return 0;
    }
    formbtWarnig("numEc",false);
    warnigOff("warningNumero");
    return 1;
}

function verCep(){

    cep = document.getElementById("cep").value;
    if(verCamp(cep, "CEPc", "warningCEP", " CEP")){
        
        return 0;
    }
    
    if(/\d/.test(cep) === false|| Number(cep) < 0){
        console.log(cep);
        document.getElementById("warningCEP").style.display = "inline";
        document.getElementById("warningCEP").textContent = "Apenas numeros positivos.";
        formbtWarnig("CEPc", true);
        return 0;
    }

    if(cep.length != 8){
        document.getElementById("warningCEP").style.display = "inline";
        document.getElementById("warningCEP").style.textAlign = "center";
        document.getElementById("warningCEP").textContent = "O CEP tem que ter 8 digitos apenas.";
        formbtWarnig("CEPc", true);
        return 0;
    }
    
    warnigOff("warningCEP");
    formbtWarnig("CEPc", false);
    return 1;
}
//
//
// funcoes para verificar estados de algo, fiz elas para nao repetir o codigo que ja ta grande demais.
//
//
function formbtWarnig(identifier, boolean){

    if(boolean){
        document.getElementById(identifier).style.animation = "appear 1s ease-in-out";
        document.getElementById(identifier).style.outline = "2px solid red";
    }else{
        document.getElementById(identifier).style.outline = "2px solid rgb(59, 228, 59)";
    }
}

function warnigOff(warning){
    
    document.getElementById(warning).style.display = "none";
}

function verCaracter(variavel,identifier,warning){

    if(/^[A-Za-zÀ-ÿ]+$/.test(variavel) === false){
        document.getElementById(warning).style.display = "inline";
        document.getElementById(warning).textContent = "Porfavor insira apenas letras";
        formbtWarnig(identifier,true);
        return true;
    }
    if(variavel.length > 50){
        document.getElementById(warning).style.display = "inline";
        document.getElementById(warning).textContent = "Limite atingido de caracter(50).";
        formbtWarnig(identifier,true);
        return true;
    }
    return false;
}

function verCamp(variavel, identifier, warning, message){

    if(variavel === "" || variavel == null || variavel == undefined){
        document.getElementById(warning).style.display = "inline";
        document.getElementById(warning).textContent = `Porfavor insira um${message}`
        formbtWarnig(identifier,true);
        return true;

    }
    return false;
}