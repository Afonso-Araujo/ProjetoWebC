"use strict"

const API_KEY = "1a40a0fc7ce4a4c44c458236ad905f42";

const URL = "http://api.openweathermap.org/data/2.5/weather?";
const URL_MultiSearch = "http://api.openweathermap.org/data/2.5/find?";
const URL_FirstCities = "http://api.openweathermap.org/data/2.5/group?";
const urlForecast = "http://api.openweathermap.org/data/2.5/forecast?";

//http://openweathermap.org/data/2.5/weather? - URL
// q=London,uk - Cidade
// &appid=b6907d289e10d714a6e88b30761fae22 - API_KEY

/* Index */
var div_cidades_clone = null;
var div_pesquisa_clone = null;

/* Detalhes */
var div_detalhes_temperatuta_clone = null;
var div_detalhes_cidade_clone = null;

/* Forecast  */
var div_detalhes_semana_clone = null;
var div_detalhes_dia = null ;

var div_detalhes_dia_repete = null;
var div_detalhes_informacao_repete = null;

var div_detalhes_horas = null;

/* Funcoes para o forecast */

function dia_da_semana(date){
    //a isolar o dia
    var split = date.split("-");
    var data_split = split[2];

    //nova variavel do tipo data
    var myDate = new Date();
    //mudar o dia para o data_split
    myDate.setDate(data_split);
    //console.log("dia semana",myDate);
    //console.log("dia semana",myDate.getDay());
    //getDay ve o dia em relacao na posicao da semana: Segunda, Terca,.....
    //Devolve de 0 - Domingo a 6 - Sabado

    var dia = myDate.getDay();
    var diaArray = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
    return diaArray[dia];
}

function dia_to_mes(date){
    //a isolar o dia
    var split = date.split("-");
    var data_split = split[1];

    //nova variavel do tipo data
    var myMoth = new Date();
    //mudar o mes para o data_split
    myMoth.setDate(data_split);
    //getMonth ve o mes em relacao num mes
    var mes = myMoth.getMonth();
    var mesArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return mesArray[mes];
}

/* Funcoes para o index */
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
        url: URL_FirstCities,
        data: {
            id: "6167865,1850147,2267057,5368361,703448,2147714",
            units: "metric",
            appid: API_KEY
        },
    }).done(function (msg) {
        var lista_filmes = $("#lista-cidades");
        lista_filmes.html("");
        console.log( msg);
        // console.log(msg);
        var i;
        for(i = 0; i < msg.cnt; i++){
            // console.log(msg);

            var result_html = div_cidades_clone.clone();

            var cidade = msg.list[i].name;
            var temperatuta = msg.list[i].main.temp;
            var sigla = msg.list[i].sys.country;
            var tempo = msg.list[i].weather[0].main;
            var icon = msg.list[i].weather[0].icon;
            var link = msg.list[i].id;

            var cidade_html = $(".cidade", result_html);
            var temperatura_html = $(".temperatura",result_html);
            var sigla_html = $(".sigla", result_html);
            var tempo_html = $(".tempo",result_html);
            var icon_html = $(".icon", result_html);
            var link_html = $(".idcidade", result_html);

            cidade_html.text(cidade);
            temperatura_html.text(temperatuta + "ºC");
            sigla_html.text("  - " +sigla);
            tempo_html.text(tempo);
            link_html.attr("href", "detalhes.html?id=" + link);

            var completo= "http://openweathermap.org/img/w/"+ icon + ".png";
            icon_html.attr('src',completo);

            lista_filmes.append(result_html);
        }
    });
}

/* Feito em  jquery para ficar isolado

*  Pesquisar por pais - Index
*
*  Notas: de tempo para tempo a api nao devolve a sligla do pais */
$(document).ready(function () {

    $('#btnprocurar').on('click', function(){
        paises_iniciais();
        var cidade = $("#procurar_cidade").val();


        $.ajax({
            method: "GET",
            url: URL_MultiSearch,
            data: {
                q: cidade,
                units: "metric",
                appid: API_KEY
            },
        }).done(function (msg) {
            var lista_pesquisa = $("#lista-pesquisa");
            lista_pesquisa.html("");
            console.log( msg);
            var e;
            for(e = 0; e < msg.count; e++) {
                //console.log(msg.list[i].name);

                var result_html = div_cidades_clone.clone();

                var cidade = msg.list[e].name;
                var temperatuta = msg.list[e].main.temp;
                var sigla = msg.list[e].sys.country;
                var tempo = msg.list[e].weather[0].main;
                var icon = msg.list[e].weather[0].icon;
                var link = msg.list[e].id;

                var cidade_html = $(".cidade", result_html);
                var temperatura_html = $(".temperatura", result_html);
                var sigla_html = $(".sigla", result_html);
                var tempo_html = $(".tempo", result_html);
                var icon_html = $(".icon", result_html);
                var link_html = $(".idcidade", result_html);

                cidade_html.text(cidade);
                temperatura_html.text(temperatuta + "ºC");
                sigla_html.text("  - " +sigla);
                tempo_html.text(tempo);
                link_html.attr("href", "detalhes.html?id=" + link);

                var completo = "http://openweathermap.org/img/w/" + icon + ".png";
                icon_html.attr('src', completo);

                lista_pesquisa.append(result_html);
            }
        });

    });
});


$(function () {
    /********** Index ********************/
    var div_cidades = $(".pre_cidades");
    div_cidades_clone = div_cidades.clone();
    div_cidades.hide();

    var div_pesquisa = $(".pesquisa_cidades");
    div_pesquisa_clone = div_pesquisa.clone();
    div_pesquisa.hide();
    //Todo o respetivo ao index
    paises_iniciais();

    /**************** Detalhes ********************/

    var barra = window.location.href;
    var split_it = barra.split("id=");
    var idcidade = split_it[1];

    //console.log(idcidade);

    var div_temperatura = $(".detalhes-temperatura");
    div_detalhes_temperatuta_clone = div_temperatura.clone();
    div_temperatura.hide();

    var div_cidade = $(".detalhes-cidade");
    div_detalhes_cidade_clone = div_cidade.clone();
    div_cidade.hide();

    $.ajax({
        method: "GET",
        url: URL,
        data: {
            id: idcidade,
            units: "metric",
            appid: API_KEY
        },
    }).done(function (msg) {
        console.log("Detalhes: ",msg);
        var detalhes_temp = $("#detalhes-temp");
        detalhes_temp.html("");

        var detalhes_cidade = $("#detalhes-cid");
        detalhes_cidade.html("");
        // console.log(msg);

        var html_detalhes = div_detalhes_temperatuta_clone.clone();
        var html_temperatura = div_detalhes_cidade_clone.clone();

        var temperatura = msg.main.temp;
        var tempo = msg.weather[0].main;
        var icon = msg.weather[0].icon;

        var nome_cidade = msg.name;
        var sigla = msg.sys.country;
        var vento = msg.wind.speed;
        var nuvens = msg.clouds.all;
        var pre_Atmosferica = msg.main.pressure;
        var humidade = msg.main.humidity;
        var lat = msg.coord.lat;
        var lon = msg.coord.lon;

        var temperatura_html = $(".temperatura", html_detalhes);
        var tempo_html = $(".tempo", html_detalhes);
        var icon_html = $(".icon", html_detalhes);
        var link_html = $(".idcidade", html_detalhes);

        var nome_cidade_html = $(".nome-cidade", html_temperatura);
        var sigla_html = $(".sigla", html_temperatura);
        var vento_html = $(".vento", html_temperatura);
        var nuvens_html = $(".nuvens", html_temperatura);
        var pre_Atmosferica_html = $(".pressaoAtmos", html_temperatura);
        var humidade_html = $(".humidade", html_temperatura);
        var lat_html = $(".latitude", html_temperatura);
        var lon_html = $(".longitude", html_temperatura);

        temperatura_html.text(temperatura + "ºC");
        tempo_html.text(tempo);

        var completo= "http://openweathermap.org/img/w/"+ icon + ".png";
        icon_html.attr('src',completo);
        link_html.attr("href", "forecast.html?id=" + idcidade);

        nome_cidade_html.text(nome_cidade);
        sigla_html.text(" -"+sigla);
        vento_html.text(vento);
        nuvens_html.text(nuvens);
        pre_Atmosferica_html.text(pre_Atmosferica);
        humidade_html.text(humidade);
        lat_html.text(lat);
        lon_html.text(lon);


        detalhes_temp.append(html_detalhes);
        detalhes_cidade.append(html_temperatura);

    });

    /********************** Forecast ******************************/
//**********************1ª e 2ª Divisao*****************************//
    //+++++++++++++++++++++++++++++++++++++++++++++//

    var div_semana = $(".dia-semana");
    div_detalhes_semana_clone = div_semana.clone();
    div_semana.hide();

    var div_informacao = $(".dia-informacao");
    div_detalhes_dia = div_informacao.clone();
    div_informacao.hide();

    //+++++++++++++++++++++++++++++++++++++++++++++//
    var div_dia_repete = $(".dia-repete");
    div_detalhes_dia_repete = div_dia_repete.clone();
    div_dia_repete.hide();

    var div_informacao_repete = $(".dia-informacao");
    div_detalhes_informacao_repete = div_informacao_repete.clone();
    div_informacao_repete.hide();
    //++++++++++++++++++++++++++++++++++++++++++++++//
    var div_horas_horas = $(".horas-horas");
    div_detalhes_horas = div_horas_horas.clone();
    div_dia_repete.hide();
    //****************************************************************//
    $.ajax({
        method: "GET",
        url: urlForecast,
        data: {
            id: idcidade,
            units: "metric",
            appid: API_KEY
        },
    }).done(function (msg) {
        console.log(msg);
        var data_noDate = [];
        var data = [];
        var numeros = [];

        var i,d = 0;

        //A dar split da Data e horas
        for(i = 0; i < msg.cnt; i++){
            var data_temp = msg.list[i].dt_txt;
            var split_data = data_temp.split(" ");
            data_noDate[i] = split_data[0];

            //A verificar se no array Data existe o data_noDate
            if(!data.includes(data_noDate[i])){
                //A guardar o numero na posicao para o msg
                numeros[d] = i;
                //A guardar a data sem ser repetida
                data[d] = data_noDate[i];
                d++;
            }
        }
        //*********************** 1ª Divisão*****************************************//

        //bloco do dia da semana
        var detalhes_pri_bloco = $("#detalhe-primeiro-bloco");
        detalhes_pri_bloco.html("");

        //bloco dos dados
        var detalhes_sec_bloco = $("#detalhe-segundo-bloco");
        detalhes_sec_bloco.html("");

        //bloco do dia da semana
        var html_detalhes_pri_bloco = div_detalhes_semana_clone.clone();
        //bloco dos dados
        var html_detalhes_sec_bloco = div_detalhes_dia.clone();

        //bloco do dia da semana
        //o "_f" significa final
        var data_f = dia_da_semana(data[0]); //dia da semana
        var split = data[0].split("-");
        var dia_f = split[2]; // dia
        var mes_f = dia_to_mes(data[0]); //mes

        //bloco dos dados
        var nome = msg.city.name;
        var tempo = msg.list[numeros[0]].main.temp;
        var vento = msg.list[numeros[0]].wind.speed;
        var tipo = msg.list[numeros[0]].weather[0].main;
        var icon = msg.list[numeros[0]].weather[0].icon;

        //aceder ao class html
        //semana
        var data_html = $(".day", html_detalhes_pri_bloco);
        var mes_html = $("#mes", html_detalhes_pri_bloco);
        var dia_html = $(".date", html_detalhes_pri_bloco);
        //dados
        var localizacao_html = $(".localizacao", html_detalhes_sec_bloco);
        var tempo_html = $(".numero", html_detalhes_sec_bloco);
        var icon_html = $(".icon", html_detalhes_sec_bloco);
        var vento_html = $(".vento", html_detalhes_sec_bloco);
        var tipo_html = $(".tempo", html_detalhes_sec_bloco);

        //semana
        data_html.text(data_f);
        dia_html.text(dia_f);
        mes_html.text(mes_f);

        //dados
        localizacao_html.text(nome);
        tempo_html.text(tempo);

        var completo= "http://openweathermap.org/img/w/"+ icon + ".png";
        icon_html.attr('src',completo);
        vento_html.text("Vento: " + vento+ " km/h");
        tipo_html.text(tipo);

        //--------------//
        detalhes_pri_bloco.append(html_detalhes_pri_bloco);
        detalhes_sec_bloco.append(html_detalhes_sec_bloco);


        /*
        for(i = 0; i < numeros.length; i++){
            // console.log(msg);

            var temp = msg.list[numeros[i]].main.temp;

            console.log(temp);
        }
*/
        //data atual
        //var myDate = new Date().toISOString().slice(0,10);
        /*
                for (i = 0; i < data.length; i++){
                    console.log(data[i]);
                    console.log(numeros[i]);
                }*/

        //**********************2ª Divisao*****************************//
        //bloco do dia da semana
        var detalhes_repete_pri = $("#repete-primeiro-bloco");
        detalhes_repete_pri.html("");

        //bloco dos dados
        var detalhes_repete_sec = $("#repete-segundo-bloco");
        detalhes_repete_sec.html("");

        var e;
        for (e = 1; e <  data.length; e++){

            // repete dia
            var html_detalhes_repete_pri = div_detalhes_dia_repete.clone();

            // "_d" para 2º divisao
            var data_d = dia_da_semana(data[e]); //dia da semana
            var icon_d = msg.list[numeros[e]].weather[0].icon;
            var tempo_max = msg.list[numeros[e]].main.temp_max;
            var tempo_min = msg.list[numeros[e]].main.temp_min;

            var data_html_d = $(".day", html_detalhes_repete_pri);
            var icon_html_d = $(".icon", html_detalhes_repete_pri);
            var tempo_max_html_d = $(".temp-max", html_detalhes_repete_pri);
            var tempo_min_html_d = $(".temp-min", html_detalhes_repete_pri);

            data_html_d.text(data_d);
            var completo_d= "http://openweathermap.org/img/w/"+ icon_d + ".png";
            icon_html_d.attr('src',completo_d);
            tempo_max_html_d.text("Max " +tempo_max + "º");
            tempo_min_html_d.text("Min " +tempo_min + "º");

            detalhes_repete_pri.append(html_detalhes_repete_pri);
        }

        //**********************3ª Divisao*****************************//
        var lista_horas = $("#lista-horas");
        lista_horas.html("");
        var r,y,s=0,l=0;
        //console.log(data);

        var datas = [];
        var datas2Temp = [];
        var datas2 = [];


        var s;
        for (s = 0; s <  data.length; s++){

            // repete dia
            var html_detalhes_horas = div_detalhes_horas.clone();

            // "_d" para 2º divisao
            var data_h = dia_da_semana(data[e]); //dia da semana
            var icon_h = msg.list[numeros[e]].weather[0].icon;
            var tempo_h = msg.list[numeros[e]].main.temp_max;

            var data_html_h = $(".data1", html_detalhes_horas);
            var icon_html_h = $(".icon1", html_detalhes_horas);
            var tempo_html_h = $(".tempo1", html_detalhes_horas);

            data_html_h.text(data_h);
            var completo_h= "http://openweathermap.org/img/w/"+ icon_h + ".png";
            icon_html_h.attr('src',completo_h);
            tempo_html_h.text("Max " +tempo_h + "º");

            lista_horas.append(html_detalhes_horas);
        }


        /*

        for(y = 0; y < msg.cnt ; y ++) {

            datas[y] = msg.list[y].dt_txt;
            var splitt = datas[y].split(" ");
            datas2Temp[y] = splitt[0]; // dia*//*

            var objDatas = new Date(datas[s]);
            var objDatas2Temp = new Date((msg.list[y].dt_txt).split(" ")[0]);

            if( objDatas2Temp <= objDatas){
                console.log("dentro if", objDatas2Temp, " e ", objDatas);
                if(objDatas2Temp === objDatas){
                    console.log("dentro dentro if", objDatas2Temp, " e ", objDatas);
                    s++;
                }
            }

            //console.log("datas",datas2Temp[s]);
            //console.log("msg result",(msg.list[y].dt_txt).split(" ")[0]);
            }*/

    });

});