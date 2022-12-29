    // Start Main Loop Function
    function Start() {
        // Clear graph(fill)
        ctx.beginPath();
        ctx.rect(00, 00, 800, 800);
        ctx.fillStyle = "white";
        ctx.fill();
        
        RunProgram = true

        if(RegObjects.length == 0){
            AddCubeObject(0,0,0,1)
        }
        
        setTimeout(MainLoop, 20)
    }
    // Start Main Loop Function





    // CONSTRUCTOR - RegObjects
    function NewRegularObject(INShellXArr, INShellYArr, INShellZArr, INLeaderX, INLeaderY, INLeaderZ,     AnimationInstructionsX, AnimationInstructionsY, AnimationInstructionsZ,       HitboxSizeX1, HitboxSizeY1, HitboxSizeZ1, HitboxSizeX2, HitboxSizeY2, HitboxSizeZ2,    ObjectType,    VelocityX, VelocityY, VelocityZ,    Mass,    DeleteOnCollision) {
        
        this.ShellX = INShellXArr;
        this.ShellY = INShellYArr;
        this.ShellZ = INShellZArr;
    

        this.LeaderX = INLeaderX;
        this.LeaderY = INLeaderY;
        this.LeaderZ = INLeaderZ;

            
        this.ShellprojectedX = [0];
        this.ShellprojectedY = [0];

        if(AnimationInstructionsX){
            this.AnimationInstructionsX = AnimationInstructionsX}
        else{
            this.AnimationInstructionsX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}

        if(AnimationInstructionsY){
            this.AnimationInstructionsY = AnimationInstructionsY}
        else{
            this.AnimationInstructionsY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}

        if(AnimationInstructionsZ){
            this.AnimationInstructionsZ = AnimationInstructionsZ}
        else{
            this.AnimationInstructionsZ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}


        // FILL LATER

        this.AnimationPathCoordsX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        this.AnimationPathCoordsY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        this.AnimationPathCoordsZ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
        this.AnimationPathProjectedX = [0]
        this.AnimationPathProjectedY = [0]

        this.TotalAnimationDeviationX = 0
        this.TotalAnimationDeviationY = 0
        this.TotalAnimationDeviationZ = 0


        if(HitboxSizeX1){
            this.HitboxSizeX1 = HitboxSizeX1}
        else{
            this.HitboxSizeX1 = -100}
            
        if(HitboxSizeY1){
            this.HitboxSizeY1 = HitboxSizeY1}
        else{
            this.HitboxSizeY1 = -100}

        if(HitboxSizeZ1){
            this.HitboxSizeZ1 = HitboxSizeZ1}
        else{
            this.HitboxSizeZ1 = -100}

        if(HitboxSizeX2){
            this.HitboxSizeX2 = HitboxSizeX2}
        else{
            this.HitboxSizeX2 = 100}

        if(HitboxSizeY2){
            this.HitboxSizeY2 = HitboxSizeY2}
        else{
            this.HitboxSizeY2 = 100}

        if(HitboxSizeZ2){
            this.HitboxSizeZ2 = HitboxSizeZ2}
        else{
            this.HitboxSizeZ2 = 100}


        this.HitboxProjectedX = [0]
        this.HitboxProjectedY = [0]

        if(HitboxSizeX1){
            this.ObjectType = ObjectType}
        else{
            this.ObjectType = "Physics"}


        // Animated, Physics


        if(VelocityX){
            this.VelocityX = VelocityX}
        else{
            this.VelocityX = 0}


        if(VelocityY){
            this.VelocityY = VelocityY}
        else{
            this.VelocityY = 0}


        if(VelocityZ){
            this.VelocityZ = VelocityZ}
        else{
            this.VelocityZ = 0}
        

        if(Mass){
            this.Mass = Mass}
        else{
            this.Mass = 100}


            if(DeleteOnCollision){
                this.DeleteOnCollision = DeleteOnCollision}
            else{
                this.DeleteOnCollision = false}



        this.IsMarked = false;
    
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


        this.HitboxRelativeBoundraryXYZ = function(){
            let SpanXYZ = []

            SpanXYZ.push(this.TotalAnimationDeviationX + this.HitboxSizeX1 + this.LeaderX)
            SpanXYZ.push(this.TotalAnimationDeviationX + this.HitboxSizeX2 + this.LeaderX)
            SpanXYZ.push(this.TotalAnimationDeviationY + this.HitboxSizeY1 + this.LeaderY)
            SpanXYZ.push(this.TotalAnimationDeviationY + this.HitboxSizeY2 + this.LeaderY)
            SpanXYZ.push(this.TotalAnimationDeviationZ + this.HitboxSizeZ1 + this.LeaderZ)
            SpanXYZ.push(this.TotalAnimationDeviationZ + this.HitboxSizeZ2 + this.LeaderZ)

            return SpanXYZ
        }


        this.NextHitboxRelativeBoundraryXYZ = function(){
            let SpanXYZ = []

            SpanXYZ.push(this.TotalAnimationDeviationX + this.HitboxSizeX1 + this.LeaderX + this.VelocityX * ProgramIncrementHertz * 0.05)
            SpanXYZ.push(this.TotalAnimationDeviationX + this.HitboxSizeX2 + this.LeaderX + this.VelocityX * ProgramIncrementHertz * 0.05)
            SpanXYZ.push(this.TotalAnimationDeviationY + this.HitboxSizeY1 + this.LeaderY + this.VelocityY * ProgramIncrementHertz * 0.05)
            SpanXYZ.push(this.TotalAnimationDeviationY + this.HitboxSizeY2 + this.LeaderY + this.VelocityY * ProgramIncrementHertz * 0.05)
            SpanXYZ.push(this.TotalAnimationDeviationZ + this.HitboxSizeZ1 + this.LeaderZ + this.VelocityZ * ProgramIncrementHertz * 0.05)
            SpanXYZ.push(this.TotalAnimationDeviationZ + this.HitboxSizeZ2 + this.LeaderZ + this.VelocityZ * ProgramIncrementHertz * 0.05)

            return SpanXYZ
        }

        
    }
        // CONSTRUCTOR - RegObjects











            // Add New Cube Object Function
    function AddCubeObject(INLeaderX, INLeaderY, INLeaderZ, Size,     AnimationInstructionsX, AnimationInstructionsY, AnimationInstructionsZ,       HitboxSizeX1, HitboxSizeY1, HitboxSizeZ1, HitboxSizeX2, HitboxSizeY2, HitboxSizeZ2,    ObjectType,    VelocityX, VelocityY, VelocityZ,    Mass,    DeleteOnCollision){
        
        let CDX = -400
        let CDY = -400
        let CDZ = -400
        if(INLeaderX == 0 && INLeaderY == 0 && INLeaderZ == 0){
        CDX = Math.random() * 500 - 400
        CDY = Math.random() * 500 - 400
        CDZ = Math.random() * 500 - 400
        }

        let NewShellLeaderX = 0
        let NewShellLeaderY = 0
        let NewShellLeaderZ = 0

        let NewShellX = CubePresetX
        let NewShellY = CubePresetY
        let NewShellZ = CubePresetZ


        NewShellX = NewShellX.map(function Procfunc(num){return num + CDX})
        NewShellY = NewShellY.map(function Procfunc(num){return num + CDY})
        NewShellZ = NewShellZ.map(function Procfunc(num){return num + CDZ})

        
        const TX = NewShellX.length
        const TY = NewShellY.length
        const TZ = NewShellZ.length
        
        const MX = NewShellX.reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
        const MY = NewShellY.reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
        const MZ = NewShellZ.reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
        
        if(INLeaderX != 0 || INLeaderY != 0 || INLeaderZ != 0){

            NewShellLeaderX = INLeaderX
            NewShellLeaderY = INLeaderY
            NewShellLeaderZ = INLeaderZ
        }
    
        else{
    
            NewShellLeaderX = MX
            NewShellLeaderY = MY
            NewShellLeaderZ = MZ
        }
        
        NewShellX = NewShellX.map(function Procfunc(num){return (num-MX)*Size})
        NewShellY = NewShellY.map(function Procfunc(num){return (num-MY)*Size})
        NewShellZ = NewShellZ.map(function Procfunc(num){return (num-MZ)*Size})

        RegObjects.push(new NewRegularObject(NewShellX, NewShellY, NewShellZ, NewShellLeaderX, NewShellLeaderY, NewShellLeaderZ,     AnimationInstructionsX, AnimationInstructionsY, AnimationInstructionsZ,       HitboxSizeX1, HitboxSizeY1, HitboxSizeZ1, HitboxSizeX2, HitboxSizeY2, HitboxSizeZ2,    ObjectType,    VelocityX, VelocityY, VelocityZ,    Mass,    DeleteOnCollision))
                                                                                                                                 // Extra
    }
    // Add New Cube Object Function






        // Add New Sphere Object Function
        function AddSphereObject(INLeaderX, INLeaderY, INLeaderZ, Size,     AnimationInstructionsX, AnimationInstructionsY, AnimationInstructionsZ,       HitboxSizeX1, HitboxSizeY1, HitboxSizeZ1, HitboxSizeX2, HitboxSizeY2, HitboxSizeZ2,    ObjectType,    VelocityX, VelocityY, VelocityZ,    Mass,    DeleteOnCollision){
            alert(Size)
            let CDX = -400
            let CDY = -400
            let CDZ = -400
            if(INLeaderX == 0 && INLeaderY == 0 && INLeaderZ == 0){
            CDX = Math.random() * 500 - 400
            CDY = Math.random() * 500 - 400
            CDZ = Math.random() * 500 - 400
            }
            
        let NewShellLeaderX = 0
        let NewShellLeaderY = 0
        let NewShellLeaderZ = 0

            let NewShellX = SpherePresetX
            let NewShellY = SpherePresetY
            let NewShellZ = SpherePresetZ
            


            NewShellX = NewShellX.map(function Procfunc(num){return num*20 + CDX})
            NewShellY = NewShellY.map(function Procfunc(num){return num*20 + CDY})
            NewShellZ = NewShellZ.map(function Procfunc(num){return num*20 + CDZ})
    
            
            const TX = NewShellX.length
            const TY = NewShellY.length
            const TZ = NewShellZ.length
            
            const MX = NewShellX.reduce(function RedX(total,value){return Number(total)+Number(value)})/TX
            const MY = NewShellY.reduce(function RedY(total,value){return Number(total)+Number(value)})/TY
            const MZ = NewShellZ.reduce(function RedZ(total,value){return Number(total)+Number(value)})/TZ
            
            if(INLeaderX != 0 || INLeaderY != 0 || INLeaderZ != 0){

                NewShellLeaderX = INLeaderX
                NewShellLeaderY = INLeaderY
                NewShellLeaderZ = INLeaderZ
            }
        
            else{
        
                NewShellLeaderX = MX
                NewShellLeaderY = MY
                NewShellLeaderZ = MZ
            }

            NewShellX = NewShellX.map(function Procfunc(num){return (num-MX)*Size})
            NewShellY = NewShellY.map(function Procfunc(num){return (num-MY)*Size})
            NewShellZ = NewShellZ.map(function Procfunc(num){return (num-MZ)*Size})
            

            RegObjects.push(new NewRegularObject(NewShellX, NewShellY, NewShellZ, NewShellLeaderX, NewShellLeaderY, NewShellLeaderZ,        AnimationInstructionsX, AnimationInstructionsY, AnimationInstructionsZ,       HitboxSizeX1, HitboxSizeY1, HitboxSizeZ1, HitboxSizeX2, HitboxSizeY2, HitboxSizeZ2,    ObjectType,    VelocityX, VelocityY, VelocityZ,    Mass,    DeleteOnCollision))
        }                                                                                                                             // Extra
        // Add New Sphere Object Function
    




        // CONTRUCTOR New Spawner Object
        function NewSpawnerObject(SpawnSpaceX1, SpawnSpaceY1, SpawnSpaceZ1, SpawnSpaceX2, SpawnSpaceY2, SpawnSpaceZ2, SpawnedLeaderX, SpawnedLeaderY, SpawnedLeaderZ, SpawnedSize, SpawnedAnimationInstructionsX, SpawnedAnimationInstructionsY, SpawnedAnimationInstructionsZ, SpawnedHitboxSizeX1, SpawnedHitboxSizeY1, SpawnedHitboxSizeZ1, SpawnedHitboxSizeX2, SpawnedHitboxSizeY2, SpawnedHitboxSizeZ2, SpawnedObjectType, SpawnedVelocityX, SpawnedVelocityY, SpawnedVelocityZ, SpawnedMass, SpawnedDeleteOnCollision, SpawnedObjectCubeSphere){

            this.SpawnSpaceX1 = SpawnSpaceX1 // Def 0
            this.SpawnSpaceY1 = SpawnSpaceY1 // Def 0
            this.SpawnSpaceZ1 = SpawnSpaceZ1 // Def 0

            this.SpawnSpaceX2 = SpawnSpaceX2 // Def 0
            this.SpawnSpaceY2 = SpawnSpaceY2 // Def 0
            this.SpawnSpaceZ2 = SpawnSpaceZ2 // Def 0


            this.SpawnedLeaderX = SpawnedLeaderX // Def 0
            this.SpawnedLeaderY = SpawnedLeaderY // Def 0
            this.SpawnedLeaderZ = SpawnedLeaderZ // Def 0

            this.SpawnedSize = SpawnedSize // Def 1

            this.SpawnedAnimationInstructionsX = SpawnedAnimationInstructionsX // Def [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            this.SpawnedAnimationInstructionsY = SpawnedAnimationInstructionsY // Def [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            this.SpawnedAnimationInstructionsZ = SpawnedAnimationInstructionsZ // Def [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

            this.SpawnedHitboxSizeX1 = SpawnedHitboxSizeX1 // Def -100
            this.SpawnedHitboxSizeY1 = SpawnedHitboxSizeY1 // Def -100
            this.SpawnedHitboxSizeZ1 = SpawnedHitboxSizeZ1 // Def -100
    
            this.SpawnedHitboxSizeX2 = SpawnedHitboxSizeX2 // Def 100
            this.SpawnedHitboxSizeY2 = SpawnedHitboxSizeY2 // Def 100
            this.SpawnedHitboxSizeZ2 = SpawnedHitboxSizeZ2 // Def 100

            this.SpawnedObjectType = SpawnedObjectType // Def"Physics"
            // Animated, Physics
    
            this.SpawnedVelocityX = SpawnedVelocityX // Def 0
            this.SpawnedVelocityY = SpawnedVelocityY // Def 0
            this.SpawnedVelocityZ = SpawnedVelocityZ // Def 0
    
            this.SpawnedMass = SpawnedMass // Def 100
    
    
            this.SpawnedDeleteOnCollision = SpawnedDeleteOnCollision // Deffalse


            this.SpawnedObjectCubeSphere = SpawnedObjectCubeSphere // Def "Cube"

                  
            this.Spawn = function(){

                const LeaderX = this.SpawnSpaceX1 + (Math.random() * this.SpawnSpaceX2 - SpawnSpaceX1)
                const LeaderY = this.SpawnSpaceY1 + (Math.random() * this.SpawnSpaceY2 - SpawnSpaceY1)
                const LeaderZ = this.SpawnSpaceZ1 + (Math.random() * this.SpawnSpaceZ2 - SpawnSpaceZ1)

                if(this.SpawnedObjectCubeSphere == "Cube"){
                    AddCubeObject(LeaderX, LeaderY, LeaderZ, this.SpawnedSize, this.SpawnedAnimationInstructionsX, this.SpawnedAnimationInstructionsY, this.SpawnedAnimationInstructionsZ, this.SpawnedHitboxSizeX1, this.SpawnedHitboxSizeY1, this.SpawnedHitboxSizeZ1, this.SpawnedHitboxSizeX2, this.SpawnedHitboxSizeY2, this.SpawnedHitboxSizeZ2, this.SpawnedObjectType, this.SpawnedVelocityX, this.SpawnedVelocityY, this.SpawnedVelocityZ, this.SpawnedMass, this.SpawnedDeleteOnCollision)
                }
                else{
                    AddSphereObject(LeaderX, LeaderY, LeaderZ, this.SpawnedSize, this.SpawnedAnimationInstructionsX, this.SpawnedAnimationInstructionsY, this.SpawnedAnimationInstructionsZ, this.SpawnedHitboxSizeX1, this.SpawnedHitboxSizeY1, this.SpawnedHitboxSizeZ1, this.SpawnedHitboxSizeX2, this.SpawnedHitboxSizeY2, this.SpawnedHitboxSizeZ2, this.SpawnedObjectType, this.SpawnedVelocityX, this.SpawnedVelocityY, this.SpawnedVelocityZ, this.SpawnedMass, this.SpawnedDeleteOnCollision)
                }
            }
        }
        // CONTRUCTOR New Spawner Object
    
    
    
    
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
    
    
    
    
    // Delete Found Object Function
    function DeleteFoundObject(FoundObjectNumber){
        let CopyArr = []
        for (let i = 0; i < RegObjects.length; i++) {
            if(i != FoundObjectNumber){

                CopyArr.push(RegObjects[i])

            }    
        }
        RegObjects = CopyArr
        FoundObjectNumber = 0
    }
    // Delete Found Object Function





        
    // Delete Found Object Function
    function DeleteObject(ObjectNumber){
        let CopyArr = []
        for (let i = 0; i < RegObjects.length; i++) {
            if(i != ObjectNumber){

                CopyArr.push(RegObjects[i])

            }    
        }
        RegObjects = CopyArr
    }
    // Delete Found Object Function