var InputX = []
var InputY = []
var InputZ = []

var V = []
var C = []

var XPosNeg = []
var ZPosNeg = []

var ProjectedX = []
var ProjectedY = []

var Subcoordvalue1
var Subcoordvalue2

var FocalLength = 0

var FrameAmount = 0

function InputCoords(){
InputX = []
InputY = []
InputZ = []
alert(InputX.length)
    // Accept inputvalue X/Y/Z
    let Coordamount = +prompt("insert amount of coordinates")
    for (let i = 0; i < Coordamount; i++) {
        // InputX.push(+prompt("Coord " + (i+1) + " - X"))
        // InputY.push(+prompt("Coord " + (i+1) + " - Y:"))
        // InputZ.push(+prompt("Coord " + (i+1) + " - Z:"))
    }
    // Cube test
    InputX.push(100)
    InputY.push(100)
    InputZ.push(100)
    InputX.push(200)
    InputY.push(100)
    InputZ.push(100)
    InputX.push(200)
    InputY.push(200)
    InputZ.push(100)
    InputX.push(100)
    InputY.push(200)
    InputZ.push(100)
    InputX.push(100)
    InputY.push(200)
    InputZ.push(200)
    InputX.push(200)
    InputY.push(200)
    InputZ.push(200)
    InputX.push(200)
    InputY.push(100)
    InputZ.push(200)
    InputX.push(100)
    InputY.push(100)
    InputZ.push(200)
    InputX.push(100)
    InputY.push(100)
    InputZ.push(100)
    InputX.push(200)
    InputY.push(100)
    InputZ.push(100)
    InputX.push(200)
    InputY.push(100)
    InputZ.push(200)
    InputX.push(200)
    InputY.push(200)
    InputZ.push(200)
    InputX.push(200)
    InputY.push(200)
    InputZ.push(100)
}

function Compile() {
    // Import options
    FrameAmount = +prompt("Animation length(FrameAmount):")
    FocalLength = +prompt("Focal length:")

    const Avgstyle=document.getElementById("CompileModeinput").value
    // if Avgstyle = (Center All-Avg)
    if(Avgstyle==1){
        // Beräkna medelvärden. Anpassa sedan insatta X/Y/Z-värden efter medelvärden.
        const TX=InputX.length
        const TY=InputY.length
        const MX=InputX.reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
        const MY=InputY.reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
        InputX=InputX.map(function Procfunc(num){return num-MX})
        InputY=InputY.map(function Procfunc(num){return num-MY})

        for (let i = 0; i < InputX.length; i++) {
            // V = arctan (Z/X)
            V[i] = (180/Math.PI*(Math.atan(Math.abs(InputX[i])/Math.abs(InputZ[i]))))
            // Är X + eller - ? Är X + eller - ?
            if(InputX[i] > 0){XPosNeg[i] = true}else{XPosNeg[i] = false}
            if(InputZ[i] > 0){ZPosNeg[i] = true}else{ZPosNeg[i] = false}
            // Beräkna hypotenusans längd mellan X och Z
            C[i] = (Math.sqrt(Math.pow(InputX[i], 2) + Math.pow(InputZ[i], 2)))
        }
        
        for (let i = 0; i <= FrameAmount; i++) {

            for (let p = 0; p < C.length; p++) {
                // Alla V+=5, med X/Z Pos/Neg-ändringar
                V[p] = V[p] + 5
                if(V[p] >= 90){
                if((XPosNeg[p] = true) & (ZPosNeg[p] = true)){XPosNeg[p] = false}
                else if((XPosNeg[p] = false) & (ZPosNeg[p] = true)){ZPosNeg[p] = false}
                else if((XPosNeg[p] = false) & (ZPosNeg[p] = false)){XPosNeg[p] = true}
                else if((XPosNeg[p] = true) & (ZPosNeg[p] = false)){ZPosNeg[p] = true}
                V[p] = V[p] % 90
                }
                // Extrahera (X) & (Z) från hypotenusan(C) och vinkeln(V)
                Subcoordvalue1=(Math.cos(V[p]/180/Math.PI)*C[p])
                Subcoordvalue2=(Math.sin(V[p]/180/Math.PI)*C[p])
                // PX = X/(Z+F)*F. Ändrar även variabelvärde med X/Z-Pos/Neg
                if((XPosNeg[p] = true) & (ZPosNeg[p] = true)){ProjectedX[p] = Subcoordvalue1/(Subcoordvalue2 + FocalLength) * FocalLength}
                else if((XPosNeg[p] = false) & (ZPosNeg[p] = true)){ProjectedX[p] = (-1 * Subcoordvalue2)/(Subcoordvalue1 + FocalLength) * FocalLength}
                else if((XPosNeg[p] = false) & (ZPosNeg[p] = false)){ProjectedX[p] = (-1 * Subcoordvalue1)/((-1 * Subcoordvalue2) + FocalLength) * FocalLength}
                else if((XPosNeg[p] = true) & (ZPosNeg[p] = false)){ProjectedX[p] = Subcoordvalue2/((-1 * Subcoordvalue1) + FocalLength) * FocalLength}
                // Projected Y inte implementerat
                ProjectedY[p] = InputY[p]
            }
            // Rita linjer med PX och PY
            for (let l = 0; l < ProjectedX.length; l++) {
                ctx.moveTo(400+Number(ProjectedX[l]),400+Number(ProjectedY[l]));
                ctx.lineTo(400+Number(ProjectedX[l+1]),400+Number(ProjectedY[l+1]));
                ctx.stroke();
            }
            // Logging(Development)
            console.log("InputX")
            console.log(InputX)
            console.log("InputY")
            console.log(InputY)
            console.log("InputZ")
            console.log(InputZ)
            console.log("V")
            console.log(V)
            console.log("C")
            console.log(C)
            console.log("XPosNeg")
            console.log(XPosNeg)
            console.log("ZPosNeg")
            console.log(ZPosNeg)
            console.log("ProjectedX")
            console.log(ProjectedX)
            console.log("ProjectedY")
            console.log(ProjectedY)
        }

    }
    
}