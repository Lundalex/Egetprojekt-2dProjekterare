    // Submit Settings Function
    function SubmitSettings(){
        FocalLength = +document.getElementById("3").value
        document.getElementById("7").innerHTML = " Focal Length Set To: " + FocalLength + " Length Units"
    }
    // Submit Settings Function
    
    
    
    
    
    // Quick Start Function
    function QuickStart(){
        document.getElementById("7").innerHTML = " Focal Length Set To: " + FocalLength + " Length Units"
        
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
        document.getElementById("HertzLabel").innerHTML = ProgramHertz + " Hertz (/ Max 50)"
    }
    
    function UpdateIncrementHertz(){
        ProgramIncrementHertz = +document.getElementById("Increment/Hertz").value
        document.getElementById("IncrementHertzLabel").innerHTML = ProgramIncrementHertz*100 + "% Change per H(/ Max 200%)"
    }
    // Rendering Engine Settings Update Functions