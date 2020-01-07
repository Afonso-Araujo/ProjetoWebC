"use strict"

const API_KEY = "1a40a0fc7ce4a4c44c458236ad905f42";

const URL = "http://api.openweathermap.org/data/2.5/weather?";
const URL_Multi = "http://api.openweathermap.org/data/2.5/group?";

//http://openweathermap.org/data/2.5/weather? - URL
// q=London,uk - Cidade
// &appid=b6907d289e10d714a6e88b30761fae22 - API_KEY

var div_cidades_clone = null;

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
    tokyo(pais_tokyo);
*/

    $.ajax({
        method: "GET",
        url: URL_Multi,
        data: {
            id: "6167865,1850147,2267057,5368361,703448,5128581",
            units: "metric",
            appid: API_KEY
        },
    }).done(function (msg) {
        var lista_filmes = $("#lista-cidades");
        lista_filmes.html("");
    console.log(msg);
        var i;
        for(i = 0; i < msg.cnt; i++){
            //console.log(msg.list[i].name);

            var result_html = div_cidades_clone.clone();

            var cidade = msg.list[i].name;
            var temperatuta = msg.list[i].main.temp;
            var vento = msg.list[i].wind.speed;
            var pressao = msg.list[i].main.pressure;
            var humidade = msg.list[i].main.humidity;
            var tempo = msg.list[i].weather[0].main;

            var cidade_html = $(".cidade", result_html);
            var temperatura_html = $(".temperatura",result_html);
            var vento_html = $(".vento",result_html);
            var pressao_html = $(".pressao",result_html);
            var humidade_html = $(".humidade",result_html);
            var tempo_html = $(".tempo",result_html);

            cidade_html.text(cidade);
            temperatura_html.text(temperatuta + "ºC");
            vento_html.text("Velocidade do Vento: " + vento + " Kms");
            pressao_html.text("Pressâo Atmosferica: " + pressao);
            humidade_html.text("Humidade: " + humidade + "%");
            tempo_html.text(tempo);

            lista_filmes.append(result_html);
        }
    });
}

$(function () {
    var div_cidades = $(".pre_cidades");
    div_cidades_clone = div_cidades.clone();
    div_cidades.hide();
    paises_iniciais();
});