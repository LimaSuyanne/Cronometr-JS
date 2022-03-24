"use strict"

var hh = 0;
var mm = 0;
var ss = 0;
var ms = 0;

var tempo = 10; // Ciclo dos milesimos
var cron;

// Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

// Para o temporizador mas nao limpa as variáveis
function pause(){
    clearInterval(cron);
}

// Para o temporizador e limpa as variáveis
function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;

    document.getElementById('counter').innerText = '00:00:00:00';
}


function timer(){
    ms++;

    if (ms == 99){
        ms = 0;
        ss++;
   
        if (ss == 60) {
            ss = 0;
            mm++;
        }    

            if (mm == 59){
                 mm = 0;
                hh++;
            }
    }
    
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ms < 10 ? '0' + ms : ms);
    
    document.getElementById('counter').innerText = format;

    return format;
    
}

