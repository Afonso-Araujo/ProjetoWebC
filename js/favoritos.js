"use strict"

const API_KEY = "1a40a0fc7ce4a4c44c458236ad905f42";

const URL = "http://api.openweathermap.org/data/2.5/weather?";

if(typeof(Storage) !== "undefined"){

    var dados = {
        //primeiro uma string e depois do : está a ir buscar o valor no ficheiro js

    };

        var dados_json = JSON.stringify(dados); //converter de objeto para string

        localStorage.setItem("dados", dados_json);
}else{
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

