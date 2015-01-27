/*
Program Name
This is my program
version: 0.0.1
author: Joel 
created: Dec 2014
*/

var monitor;

function init(){
    console.log("Started...");
    
    var register = new CashRegister();
        
    
    window.callback = function(d) {
        monitor = d.body;
    }
    
    btnOpen.onclick = function(){ 
        window.open("monitor.html","monitor","height=800,width=600"); 
    }
    
    btnAdd.onclick = function(){ 
        monitor.innerHTML = "TEST";
    }
}