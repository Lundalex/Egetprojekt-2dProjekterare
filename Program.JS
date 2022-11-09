var Inputdata = []
var Procdata = new Array

function InputCoords(){
    Inputdata.length = 0
    Coordamount = +prompt("insert amount of coordinates")
    for (let i = 0; i < Coordamount; i++) {
        Inputdata.push(prompt("X:"))
        Inputdata.push(prompt("Y:"))
    }
}

function Load() {
    Inputdata.forEach(function Procfunc(value){
Procdata.push(10*value)
    })
    for (let i = 0; i < Procdata.length; i+=2) {
        ctx.moveTo(Number(Procdata[i].slice(0,3)), Number(Procdata[i+1].slice(0,3)));
        ctx.lineTo(Number(Procdata[i+2].slice(0,3)), Number(Procdata[i+3].slice(0,3)));
        ctx.stroke();
    }
}