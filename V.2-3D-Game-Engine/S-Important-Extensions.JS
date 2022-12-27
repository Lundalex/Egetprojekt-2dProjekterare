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
        
        const CDX = Math.random() * 500 - 400
        const CDY = Math.random() * 500 - 400
        const CDZ = Math.random() * 500 - 400

        let NewShellX = [100-100,200-100,200-100,100-100,100-100,100-100,200-100,200-100,100-100,100-100,100-100,200-100,200-100,200-100,200-100,100-100,100-100]
        let NewShellY = [100-100,100-100,200-100,200-100,100-100,100-100,100-100,200-100,200-100,100-100,100-100,100-100,100-100,200-100,200-100,200-100,200-100]
        let NewShellZ = [100-100,100-100,100-100,100-100,100-100,200-100,200-100,200-100,200-100,200-100,100-100,100-100,200-100,200-100,100-100,100-100,200-100]


        NewShellX = NewShellX.map(function Procfunc(num){return num + CDX})
        NewShellY = NewShellY.map(function Procfunc(num){return num + CDY})
        NewShellZ = NewShellZ.map(function Procfunc(num){return num + CDZ})

        
        const TX = NewShellX.length
        const TY = NewShellY.length
        const TZ = NewShellZ.length
        
        const MX = NewShellX.reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
        const MY = NewShellY.reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
        const MZ = NewShellZ.reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
        
        NewShellX = NewShellX.map(function Procfunc(num){return num-MX})
        NewShellY = NewShellY.map(function Procfunc(num){return num-MY})
        NewShellZ = NewShellZ.map(function Procfunc(num){return num-MZ})
        
        const NewShellLeaderX = MX
        const NewShellLeaderY = MY
        const NewShellLeaderZ = MZ

        RegObjects.push(new NewRegularObject(NewShellX, NewShellY, NewShellZ, NewShellLeaderX, NewShellLeaderY, NewShellLeaderZ))
        

    }
    // Add New Cube Object Function




    function NewRegularObject(ShellXArr, ShellYArr, ShellZArr, INLeaderX, INLeaderY, INLeaderZ) {
        this.ShellX = ShellXArr;
        this.ShellY = ShellYArr;
        this.ShellZ = ShellZArr;
    

        this.LeaderX = INLeaderX;
        this.LeaderY = INLeaderY;
        this.LeaderZ = INLeaderZ;

            
        this.ShellprojectedX = [0];
        this.ShellprojectedY = [0];

            
        this.AnimationInstructionsX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.AnimationInstructionsY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.AnimationInstructionsZ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        // FILL LATER

        this.AnimationPathCoordsX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        this.AnimationPathCoordsY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        this.AnimationPathCoordsZ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
        this.AnimationPathProjectedX = [0]
        this.AnimationPathProjectedY = [0]

        this.TotalAnimationDeviationX = 0
        this.TotalAnimationDeviationY = 0
        this.TotalAnimationDeviationZ = 0

            
        this.Marked = false;
    
        this.PointsMarked = [];
    
    
        this.RelativePointPositionX = function(PointNumber){
            return this.ShellX[PointNumber] + this.LeaderX
        }

        this.RelativePointPositionY = function(PointNumber){
            return this.ShellY[PointNumber] + this.LeaderY
        }

        this.RelativePointPositionZ = function(PointNumber){
            return this.ShellZ[PointNumber] + this.LeaderZ
        }





        this.AnimationRelativePathCoordPositionX = function(PointNumber){
            return this.AnimationPathCoordsX[PointNumber] + this.LeaderX
        }

        this.AnimationRelativePathCoordPositionY = function(PointNumber){
            return this.AnimationPathCoordsY[PointNumber] + this.LeaderY
        }

        this.AnimationRelativePathCoordPositionZ = function(PointNumber){
            return this.AnimationPathCoordsZ[PointNumber] + this.LeaderZ
        }



    }























        // Add New Sphere Object Function
        function AddSphereObject(){
        
            let CDX = Math.random() * 500 - 400
            let CDY = Math.random() * 500 - 400
            let CDZ = Math.random() * 500 - 400
            
            let NewShellX = [10, 11.25, 10, 11.25, 10, 11.25, 10,   7.5, 10, 7.5, 5, 7.5, 5,         3.75, 5, 3.75, 5,  3.75, 5,       7.5,  5,  7.5,  10, 7.5,  10,      7.5,  5,  7.5,  5,  7.5,  10,        7.5, 5,  7.5, 5, 7.5, 10,     10,        5,  5,  10, 10, 10,     10, 5,   5,  10,  10,  5,  5,  5,  5]
            let NewShellY = [10, 7.5,  10, 7.5,  5,  7.5,  5,       3.75, 5,  3.75, 5, 3.75, 5,      7.5, 5, 7.5, 10, 7.5, 10,         7.5,  5,  7.5,  5,  7.5,  10,      11.25, 10, 11.25, 10, 11.25, 10,     7.5, 10, 7.5, 5, 7.5, 5,      10,        10, 5,  5, 10, 5,       5,  5,   10, 10,  10,  10, 10, 5,  5]
            let NewShellZ = [5,  7.5,  10, 7.5,  5,  7.5,  10,      7.5, 5,  7.5, 5, 7.5, 10,        7.5, 5, 7.5, 5,  7.5, 10,         11.25, 10, 11.25, 10, 11.25, 10,   7.5,  10, 7.5,  5,  7.5,  5,         3.75, 5,  3.75, 5, 3.75, 5,   5,         5,  5,  5, 5, 5,        10, 10,  10, 10,  5,   5,  10, 10, 5]
            


            NewShellX = NewShellX.map(function Procfunc(num){return num*20 + CDX})
            NewShellY = NewShellY.map(function Procfunc(num){return num*20 + CDY})
            NewShellZ = NewShellZ.map(function Procfunc(num){return num*20 + CDZ})
    
            
            const TX = NewShellX.length
            const TY = NewShellY.length
            const TZ = NewShellZ.length
            
            const MX = NewShellX.reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
            const MY = NewShellY.reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
            const MZ = NewShellZ.reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
            
            NewShellX = NewShellX.map(function Procfunc(num){return num-MX})
            NewShellY = NewShellY.map(function Procfunc(num){return num-MY})
            NewShellZ = NewShellZ.map(function Procfunc(num){return num-MZ})
            
            const NewShellLeaderX = MX
            const NewShellLeaderY = MY
            const NewShellLeaderZ = MZ

            RegObjects.push(new NewRegularObject(NewShellX, NewShellY, NewShellZ, NewShellLeaderX, NewShellLeaderY, NewShellLeaderZ))
            console.log(RegObjects)
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
    // function GenerateInfArrForObjectAnimationInstructions(){
        
    //     for (let i = 0; i < 99; i++) {
    //         RegObjects[i].AnimationPathstageX = []
    //         RegObjects[i].AnimationPathstageY = []
    //         RegObjects[i].AnimationPathstageZ = []
    //         for (let o = 0; o < 99; o++) {
    //             RegObjects[i].AnimationPathstageX[o] = [0]
    //             RegObjects[i].AnimationPathstageY[o] = [0]
    //             RegObjects[i].AnimationPathstageZ[o] = [0]
    //         }
    //     }
    // }
    // Inf Array Function
    
    
    
    
    // Delete Object Function
    function DeleteObject(FoundObjectNumber){
        let CopyArr = []
        for (let i = 0; i < RegObjects.length; i++) {
            if(i != FoundObjectNumber){

                CopyArr.push(RegObjects[i])

            }    
        }
        RegObjects = CopyArr
    }
    // Delete Object Function