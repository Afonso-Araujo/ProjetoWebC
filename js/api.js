"use strict"

const API_KEY = "1a40a0fc7ce4a4c44c458236ad905f42";

const URL = "http://api.openweathermap.org/data/2.5/weather?";
const URL_Multi = "http://api.openweathermap.org/data/2.5/group?";

//http://openweathermap.org/data/2.5/weather? - URL
// q=London,uk - Cidade
// &appid=b6907d289e10d714a6e88b30761fae22 - API_KEY

var div_canada_clone = null;
var div_lisboa_clone = null;
var div_tokyo_clone = null;

function paises_iniciais() {
 /*
    var pais_canada = "Canada";
    var pais_lisboa = "Lisbon";
    var pais_tokyo = "Tokyo";

    function canada(pais){
        $.ajax({
            method: "GET",
            url: URL,
            data: {
                q: pais,
                appid: API_KEY
            },
        }).done(function (msg) {
            //console.log(msg);
            var lista_cidades = $("#lista-cidades");
            lista_cidades.html("");

            var result_canada = div_canada_clone.clone();

            var cidade = msg["name"];
            var temperatuta = msg["main"]["temp"];
            var pressao = msg["main"]["pressure"];
            var humidade = msg["main"]["humidity"];
            var vento = msg["wind"]["speed"];
            var tempo = msg["weather"]["main"];
            var tempo_descicao = msg["weather"]["main"];

            var cidade_html_canada = $(".cidade", result_canada);
            var temperatura_html_canada = $(".temperatura", result_canada);

            cidade_html_canada.text(cidade);
            temperatura_html_canada.text(temperatuta);
            // console.log(cidade);

            lista_cidades.append(result_canada);
        });
    }

    function lisboa(pais){
        $.ajax({
            method: "GET",
            url: URL,
            data: {
                q: pais,
                appid: API_KEY
            },
        }).done(function (msg) {
            //console.log(msg);
            var lista_cidades = $("#lista-cidades");
            //lista_cidades.html("");

            var result_ca = div_lisboa_clone.clone();

            var cidade = msg["name"];
            var temperatuta = msg["main"]["temp"];
            var pressao = msg["main"]["pressure"];
            var humidade = msg["main"]["humidity"];
            var vento = msg["wind"]["speed"];
            var tempo = msg["weather"]["main"];
            var tempo_descicao = msg["weather"]["main"];

            var cidade_html = $(".cidade", result_ca);
            var temperatura_html = $(".temperatura", result_ca);

            cidade_html.text(cidade);
            temperatura_html.text(temperatuta);
            // console.log(cidade);

            lista_cidades.append(result_ca);
        });
    }

    function tokyo(pais){
        $.ajax({
            method: "GET",
            url: URL,
            data: {
                q: pais,
                appid: API_KEY
            },
        }).done(function (msg) {
            //console.log(msg);
            var lista_cidades = $("#lista-cidades");
            //lista_cidades.html("");

            var result_cas = div_tokyo_clone.clone();

            var cidade = msg["name"];
            var temperatuta = msg["main"]["temp"];
            var pressao = msg["main"]["pressure"];
            var humidade = msg["main"]["humidity"];
            var vento = msg["wind"]["speed"];
            var tempo = msg["weather"]["main"];
            var tempo_descicao = msg["weather"]["main"];

            var cidade_html = $(".cidade", result_cas);
            var temperatura_html = $(".temperatura", result_cas);

            cidade_html.text(cidade);
            temperatura_html.text(temperatuta);
            // console.log(cidade);

            lista_cidades.append(result_cas);
        });
    }

    canada(pais_canada);
    lisboa(pais_lisboa);
    tokyo(pais_tokyo);*/

    $.ajax({
        method: "GET",
        url: URL_Multi,
        data: {
            id: "6167865,1850147,2267057,5368361,703448,5128581",
            appid: API_KEY
        },
    }).done(function (msg) {

        var results = [msg]; // array dos elementos

        var lista_filmes = $("#lista-filmes");
        lista_filmes.html("");
       console.log(results);

        results.forEach(function (result) {

            var result_html = div_canada_clone.clone();
            console.log(results["id"]);
            var cidade = result["id"];
         /*   var temperatuta = msg["main"]["temp"];
            var pressao = msg["main"]["pressure"];
            var humidade = msg["main"]["humidity"];
            var vento = msg["wind"]["speed"];
            var tempo = msg["weather"]["main"];
            var tempo_descicao = msg["weather"]["main"];*/

            var cidade_html_canada = $(".cidade", result_html);
    //        var temperatura_html_canada = $(".temperatura", result_canada);

            console.log("" +cidade);
            cidade_html_canada.text(cidade);
    //        temperatura_html_canada.text(temperatuta);
            // console.log(cidade);

            lista_filmes.append(result_html);
        });
    });
}

function div_iniciais(){
    var div_canada = $(".canada");
    div_canada_clone = div_canada.clone();
    div_canada.hide();

    var div_lisboa = $(".lisboa");
    div_lisboa_clone = div_lisboa.clone();
    //div_canada.hide();

    var div_tokyo = $(".tokyo");
    div_tokyo_clone = div_tokyo.clone();
    //div_canada.hide();
}

$(function () {
    div_iniciais();
    paises_iniciais();
});