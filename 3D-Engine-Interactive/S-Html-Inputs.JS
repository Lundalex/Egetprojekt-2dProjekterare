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
        if(CameraMoveMode == 1){
        for (let i = 0; i < ShellLeaderX.length; i++) {
            ShellLeaderX[i] -= 100
        }
    }
}
    function MoveLeft(){
        if(CameraMoveMode == 1){
        for (let i = 0; i < ShellLeaderX.length; i++) {
            ShellLeaderX[i] += 100
        }
    }
}
    function MoveAhead(){
        if(CameraMoveMode == 1){
        for (let i = 0; i < ShellLeaderZ.length; i++) {
            ShellLeaderZ[i] -= 100
        }
    }
}
    function MoveBack(){
        if(CameraMoveMode == 1){
        for (let i = 0; i < ShellLeaderZ.length; i++) {
            ShellLeaderZ[i] += 100
        }
    }
}
    function MoveDown(){
        if(CameraMoveMode == 1){
        for (let i = 0; i < ShellLeaderY.length; i++) {
            ShellLeaderY[i] -= 100
        }
    }
}
    function MoveUp(){
        if(CameraMoveMode == 1){
        for (let i = 0; i < ShellLeaderY.length; i++) {
            ShellLeaderY[i] += 100
        }
    }
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
    
    
    
    
    function UpdateHertz(){
        ProgramHertz = +document.getElementById("Hertz").value
        document.getElementById("HertzLabel").innerHTML = ProgramHertz + " Hertz (/ Max 50)"
    }
    
    function UpdateIncrementHertz(){
        ProgramIncrementHertz = +document.getElementById("Increment/Hertz").value
        document.getElementById("IncrementHertzLabel").innerHTML = ProgramIncrementHertz*100 + "% Change per H(/ Max 200%)"
    }