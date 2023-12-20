// ==UserScript==
// @name         北科課程系統 CSS
// @namespace    http://codeberg.org/proton-penguin/
// @version      2023-12-20
// @description  北科課程系統的 Graphite 主題
// @author       proton-penguin
// @match        https://aps.ntut.edu.tw/*
// @icon         none
// @grant        none
// @license      GPL 3.0
// ==/UserScript==
const html = document;

var colortheme = 'day';

function setTheme(t){
    if(t === 'night'){
        colortheme = 0;
        console.log('night theme');
    }else{
        colortheme = 1;
        console.log('day theme');
    }
}

function bgImg(){
    const object = html.querySelector("body");
    object.src="";
    const theme = colortheme?"margin: auto; background: none; background-color: #e2e2e2; font-family: Arial, Helvetica, sans-serif; padding: 30px":"margin: auto; background: none; background-color: #2c2c2c; font-family: Arial, Helvetica, sans-serif; padding: 30px";
    object.style = theme;
}

function rmImg(){
    const object = html.getElementsByTagName("img");
    for(var i = 0; i < object.length; i++){
        console.log(object[i]);
        object[i].src = "";
    }
}

function selectBoxStyle(){
    const object = html.getElementsByTagName("select");
    const theme = colortheme?"background-color: #2c2c2c; border-radius: 5px; border: none; color: #e0e0e0; margin: 5px;":"background-color: #e0e0e0; border-radius: 5px; border: none; color: #2c2c2c; margin: 5px;";
    for(var i=0;i < object.length; i++){
        console.log(object[i]);
        object[i].style = theme;
    }
}


function buttonStyle(){
    const object = html.getElementsByTagName("input");
    const theme = colortheme?"cursor:pointer; background-color: #2c2c2c; border: 0; border-radius: 10px; color: #e0e0e0; font-size: 15px; padding: 10px 15px; margin: 5px;":"cursor:pointer; background-color: #e0e0e0; border: 0; border-radius: 10px; color: #2c2c2c; font-size: 15px; padding: 10px 15px; margin: 5px;";
    for(var i=0;i < object.length; i++){
        console.log(object[i]);
        object[i].style = theme;
    }
}

function tableStyle(){
    const object = html.getElementsByTagName("table");
    const theme = colortheme?"margin:auto; border-color: #2c2c2c; color: #e0e0e0; border-collapse: collapse; border-style: solid; border-width: 2px; height: 24px; margin: 5px;":"margin:auto; border-color: #e0e0e0; color: #2c2c2c; border-collapse: collapse; border-style: solid; border-width: 2px; height: 24px; margin: 5px;";
    for(var i = 0; i < object.length; i++){
        console.log(object[i]);
        object[i].style= theme;
    }
}

function checkBox(){
    const object = html.querySelectorAll('input[type=checkbox]');
    for(var i=0;i < object.length; i++){
        console.log(object[i]);
        //Do your code here
    }
}

function textStyle(text){
    const object = html.querySelectorAll(text);
    const theme = colortheme?"color: #2c2c2c; font-weight: bold; margin: 5px;":"color: #e0e0e0; font-weight: medium; margin: 5px;";
    for(var i=0;i < object.length; i++){
        console.log(object[i]);
        object[i].style = theme;
    }
}

function allTextStyle(){
    textStyle('p');
    textStyle('h1');
    textStyle('h2');
    textStyle('h3');
    textStyle('h4');
    textStyle('h5');
    textStyle('h6');
    textStyle('li');
    textStyle('td');
    textStyle('th');
    textStyle('font');
    textStyle('a');
    textStyle('blockquote');
    textStyle('form');
    //textStyle();
}


function addPadding(){
    html.style="paddiing: 30px";
}



(function() {
    'use strict';
    setTheme(colortheme);
    bgImg();
    rmImg();
    selectBoxStyle();
    buttonStyle();
    tableStyle();
    checkBox();
    allTextStyle();
    addPadding();
})();