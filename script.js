let usuarios = [];
function cadastro(){
    //JSON JavaScript Object Notation
    let usuario = gerarUsuario();
    usuarios.push(usuario);
    alert("Cadastro Efetuado com sucesso!");
}
function logar(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let usuario = autenticar(Login, senha);
}

function gerarUsuario(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usuario = (username, password);
    return usuario;
}

function autenticar(Login, senha){
    for(let usuario of usuarios){
        if(Login == usuario.username && senha == usuario.password){
            return usuario;
        }
    }
    return null;
}