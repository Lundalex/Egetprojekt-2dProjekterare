    // Start Main Loop Function
    function Start() {
        // Clear graph(fill)
        ctx.beginPath();
        ctx.rect(00, 00, 800, 800);
        ctx.fillStyle = "white";
        ctx.fill();
        
        RunProgram = true
        
        setTimeout(MainLoop, 20)
    }
    // Start Main Loop Function
    
    
    
    
    
    // Add New Cube Object Function
    function AddCubeObject(){
        
        let CDX = Math.random() * 500 - 250
        let CDY = Math.random() * 500 - 250
        let CDZ = Math.random() * 500 - 250 + 250
        
        ShellX.push([100-100+CDX,200-100+CDX,200-100+CDX,100-100+CDX,100-100+CDX,100-100+CDX,200-100+CDX,200-100+CDX,100-100+CDX,100-100+CDX,100-100+CDX,200-100+CDX,200-100+CDX,200-100+CDX,200-100+CDX,100-100+CDX,100-100+CDX])
        ShellY.push([100-100+CDY,100-100+CDY,200-100+CDY,200-100+CDY,100-100+CDY,100-100+CDY,100-100+CDY,200-100+CDY,200-100+CDY,100-100+CDY,100-100+CDY,100-100+CDY,100-100+CDY,200-100+CDY,200-100+CDY,200-100+CDY,200-100+CDY])
        ShellZ.push([100-100+CDZ,100-100+CDZ,100-100+CDZ,100-100+CDZ,100-100+CDZ,200-100+CDZ,200-100+CDZ,200-100+CDZ,200-100+CDZ,200-100+CDZ,100-100+CDZ,100-100+CDZ,200-100+CDZ,200-100+CDZ,100-100+CDZ,100-100+CDZ,200-100+CDZ])
        
        let ObjectNumber = ShellX.length -1
        
        TX=ShellX[ObjectNumber].length
        TY=ShellY[ObjectNumber].length
        TZ=ShellZ[ObjectNumber].length
        
        const MX=ShellX[ObjectNumber].reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
        const MY=ShellY[ObjectNumber].reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
        const MZ=ShellZ[ObjectNumber].reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
        
        ShellX[ObjectNumber]=ShellX[ObjectNumber].map(function Procfunc(num){return num-MX})
        ShellY[ObjectNumber]=ShellY[ObjectNumber].map(function Procfunc(num){return num-MY})
        ShellZ[ObjectNumber]=ShellZ[ObjectNumber].map(function Procfunc(num){return num-MZ})
        
        ShellLeaderX[ObjectNumber] = MX
        ShellLeaderY[ObjectNumber] = MY
        ShellLeaderZ[ObjectNumber] = MZ
    }
    // Add New Cube Object Function
    
    
    
    
    
    // Camera Perspective Function
    function CameraPerpectiveHandling(DownX, DownY, UpX, UpY){
        if( (17 < DownX) && (90 < DownY) && (17 < UpX) && (90 < UpY) && (DownX < 817) && (DownY < 890) && (UpX < 817) && (UpY < 890)){
            
            const ChangeX = DownX - UpX
            const ChangeY = DownY - UpY
            
            // Continue Here - (6 Camera Perpectives)!!!
        }
        else{
            return
        }
    }
    // Camera Perspective Function
    
    
    
    
    
    // Inf Array Function
    function GenerateInfArrForObjectAnimationInstructions(){
        
        for (let i = 0; i < 99; i++) {
            ObjectAnimationInstructionsX[i] = []
            ObjectAnimationInstructionsY[i] = []
            ObjectAnimationInstructionsZ[i] = []
            for (let o = 0; o < 99; o++) {
                ObjectAnimationInstructionsX[i][o] = [0]
                ObjectAnimationInstructionsY[i][o] = [0]
                ObjectAnimationInstructionsZ[i][o] = [0]
            }
        }
    }
    // Inf Array Function
    
    
    
    
    // Delete Object Function
    function DeleteObject(FoundObjectNumber){
        
        DeletedObjects[FoundObjectNumber] = true
        
        ShellX[FoundObjectNumber] = []
        ShellY[FoundObjectNumber] = []
        ShellZ[FoundObjectNumber] = []
        
        ShellLeaderX[FoundObjectNumber] = 0
        ShellLeaderY[FoundObjectNumber] = 0
        ShellLeaderZ[FoundObjectNumber] = 0
        
        // Potencial Problems
        
    }
    // Delete Object Function