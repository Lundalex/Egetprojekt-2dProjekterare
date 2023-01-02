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
        
        let CDX = Math.random() * 500 - 400
        let CDY = Math.random() * 500 - 400
        let CDZ = Math.random() * 500 - 400
        
        ShellX.push([100-100,200-100,200-100,100-100,100-100,100-100,200-100,200-100,100-100,100-100,100-100,200-100,200-100,200-100,200-100,100-100,100-100])
        ShellY.push([100-100,100-100,200-100,200-100,100-100,100-100,100-100,200-100,200-100,100-100,100-100,100-100,100-100,200-100,200-100,200-100,200-100])
        ShellZ.push([100-100,100-100,100-100,100-100,100-100,200-100,200-100,200-100,200-100,200-100,100-100,100-100,200-100,200-100,100-100,100-100,200-100])
        

        let ObjectNumber = ShellX.length -1

        ShellX[ObjectNumber]=ShellX[ObjectNumber].map(function Procfunc(num){return num + CDX})
        ShellY[ObjectNumber]=ShellY[ObjectNumber].map(function Procfunc(num){return num + CDY})
        ShellZ[ObjectNumber]=ShellZ[ObjectNumber].map(function Procfunc(num){return num + CDZ})

        
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




        // Add New Sphere Object Function
        function AddSphereObject(){
        
            let CDX = Math.random() * 500 - 400
            let CDY = Math.random() * 500 - 400
            let CDZ = Math.random() * 500 - 400
            
            ShellX.push([10, 11.25, 10, 11.25, 10, 11.25, 10,   7.5, 10, 7.5, 5, 7.5, 5,         3.75, 5, 3.75, 5,  3.75, 5,       7.5,  5,  7.5,  10, 7.5,  10,      7.5,  5,  7.5,  5,  7.5,  10,        7.5, 5,  7.5, 5, 7.5, 10,     10,        5,  5,  10, 10, 10,     10, 5,   5,  10,  10,  5,  5,  5,  5])
            ShellY.push([10, 7.5,  10, 7.5,  5,  7.5,  5,       3.75, 5,  3.75, 5, 3.75, 5,      7.5, 5, 7.5, 10, 7.5, 10,         7.5,  5,  7.5,  5,  7.5,  10,      11.25, 10, 11.25, 10, 11.25, 10,     7.5, 10, 7.5, 5, 7.5, 5,      10,        10, 5,  5, 10, 5,       5,  5,   10, 10,  10,  10, 10, 5,  5])
            ShellZ.push([5,  7.5,  10, 7.5,  5,  7.5,  10,      7.5, 5,  7.5, 5, 7.5, 10,        7.5, 5, 7.5, 5,  7.5, 10,         11.25, 10, 11.25, 10, 11.25, 10,   7.5,  10, 7.5,  5,  7.5,  5,         3.75, 5,  3.75, 5, 3.75, 5,   5,         5,  5,  5, 5, 5,        10, 10,  10, 10,  5,   5,  10, 10, 5])
            
            
            let ObjectNumber = ShellX.length -1

            ShellX[ObjectNumber]=ShellX[ObjectNumber].map(function Procfunc(num){return num*20 + CDX})
            ShellY[ObjectNumber]=ShellY[ObjectNumber].map(function Procfunc(num){return num*20 + CDY})
            ShellZ[ObjectNumber]=ShellZ[ObjectNumber].map(function Procfunc(num){return num*20 + CDZ})

            
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
        // Add New Sphere Object Function
    
    
    
    
    
    // Camera Perspective Function
    function CameraPerpectiveHandling(DownX, DownY, UpX, UpY){
        if( (17 < DownX) && (90 < DownY) && (17 < UpX) && (90 < UpY) && (DownX < 817) && (DownY < 890) && (UpX < 817) && (UpY < 890)){
            
            const ChangeX = DownX - UpX
            const ChangeY = DownY - UpY
            
            if((Math.abs(ChangeX) > 200) || (Math.abs(ChangeY) > 200)){

                let NewCameraDirection1 = 0
                let NewCameraDirection2 = 0
                let NewCameraDirection3 = 0

                    // Turn Right
                    if(ChangeX < -200){

                        NewCameraDirection1 = CameraDirection3
                        NewCameraDirection2 = CameraDirection2
                        NewCameraDirection3 = -CameraDirection1

                    }

                    // Turn Up
                    else if(ChangeY < -200){

                        NewCameraDirection1 = CameraDirection1
                        NewCameraDirection2 = -CameraDirection3
                        NewCameraDirection3 = CameraDirection2

                    }

                    // Turn Left
                    else if(ChangeX > 200){

                        NewCameraDirection1 = -CameraDirection3
                        NewCameraDirection2 = CameraDirection2
                        NewCameraDirection3 = CameraDirection1
                    }

                    // Turn Down
                    else if(ChangeY > 200){

                        NewCameraDirection1 = CameraDirection1
                        NewCameraDirection2 = CameraDirection3
                        NewCameraDirection3 = -CameraDirection2
                        
                    }

                    CameraDirection1 = NewCameraDirection1
                    CameraDirection2 = NewCameraDirection2
                    CameraDirection3 = NewCameraDirection3
            }
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