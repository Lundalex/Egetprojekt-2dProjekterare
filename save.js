<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>OP Blender 3D-Engine (TM)</h1>

    <div style="display: flex; flex-direction: row">

        <canvas id="Canvas" width="800" height="800" style="border:10px solid #00ff80;"></canvas>

        <div style="width: 10px;"></div>

        <div style="display: flex; flex-direction: column;">

            <h1 style="font-weight: bolder;">Camera:</h1>

        <div style="display: flex; flex-direction: column;">
        <div style="width: 180; height: 50; display: flex; flex-direction: row">
            <div style="height: 50px; width: 50px ;background-color: rgb(69, 218, 32)"onclick="MoveLeft()">Left</div>
            <div style="height: 50px; width: 50px; background-color: #0004ff;"onclick="MoveAhead()">Ahead</div>
            <div style="height: 50px; width: 50px; background-color: rgb(69, 218, 32)"onclick="MoveRight()">Right</div>
            </div>
            <div style="width: 120; height: 50; display: flex; flex-direction: row">
            <div style="height: 50px; width: 50px; background-color: white"></div>
            <div style="height: 50px; width: 50px; background-color: rgb(69, 218, 32)"onclick="MoveBack()">Back</div>
            </div>
        </div>
        <br>
        <div style="display: flex; flex-direction: column;">
            <div style="width: 150; height: 50; display: flex; flex-direction: row">
            <div style="height: 50px; width: 50px; background-color: white"></div>
            <div style="height: 50px; width: 50px; background-color: rgb(255, 251, 0)"onclick="MoveUp()">Up</div>
            </div>
            <div style="width: 150; height: 50; display: flex; flex-direction: row">
            <div style="height: 50px; width: 50px; background-color: white"></div>
            <div style="height: 50px; width: 50px; background-color: rgb(203, 32, 218)"onclick="MoveDown()">Down</div>
            </div>
        </div>

        <h1 style="font-weight: bolder;">Settings:</h1>

        <button style="width: 150px; font-weight: 1000;" onclick="Compile()">Compile</button>
        <button style="width: 150px; font-weight: 1000;" onclick="QuickStart()">Quick Start</button>
        <br>
        <button style="width: 150px;" onclick="InputCoords()">InputCords</button>
        <br><br>

        <select style="width: 150px;" id="CompileModeinput">
            <option value="0">Dots(W.o. Canvas Clear)</option>
            <option value="1">Dots</option>
            <option value="2">Lines</option>
        </select>
        <br>

            <label>Starting Angle:</label>
            <div style="display: flex; flex-direction: row"><input style="width: 150px;" type="text" id="1"><div id="5"></div></div>
            <label>Animation Length:</label>
            <div style="display: flex; flex-direction: row"><input style="width: 150px;" type="text" id="2"><div id="6"></div></div>
            <label>Focal Length:</label>
            <div style="display: flex; flex-direction: row"><input style="width: 150px;" type="text" id="3"><div id="7"></div></div>
            <label>Increment Speed - X:</label>
            <div style="display: flex; flex-direction: row"><input style="width: 150px;" type="text" id="4"><div id="8"></div></div>
            <label>Increment Speed - Y:</label>
            <div style="display: flex; flex-direction: row"><input style="width: 150px;" type="text" id="9"><div id="10"></div></div>
            <br>
            <button style="width: 150px;" onclick="SubmitSettings()">Submit Settings</button>
            

    </div>

<script>
let canvas = document.getElementById("Canvas")
let ctx = canvas.getContext("2d")
let context = canvas.getContext('2d')







let InputX = []
let InputY = []
let InputZ = []

let VXZ = []
let CXZ = []
let VYZ = []
let CYZ = []
// Prime
let PRIMEVXZ =[]
let PRIMECXZ = []
let PRIMEVYZ = []
let PRIMECYZ = []

let PRIMEOUTPUTVXZ = []
let PRIMEOUTPUTVYZ = []
//
let TX = 0
let TY = 0
let TZ = 0
let MX = 0
let MY = 0
let MZ = 0

let XPosNeg = []
let ZPosNeg = []
let YPosNeg = []
let ZYPosNeg = []
// Prime
let PRIMEXPosNeg = []
let PRIMEZPosNeg = []
let PRIMEYPosNeg = []
let PRIMEZYPosNeg = []
//
let LeaderX = []
let LeaderY = []
let LeaderZ = []

let ProjectedX = []
let ProjectedY = []

let Subcoordvalue1
let Subcoordvalue2
let Subcoordvalue3
let Subcoordvalue4

let PRIMESubcoordvalue1 = []
let PRIMESubcoordvalue2 = []
let PRIMESubcoordvalue3 = []
let PRIMESubcoordvalue4 = []

let LeaderStyle = []

let Avgstyle = 0

let FocalLength = 0

let FrameAmount = 0

let IncrementX = 0
let IncrementY = 0

let CameraAngle = +prompt("Camera Angle")

function InputCoords(){

InputX = []
InputY = []
InputZ = []

let Groupcount = +prompt("Insert: Amount of Groups")
let Preset=1
while((Preset != 0) && (Groupcount > 0)){
    Preset = +prompt("Insert: Preset (0 for No Presets), (1 for Cube Preset)")
    // Cube Preset
    if((Preset == 1) && (Groupcount > 0)){
        let ChangeThisName = +prompt("Insert: Animation Style of Cube (0 for Manual Input), (1 for Weighted Average)")
        LeaderStyle.push(ChangeThisName)
        if(ChangeThisName == 0){
        LeaderX.push(+prompt("Insert: Lead X for Cube"))
        LeaderY.push(+prompt("Insert: Lead Y for Cube"))
        LeaderZ.push(+prompt("Insert: Lead Z for Cube"))
    }
        let CDX = +prompt("Insert: Cube Deviation - Axis X")
        let CDY = +prompt("Insert: Cube Deviation - Axis Y")
        let CDZ = +prompt("Insert: Cube Deviation - Axis Z")
        InputX.push([100+CDX,200+CDX,200+CDX,100+CDX,100+CDX,100+CDX,200+CDX,200+CDX,100+CDX,100+CDX,100+CDX,200+CDX,200+CDX,200+CDX,200+CDX,100+CDX,100+CDX])
        InputY.push([100+CDY,100+CDY,200+CDY,200+CDY,100+CDY,100+CDY,100+CDY,200+CDY,200+CDY,100+CDY,100+CDY,100+CDY,100+CDY,200+CDY,200+CDY,200+CDY,200+CDY])
        InputZ.push([100+CDZ,100+CDZ,100+CDZ,100+CDZ,100+CDZ,200+CDZ,200+CDZ,200+CDZ,200+CDZ,200+CDZ,100+CDZ,100+CDZ,200+CDZ,200+CDZ,100+CDZ,100+CDZ,200+CDZ])
        Groupcount--
    }
    // (Add more Presets)
}
for (let i = 0; i < Groupcount; i++) {
    LeaderStyle[i] = +prompt("Insert: Animation Style of Group " + (i+1) + "(0 for Manual Input), (1 for Weighted Average)")
    if(LeaderStyle[i] == 0){
LeaderX[i] = +prompt("Insert: Lead X for Group " + (i+1))
LeaderY[i] = +prompt("Insert: Lead Y for Group " + (i+1))
LeaderZ[i] = +prompt("Insert: Lead Z for Group " + (i+1))
    }
    const Coordcount = +prompt("Insert: Amount of Coordinates for Group " + (i+1))
    let SubInputArrX = []
    let SubInputArrY = []
    let SubInputArrZ = []
    for (let o = 0; o < Coordcount; o++) {
    SubInputArrX.push(+prompt("Insert: Group" + (i+1) + " - Coord " + (o+1) + " - X"))
    SubInputArrY.push(+prompt("Insert: Group" + (i+1) + " - Coord " + (o+1) + " - Y"))
    SubInputArrZ.push(+prompt("Insert: Group" + (i+1) + " - Coord " + (o+1) + " - Z"))
    }
    InputX[i] = SubInputArrX
    InputY[i] = SubInputArrY
    InputZ[i] = SubInputArrZ
}
}

function Compile() {
    // Clear graph(fill)
    ctx.beginPath();
    ctx.rect(00, 00, 800, 800);
    ctx.fillStyle = "white";
    ctx.fill();

    // Import options
    // If Avgstyle = (Center All-Avg)
    
    // Beräkna medelvärden. Anpassa sedan insatta X/Y/Z-värden efter medelvärden (görs individuellt för varje Grupp)
for (let i = 0; i < InputX.length; i++) {
    TX=InputX[i].length
    TY=InputY[i].length
    TZ=InputZ[i].length
    const MX=InputX[i].reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
    const MY=InputY[i].reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
    const MZ=InputZ[i].reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
    InputX[i]=InputX[i].map(function Procfunc(num){return num-MX})
    InputY[i]=InputY[i].map(function Procfunc(num){return num-MY})
    InputZ[i]=InputZ[i].map(function Procfunc(num){return num-MZ})
    if(LeaderStyle[i] == 1){
        LeaderX[i] = MX
        LeaderY[i] = MY
        LeaderZ[i] = MZ
    }
}

for (let i = 0; i < InputX.length; i++) {
            // V = arctan (Z/X)
            VXZ[i]=(180/Math.PI*(Math.atan(Math.abs(LeaderX[i])/Math.abs(LeaderZ[i]))))
            VYZ[i]=(180/Math.PI*(Math.atan(Math.abs(LeaderY[i])/Math.abs(LeaderZ[i]))))
            // Är X + eller - ? Är X + eller - ?
            if(LeaderX[i]>0){XPosNeg[i]=true}else{XPosNeg[i]=false}
            if(LeaderZ[i]>0){ZPosNeg[i]=true}else{ZPosNeg[i]=false}
            if(LeaderY[i]>0){YPosNeg[i]=true}else{YPosNeg[i]=false}
            if(LeaderZ[i]>0){ZYPosNeg[i]=true}else{ZYPosNeg[i]=false}
            // Beräkna hypotenusans längd mellan X och Z
            CXZ[i]=(Math.sqrt(Math.pow(LeaderX[i],2) + Math.pow(LeaderZ[i],2)))
            CYZ[i]=(Math.sqrt(Math.pow(LeaderY[i],2) + Math.pow(LeaderZ[i],2)))
            VXZ[i]+=Degreeturn
            VYZ[i]+=Degreeturn
}
for (let g = 0; g < FrameAmount; g++) {
    if(Avgstyle != 0){
        setTimeout(CompileLoop, 20*g)   
    }
    else{
    CompileLoop()
    }}
}
    function CompileLoop(){
        // Clear canvas(fill)
            if(Avgstyle != 0){
                ctx.beginPath();
                ctx.rect(00, 00, 800, 800);
                ctx.fillStyle = "white";
                ctx.fill();
            }
            
            for (let p = 0; p < InputX.length; p++) {
                // Alla V+=5, med X/Z Pos/Neg-ändringar
                VXZ[p]-=IncrementX
                VYZ[p]-=IncrementY
                // Increment Pos/Neg Logic Table
                if(VXZ[p] >= 90){
                if((XPosNeg[p]==true)&(ZPosNeg[p]==true)){XPosNeg[p]= false}
                else if((XPosNeg[p]==false)&(ZPosNeg[p]==true)){ZPosNeg[p]=false}
                else if((XPosNeg[p]==false)&(ZPosNeg[p]==false)){XPosNeg[p]=true}
                else if((XPosNeg[p]==true)&(ZPosNeg[p]==false)){ZPosNeg[p]=true}
                VXZ[p] -= 90}
                if(VXZ[p] <= 0){
                if((XPosNeg[p]==true)&(ZPosNeg[p]==true)){ZPosNeg[p]= false}
                else if((XPosNeg[p]==false)&(ZPosNeg[p]==true)){XPosNeg[p]=true}
                else if((XPosNeg[p]==false)&(ZPosNeg[p]==false)){ZPosNeg[p]=true}
                else if((XPosNeg[p]==true)&(ZPosNeg[p]==false)){XPosNeg[p]=false}
                VXZ[p] += 90}

                if(VYZ[p] >= 90){
                if((YPosNeg[p]==true)&(ZYPosNeg[p]==true)){YPosNeg[p]=false}
                else if((YPosNeg[p]==false)&(ZYPosNeg[p]==true)){ZYPosNeg[p]=false}
                else if((YPosNeg[p]==false)&(ZYPosNeg[p]==false)){YPosNeg[p]=true}
                else if((YPosNeg[p]==true)&(ZYPosNeg[p]==false)){ZYPosNeg[p]=true}
                VYZ[p] -= 90}
                if(VYZ[p] <= 0){
                if((YPosNeg[p]==true)&(ZYPosNeg[p]==true)){ZYPosNeg[p]=false}
                else if((YPosNeg[p]==false)&(ZYPosNeg[p]==true)){YPosNeg[p]=true}
                else if((YPosNeg[p]==false)&(ZYPosNeg[p]==false)){ZYPosNeg[p]=true}
                else if((YPosNeg[p]==true)&(ZYPosNeg[p]==false)){YPosNeg[p]=false}
                VYZ[p] += 90}
                // Extrahera (X) & (Z) från hypotenusan(C) och vinkeln(V)
                Subcoordvalue1=(Math.cos(VXZ[p]/(180/Math.PI))*CXZ[p]) // X
                Subcoordvalue2=(Math.sin(VXZ[p]/(180/Math.PI))*CXZ[p]) // ZX
                
                Subcoordvalue3=(Math.cos(VYZ[p]/(180/Math.PI))*CYZ[p]) // Y
                Subcoordvalue4=(Math.sin(VYZ[p]/(180/Math.PI))*CYZ[p]) // ZY
              
                for (let n = 0; n < InputX[p].length; n++){
                    let X
                    let Y
                    let ZY
                    let ZX
                    // PX = X/(Z+F)*F. Ändrar även variabelvärde med X/Z-Pos/Neg 
                    // PX = (X * F) / (Z + F)
                    // (-Z * F) / (X + F)
                    // (-X * F) / (-Z + F)
                    // (Z * F) / (-X + F)
                    // Subcoord 1&3 = X(/Y)
                    // Subcoord 2&4 = Z
                    if((XPosNeg[p]==true)&(ZPosNeg[p]==true)){
                        X = Subcoordvalue1 + InputX[p][n] 
                        ZX = Subcoordvalue2 + InputZ[p][n] + FocalLength }
                    else if((XPosNeg[p]==false)&(ZPosNeg[p]==true)){
                        X = -1 * Subcoordvalue2 + InputX[p][n]
                        ZX = Subcoordvalue1 + InputZ[p][n] + FocalLength }
                    else if((XPosNeg[p]==false)&(ZPosNeg[p]==false)){
                        X = -1 * Subcoordvalue1 + InputX[p][n]
                        ZX = -1 * Subcoordvalue2 + InputZ[p][n]  + FocalLength}
                    else if((XPosNeg[p]==true)&(ZPosNeg[p]==false)){
                        X = Subcoordvalue2 + InputX[p][n] 
                        ZX = -1 * Subcoordvalue1 + InputZ[p][n]  + FocalLength}
                        
                    if((YPosNeg[p]==true)&(ZYPosNeg[p]==true)){
                        Y = Subcoordvalue3 + InputY[p][n]
                        ZY = Subcoordvalue4 + InputZ[p][n] }
                    else if((YPosNeg[p]==false)&(ZYPosNeg[p]==true)){
                        Y = -1 * Subcoordvalue4 + InputY[p][n]
                        ZY = Subcoordvalue3 + InputZ[p][n] + FocalLength}
                    else if((YPosNeg[p]==false)&(ZYPosNeg[p]==false)){
                        Y = -1 * Subcoordvalue3 + InputY[p][n] 
                        ZY = -1 * Subcoordvalue4 + InputZ[p][n] + FocalLength}
                    else if((YPosNeg[p]==true)&(ZYPosNeg[p]==false)){
                        Y = Subcoordvalue4 + InputY[p][n] 
                        ZY = -1 * Subcoordvalue3 + InputZ[p][n] + FocalLength}

console.log(X + Y + ZX + ZY + "X,Y,ZX,ZY")

        
    

// CAMERA ABGLE ADJUSTMENTS START
                        PRIMEVXZ[n]=(180/Math.PI*(Math.atan(Math.abs(X)/Math.abs(ZX))))
                        PRIMEVYZ[n]=(180/Math.PI*(Math.atan(Math.abs(Y)/Math.abs(ZY))))
            // Är X + eller - ? Är X + eller - ?
            console.log(X)
            console.log(Y)
            if(X>0){PRIMEXPosNeg[n]=true}else{PRIMEXPosNeg[n]=false}
            if(ZX>0){PRIMEZPosNeg[n]=true}else{PRIMEZPosNeg[n]=false}
            if(Y>0){PRIMEYPosNeg[n]=true}else{PRIMEYPosNeg[n]=false}
            if(ZY>0){PRIMEZYPosNeg[n]=true}else{PRIMEZYPosNeg[n]=false}
            // Beräkna hypotenusans längd mellan X och Z
            PRIMECXZ[n]=(Math.sqrt(Math.pow(X,2) + Math.pow(ZX,2)))
            PRIMECYZ[n]=(Math.sqrt(Math.pow(Y,2) + Math.pow(ZY,2)))
            PRIMEOUTPUTVXZ[n] = PRIMEVXZ[n] + CameraAngle
            PRIMEOUTPUTVYZ[n] = PRIMEVYZ[n] + CameraAngle

            if(PRIMEOUTPUTVXZ[n] >= 90){
                if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==true)){PRIMEXPosNeg[n]= false}
                else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){PRIMEZPosNeg[n]=false
                }
                else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==false)){PRIMEXPosNeg[n]=true}
                else if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==false)){PRIMEZPosNeg[n]=true}
                PRIMEOUTPUTVXZ[n] -= 90}
                if(PRIMEOUTPUTVXZ[n] <= 0){
                if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==true)){PRIMEZPosNeg[n]= false}
                else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){PRIMEXPosNeg[n]=true}
                else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==false)){PRIMEZPosNeg[n]=true}
                else if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==false)){PRIMEXPosNeg[n]=false}
                PRIMEOUTPUTVXZ[n] += 90}

                if(PRIMEOUTPUTVYZ[n] >= 90){
                if((PRIMEYPosNeg[n]==true)&(ZYPosNeg[n]==true)){YPosNeg[n]=false}
                else if((PRIMEYPosNeg[n]==false)&(ZYPosNeg[n]==true)){ZYPosNeg[n]=false}
                else if((PRIMEYPosNeg[n]==false)&(ZYPosNeg[n]==false)){YPosNeg[n]=true}
                else if((PRIMEYPosNeg[n]==true)&(ZYPosNeg[n]==false)){ZYPosNeg[n]=true}
                PRIMEOUTPUTVYZ[n] -= 90}
                if(PRIMEOUTPUTVYZ[n] <= 0){
                if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==true)){PRIMEZYPosNeg[n]=false}
                else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==true)){PRIMEYPosNeg[n]=true}
                else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==false)){PRIMEZYPosNeg[n]=true}
                else if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==false)){PRIMEYPosNeg[n]=false}
                PRIMEOUTPUTVYZ[n] += 90}
                // Extrahera (X) & (Z) från hypotenusan(C) och vinkeln(V)
                PRIMESubcoordvalue1[n]=(Math.cos(PRIMEOUTPUTVXZ[n]/(180/Math.PI))*PRIMECXZ[n]) // X
                PRIMESubcoordvalue2[n]=(Math.sin(PRIMEOUTPUTVXZ[n]/(180/Math.PI))*PRIMECXZ[n]) // ZX
                
                PRIMESubcoordvalue3[n]=(Math.cos(PRIMEOUTPUTVYZ[n]/(180/Math.PI))*PRIMECYZ[n]) // Y
                PRIMESubcoordvalue4[n]=(Math.sin(PRIMEOUTPUTVYZ[n]/(180/Math.PI))*PRIMECYZ[n]) // ZY
                
                console.log(PRIMESubcoordvalue1 + "Primesubcoord1")
                let PRIMEX
                let PRIMEY
                let PRIMEZY
                let PRIMEZX

                if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==true)){
                        PRIMEX = PRIMESubcoordvalue2[n]
                        PRIMEZX = PRIMESubcoordvalue1[n] }
                    else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){
                        PRIMEX = (-1 * PRIMESubcoordvalue2[n])
                        PRIMEZX = PRIMESubcoordvalue1[n] }
                    else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==false)){
                        PRIMEX = (-1 * PRIMESubcoordvalue1[n])
                        PRIMEZX = (-1 * PRIMESubcoordvalue2[n])}
                    else if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==false)){
                        PRIMEX = PRIMESubcoordvalue1[n]
                        PRIMEZX = (-1 * PRIMESubcoordvalue2[n]) }
                        
                    if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==true)){
                        PRIMEY = PRIMESubcoordvalue4[n]
                        PRIMEZY = PRIMESubcoordvalue3[n] }
                    else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==true)){
                        PRIMEY = (-1 * PRIMESubcoordvalue4[n])
                        PRIMEZY = PRIMESubcoordvalue3[n] }
                    else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==false)){
                        PRIMEY = (-1 * PRIMESubcoordvalue3[n])
                        PRIMEZY = (-1 * PRIMESubcoordvalue4[n])}
                    else if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==false)){
                        PRIMEY = PRIMESubcoordvalue3[n]
                        PRIMEZY = (-1 * PRIMESubcoordvalue4[n]) }


                    // if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==true)){
                    //     PRIMEX = 1 * PRIMESubcoordvalue2[n]
                    //     PRIMEZX = 1 * PRIMESubcoordvalue1[n] }
                    // else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){
                    //     PRIMEX = -1 * PRIMESubcoordvalue2[n]
                    //     PRIMEZX = 1 * PRIMESubcoordvalue1[n] 
                    // alert(X + "U" + PRIMESubcoordvalue2[n])}
                        
                    // if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==true)){
                    //     PRIMEY = 1 * PRIMESubcoordvalue4[n]
                    //     PRIMEZY = 1 * PRIMESubcoordvalue3[n] }
                    // else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==true)){
                    //     PRIMEY = -1 * PRIMESubcoordvalue4[n]
                    //     PRIMEZY = 1 * PRIMESubcoordvalue3[n] }
                        
// CAMERA ABGLE ADJUSTMENTS END

// 3D->2D PROJECTION
// alert(PRIMEX)
// alert(PRIMEY)
// alert(PRIMEZY)
// alert(PRIMEZX)
                    ProjectedX[n] = (PRIMEX*FocalLength/PRIMEZX)
                    ProjectedY[n] = (PRIMEY*FocalLength/PRIMEZY)
                }
                if(Avgstyle==2){
            for (let l = 0; l < ProjectedX.length; l++) {
                ctx.moveTo(400+Number(ProjectedX[l]),400+Number(ProjectedY[l]));
                ctx.lineTo(400+Number(ProjectedX[l+1]),400+Number(ProjectedY[l+1]));
                ctx.stroke()
            }}else{for (let l = 0; l < ProjectedX.length; l++) {
                ctx.moveTo(400+Number(ProjectedX[l]),400+Number(ProjectedY[l]));
                ctx.lineTo(400+Number(ProjectedX[l]+1),400+Number(ProjectedY[l]+1));
                ctx.stroke()
            }}
            debugger
            // Logging(Dev)
            // console.log("InputX")
            // console.log(InputX)
            // console.log("InputY")
            // console.log(InputY)
            // console.log("InputZ")
            // console.log(InputZ)
            // console.log("VXZ")
            // console.log(VXZ)
            // console.log("CXZ")
            // console.log(CXZ)
            // console.log("VYZ")
            // console.log(VYZ)
            // console.log("CYZ")
            // console.log(CYZ)
            // console.log("XPosNeg")
            // console.log(XPosNeg)
            // console.log("ZPosNeg")
            // console.log(ZPosNeg)
            // console.log("YPosNeg")
            // console.log(YPosNeg)
            console.log("ProjectedX")
            console.log(ProjectedX)
            console.log("ProjectedY")
            console.log(ProjectedY)
            // console.log("LeaderX")
            // console.log(LeaderX)
            // console.log("LeaderY")
            // console.log(LeaderY)
            // console.log("LeaderZ")
            // console.log(LeaderZ)

            // console.log("PRIMECXZ")
            // console.log(PRIMECXZ)
            // console.log("PRIMECYZ")
            // console.log(PRIMECYZ)
            // console.log("PRIMEOUTPUTVXZ")
            // console.log(PRIMEOUTPUTVXZ)
            // console.log("PRIMEOUTPUTVYZ")
            // console.log(PRIMEOUTPUTVYZ)
            
            // console.log("PRIMEOUTPUTVXZ")
            // console.log(PRIMEOUTPUTVXZ)
            // console.log("PRIMEOUTPUTVYZ")
            // console.log(PRIMEOUTPUTVYZ)

            // console.log("PRIMEXPosNeg")
            // console.log(PRIMEXPosNeg)
            // console.log("PRIMEYPosNeg")
            // console.log(PRIMEYPosNeg)
            }
        }

// All Functions for The Control Panel
function SubmitSettings(){
Degreeturn = +document.getElementById("1").value
FrameAmount = +document.getElementById("2").value
FocalLength = +document.getElementById("3").value
IncrementX = +document.getElementById("4").value
IncrementY = +document.getElementById("9").value
document.getElementById("5").innerHTML = " Starting Angle Set To: " + Degreeturn + " °"
document.getElementById("6").innerHTML = " Animation Length Set To: " + FrameAmount + " Frames"
document.getElementById("7").innerHTML = " Focal Length Set To: " + FocalLength + " Length Units"
document.getElementById("8").innerHTML = " X Increment Speed Set To: " + IncrementX + " °/Frame"
document.getElementById("10").innerHTML = " Y Increment Speed Set To: " + IncrementY + " °/Frame"
Avgstyle=document.getElementById("CompileModeinput").value
}

function QuickStart(){
LeaderStyle[0]=1
Avgstyle=2
Degreeturn = 0
FrameAmount = 10000
FocalLength = 1000
IncrementX = 1
IncrementY = 1
document.getElementById("5").innerHTML = " Starting Angle Set To: " + Degreeturn + " °"
document.getElementById("6").innerHTML = " Animation Length Set To: " + FrameAmount + " Frames"
document.getElementById("7").innerHTML = " Focal Length Set To: " + FocalLength + " Length Units"
document.getElementById("8").innerHTML = " X Increment Speed Set To: " + IncrementX + " °/Frame"
document.getElementById("10").innerHTML = " Y Increment Speed Set To: " + IncrementY + " °/Frame"
InputX[0]=([100,200,200,100,100,100,200,200,100,100,100,200,200,200,200,100,100])
InputY[0]=([100,100,200,200,100,100,100,200,200,100,100,100,100,200,200,200,200])
InputZ[0]=([100,100,100,100,100,200,200,200,200,200,100,100,200,200,100,100,200])
Compile()
}

function MoveRight(){
    for (let i = 0; i < InputX.length; i++) {
        for (let o = 0; o < InputX[i].length; o++) {
            InputX[i][o]-= 200
        }}}
function MoveLeft(){
    for (let i = 0; i < InputX.length; i++) {
        for (let o = 0; o < InputX[i].length; o++) {
            InputX[i][o]+= 200
        }}}
function MoveAhead(){
    for (let i = 0; i < InputZ.length; i++) {
        for (let o = 0; o < InputZ[i].length; o++) {
            InputZ[i][o]-= 200
        }}}
function MoveBack(){
    for (let i = 0; i < InputX.length; i++) {
        for (let o = 0; o < InputX[i].length; o++) {
            InputZ[i][o]+= 200
        }}}
function MoveDown(){
    for (let i = 0; i < InputY.length; i++) {
        for (let o = 0; o < InputY[i].length; o++) {
            InputY[i][o]-= 200
        }}}
function MoveUp(){
    for (let i = 0; i < InputY.length; i++) {
        for (let o = 0; o < InputY[i].length; o++) {
            InputY[i][o]+= 200
        }}}
</script>


</body>
</html>