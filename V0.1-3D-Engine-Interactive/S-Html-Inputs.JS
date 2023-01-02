    // Quick Start Function
    function QuickStart(){

        // Calls Functions (2)
        AddCubeObject()
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
    
    
    
    
    
    // Manipulate (Radiobuttons) Functions
    function ChangeManipulatePath(){
        Manipulate = "Path"
    }
    function ChangeManipulatePoint(){
        Manipulate = "Point"
    }
    function ChangeManipulateObject(){
        Manipulate = "Object"
    }
    // Manipulate (Radiobuttons) Functions
    
    
    
    

    // Rendering Engine Settings Update Functions
    function UpdateHertz(){
        ProgramHertz = +document.getElementById("Hertz").value
        document.getElementById("HertzLabel").innerHTML = ProgramHertz + " Hertz (Min. 1H) (/ Max 50)"
    }
    
    function UpdateIncrementHertz(){
        ProgramIncrementHertz = +document.getElementById("Increment/Hertz").value
        document.getElementById("IncrementHertzLabel").innerHTML = ProgramIncrementHertz*100 + "% Change per H (Min. 20%/H) (/ Max 200%)"
    }
    function UpdateFocalLength(){
        FocalLength = +document.getElementById("FocalLength").value
        document.getElementById("FocalLengthLabel").innerHTML = "(Min. 500F) Focal Length: (" +  FocalLength + ") (Max. 15000F)"
    }
    // Rendering Engine Settings Update Functions

    



    // Reset Camera Orientation Function
    function ResetCameraOrientation(){
        CameraDirection1 = 1
        CameraDirection2 = 2
        CameraDirection3 = 3
    }
    // Reset Camera Orientation Function