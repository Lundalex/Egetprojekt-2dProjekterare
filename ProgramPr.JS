var InputdataX = []
var InputdataY = []
var InputdataZ = []
var TotalX = []
var TotalY = []
var TotalZ = []
const F = 100
var Procdata = []
let ProcX = (X, Z) => F/Z*X
let ProcY = (Y, Z) => F/Z*Y
function InputCoords(){
    Procdata = []
    let Coordamount = +prompt("insert amount of coordinates")
    for (let i = 0; i < Coordamount; i++) {
        const X=prompt("X:")
        const Y=prompt("Y:")
        const Z=prompt("Z:")
        TotalX.push(X)
        TotalY.push(Y)
        TotalZ.push(Z)
    }
}

function Compile() {
    const Avgstyle=document.getElementById("CompileModeinput").value
    // if Avgstyle = (Center All-Avg)
    if(Avgstyle=1){
    const TX = TotalX.length
    const TY = TotalY.length
    const TZ = TotalZ.length
    const MX=TotalX.reduce(function RedX(total, value){return Number(total) + Number(value)})/TX
    const MY=TotalY.reduce(function RedY(total, value){return Number(total) + Number(value)})/TY
    const MZ=TotalZ.reduce(function RedZ(total, value){return Number(total) + Number(value)})/TZ
    TotalX=TotalX.map(function Procfunc(num){return num-MX})
    TotalY=TotalY.map(function Procfunc(num){return num-MY})
    TotalZ=TotalZ.map(function Procfunc(num){return num-MZ})

    }






    Procdata.push(ProcX(X, Z))
    Procdata.push(ProcY(Y, Z))



    for (let i = 0; i < Procdata.length; i+=2) {
        ctx.moveTo(400+Number(Procdata[i]),400+Number(Procdata[i+1]));
        ctx.lineTo(400+Number(Procdata[i+2]),400+Number(Procdata[i+3]));
        ctx.stroke();
    }}