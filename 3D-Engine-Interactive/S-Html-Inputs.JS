    // Submit Settings Function
function SubmitSettings(){
    FocalLength = +document.getElementById("3").value
    document.getElementById("7").innerHTML = " Focal Length Set To: " + FocalLength + " Length Units"
    FrameAmount = 10000
}
    // Submit Settings Function





    // Quick Start Function
function QuickStart(){
    FocalLength = 700
    FrameAmount = 10000
    document.getElementById("7").innerHTML = " Focal Length Set To: " + FocalLength + " Length Units"

    // Calls Functions (2)
    AddCubeObject()
    Start()
}
    // Quick Start Function





    // Camera Movement Functions
function MoveRight(){
    for (let i = 0; i < ShellLeaderX.length; i++) {
            ShellLeaderX[i] -= 100
    }
}
function MoveLeft(){
    for (let i = 0; i < ShellLeaderX.length; i++) {
            ShellLeaderX[i] += 100
    }
}
function MoveAhead(){
    for (let i = 0; i < ShellLeaderZ.length; i++) {
            ShellLeaderZ[i] -= 100
    }
}
function MoveBack(){
    for (let i = 0; i < ShellLeaderZ.length; i++) {
            ShellLeaderZ[i] += 100
    }
}
function MoveDown(){
    for (let i = 0; i < ShellLeaderY.length; i++) {
            ShellLeaderY[i] -= 100
    }
}
function MoveUp(){
    for (let i = 0; i < ShellLeaderY.length; i++) {
            ShellLeaderY[i] += 100
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