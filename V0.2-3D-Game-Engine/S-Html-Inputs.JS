   

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