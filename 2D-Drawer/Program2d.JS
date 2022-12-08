var Inputdata = []
var Procdata = new Array

function InputCoords(){
    Inputdata.length = 0
    Coordamount = +prompt("insert amount of coordinates")
    for (let i = 0; i < Coordamount; i++) {
        Inputdata.push(prompt("X:"))
        Inputdata.push(prompt("Y:"))
    }
    Procdata = Inputdata.map(function Procfunc(num) {
        return num * 1;
      })}

function Load() {
    for (let i = 0; i < Procdata.length; i+=2) {
        ctx.moveTo(Number(Procdata[i]), Number(Procdata[i+1]));
        ctx.lineTo(Number(Procdata[i+2]), Number(Procdata[i+3]));
        ctx.stroke();
    }}