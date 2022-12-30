   

   function ResetCameraOffset(){
    document.getElementById("OffsetX").value = 0
    document.getElementById("OffsetY").value = 0
    document.getElementById("OffsetZ").value = 400
    CameraOffsetX = 0
    CameraOffsetY = 0
    CameraOffsetZ = 400

   }



   function UpdateOffsetX(){
        CameraOffsetX = +document.getElementById("OffsetX").value
   }
    function UpdateOffsetY(){
        CameraOffsetY = +document.getElementById("OffsetY").value
   }
   function UpdateOffsetZ(){
        CameraOffsetZ = +document.getElementById("OffsetZ").value
   }

   function ChangePhysicsAnimation(){

    if(ChosenRegObjectType == "Physics"){
        ChosenRegObjectType = "Animated"
        
        document.getElementById("Animated").style.color = "lightgreen"
        document.getElementById("Physics").style.color = "black"
    }
    else if(ChosenRegObjectType == "Animated"){
        ChosenRegObjectType = "Physics"
        document.getElementById("Physics").style.color = "orange"
        document.getElementById("Animated").style.color = "black"
    } 
   }


   function AddSpawnerObject(){
    const P1 = document.getElementById("1").value
    const P2 = document.getElementById("2").value
    const P3 = document.getElementById("3").value
    const P4 = document.getElementById("4").value
    const P5 = document.getElementById("5").value
    const P6 = document.getElementById("6").value
    const P7 = document.getElementById("7").value
    const P8 = document.getElementById("8").value
    const P9 = document.getElementById("9").value
    const P10 = document.getElementById("23").value
    const P11 = document.getElementById("10").value
    const P12 = document.getElementById("11").value
    const P13 = document.getElementById("12").value
    const P14 = document.getElementById("13").value
    const P15 = document.getElementById("14").value
    const P16 = document.getElementById("15").value
    const P17 = document.getElementById("16").value
    const P18 = document.getElementById("17").value
    const P19 = document.getElementById("18").value
    const P20 = document.getElementById("19").value
    const P21 = document.getElementById("20").value
    const P22 = document.getElementById("21").value
    const P23 = document.getElementById("22").value
    const P24 = document.getElementById("25").value
    const P25 = document.getElementById("24").value

    // Remember OUTER VARIBALE INPUT if used
    SpawnerObjects.push(new NewSpawnerObject(P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22,P23,P24,P25))
   }
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // Quick Start Function
    function QuickStart(){

        // Calls Functions (2)
        AddCubeObject(0,0,0,1)
        Start()
    }
    // Quick Start Function
    
    
    
    
    
    // Camera Movement Functions
    function MoveRight(){
        AddedXDistance -= 100
}
    function MoveLeft(){
        AddedXDistance += 100
}
    function MoveAhead(){
        AddedZDistance -= 100
}
    function MoveBack(){
        AddedZDistance += 100
}
    function MoveDown(){
        AddedYDistance -= 100
}
    function MoveUp(){
        AddedYDistance += 100
}
    // Camera Movement Functions
    
    
    
    
    
    // Manipulate (Radiobuttons) Functions SAVE
    function ChangeManipulatePath(){
        Manipulate = "Path"
    }
    function ChangeManipulatePoint(){
        Manipulate = "Point"
    }
    function ChangeManipulateObject(){
        Manipulate = "Object"
    }
    // Manipulate (Radiobuttons) Functions SAVE
    
    
    
    

    // Rendering Engine Settings Update Functions
    function UpdateHertz(){
        ProgramHertz = +document.getElementById("Hertz").value
    }
    
    function UpdateIncrementHertz(){
        ProgramIncrementHertz = +document.getElementById("Increment/Hertz").value
    }
    function UpdateFocalLength(){
        FocalLength = +document.getElementById("FocalLength").value
    }
    // Rendering Engine Settings Update Functions



    function UpdateElasticity(){
        Elasticity = +document.getElementById("Elasticity").value
    }

    



    // Reset Camera Orientation Function
    function ResetCameraOrientation(){
        CameraDirection1 = 1
        CameraDirection2 = 2
        CameraDirection3 = 3
    }
    // Reset Camera Orientation Function