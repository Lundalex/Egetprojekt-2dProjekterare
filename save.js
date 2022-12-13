
// CAMERA ABGLE ADJUSTMENTS START
PRIMEVXZ[n]=(180/Math.PI*(Math.atan(Math.abs(X)/Math.abs(ZX))))
PRIMEVYZ[n]=(180/Math.PI*(Math.atan(Math.abs(Y)/Math.abs(ZY))))
// Är X + eller - ? Är X + eller - ?
console.log(X)
console.log(Y)
if(X>0){PRIMEXPosNeg[n]=true}else{PRIMEXPosNeg[n]=false}
if(ZX>0){PRIMEZPosNeg[n]=true}else{PRIMEXPosNeg[n]=false}
if(Y>0){PRIMEYPosNeg[n]=true}else{PRIMEYPosNeg[n]=false}
if(ZY>0){PRIMEZYPosNeg[n]=true}else{PRIMEZYPosNeg[n]=false}
// Beräkna hypotenusans längd mellan X och Z
PRIMECXZ[n]=(Math.sqrt(Math.pow(X,2) + Math.pow(ZX,2)))
PRIMECYZ[n]=(Math.sqrt(Math.pow(Y,2) + Math.pow(ZY,2)))
PRIMEOUTPUTVXZ[n] = PRIMEVXZ[n] + CameraAngle
PRIMEOUTPUTVYZ[n] = PRIMEVYZ[n] + CameraAngle

if(PRIMEOUTPUTVXZ[n] > 90){
if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==true)){PRIMEXPosNeg[n]= false}
else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){PRIMEZPosNeg[n]=false}
else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==false)){PRIMEXPosNeg[n]=true}
else if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==false)){PRIMEZPosNeg[n]=true}
PRIMEOUTPUTVXZ[n] -= 90}
if(PRIMEOUTPUTVXZ[n] < 0){
if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==true)){PRIMEZPosNeg[n]= false}
else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){PRIMEXPosNeg[n]=true}
else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==false)){PRIMEZPosNeg[n]=true}
else if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==false)){PRIMEXPosNeg[n]=false}
PRIMEOUTPUTVXZ[n] += 90}

if(PRIMEOUTPUTVYZ[n] > 90){
if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==true)){PRIMEYPosNeg[n]=false}
else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==true)){PRIMEZYPosNeg[n]=false}
else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==false)){PRIMEYPosNeg[n]=true}
else if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==false)){PRIMEZYPosNeg[n]=true}
PRIMEOUTPUTVYZ[n] -= 90}
if(PRIMEOUTPUTVYZ[n] < 0){
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
PRIMEX = PRIMESubcoordvalue1[n]
PRIMEZX = PRIMESubcoordvalue2[n] }
else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==true)){
PRIMEX = (-1 * PRIMESubcoordvalue2[n]) 
PRIMEZX = PRIMESubcoordvalue1[n] }

else if((PRIMEXPosNeg[n]==false)&(PRIMEZPosNeg[n]==false)){
PRIMEX = (-1 * PRIMESubcoordvalue1[n]) 
PRIMEZX = (-1 * PRIMESubcoordvalue2[n]) }
else if((PRIMEXPosNeg[n]==true)&(PRIMEZPosNeg[n]==false)){
PRIMEX = PRIMESubcoordvalue2[n] 
PRIMEZX = (-1 * PRIMESubcoordvalue1[n]) }

if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==true)){
PRIMEY = PRIMESubcoordvalue3[n] 
PRIMEZY = PRIMESubcoordvalue4[n] }
else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==true)){
PRIMEY = (-1 * PRIMESubcoordvalue4[n]) 
PRIMEZY = PRIMESubcoordvalue3[n] }
else if((PRIMEYPosNeg[n]==false)&(PRIMEZYPosNeg[n]==false)){
PRIMEY = (-1 * PRIMESubcoordvalue3[n]) 
PRIMEZY = (-1 * PRIMESubcoordvalue4[n]) }
else if((PRIMEYPosNeg[n]==true)&(PRIMEZYPosNeg[n]==false)){
PRIMEY = PRIMESubcoordvalue4[n] 
PRIMEZY = (-1 * PRIMESubcoordvalue3[n]) }

console.log(PRIMEX + PRIMEY + PRIMEZX + PRIMEZY + "PRIMEX,PRIMEY,PRIMEZX,PRIMEZY")
// CAMERA ABGLE ADJUSTMENTS END
