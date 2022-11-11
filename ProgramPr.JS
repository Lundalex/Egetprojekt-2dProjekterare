var InputdataX = []
var InputdataY = []
var InputdataZ = []
var TotalX = []
var TotalY = []
var TotalZ = []
const F = 100
var Procdata = []
var TimeadjX = []
var TimeadjZ = []
let ProcX = (TimeadjX, TimeadjZ) => F/TimeadjZ*TimeadjX
let ProcY = (Y, TimeadjZ) => F/TimeadjZ*Y

function InputCoords(){
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
    const TX=TotalX.length
    const TY=TotalY.length
    const TZ=TotalZ.length
    const MX=TotalX.reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
    const MY=TotalY.reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
    const MZ=TotalZ.reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
    TotalX=TotalX.map(function Procfunc(num){return num-MX})
    TotalY=TotalY.map(function Procfunc(num){return num-MY})
    TotalZ=TotalZ.map(function Procfunc(num){return num-MZ})
    var C = []
    var V = []
    for (let i = 0; i < TotalX.length; i++) {
        C.push(Math.sqrt(Math.pow(TotalX[i], 2) + Math.pow(TotalZ[i], 2)))
        V.push(180/Math.PI*(Math.atan(TotalX[i]/TotalZ[i])))
    }
    for (let o = 0; o < 100; o++) {
        Procdata = []
        TimeadjX = Number(0)
        TimeadjZ = Number(0)
        V=V.map(function Vtime(num){return((num+5)%360)})
        for (let p = 0; p < C.length; p++) {
            TimeadjX=(Math.cos(V[p]/180/Math.PI)*C[p])
            TimeadjZ=(Math.sin(V[p]/180/Math.PI)*C[p])
            Procdata.push(ProcX(TimeadjX, TimeadjZ))
            Procdata.push(ProcY(Y, TimeadjZ))
        }
        for (let l = 0; l < Procdata.length; l+=2) {
            ctx.moveTo(400+Number(Procdata[l]),400+Number(Procdata[l+1]));
            ctx.lineTo(400+Number(Procdata[l+2]),400+Number(Procdata[l+3]));
            ctx.stroke();
        }
        
        // Wait Time (function)

        // Clear Canvas (function)
        
        }
 
    }
// if Avgstyle = (Center MinMax-Avg)
}