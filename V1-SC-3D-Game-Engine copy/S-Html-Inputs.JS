   
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
    const P11 = document.getElementById("13").value
    const P12 = document.getElementById("14").value
    const P13 = document.getElementById("15").value
    const P14 = document.getElementById("16").value
    const P15 = document.getElementById("17").value
    const P16 = document.getElementById("18").value
    const P17 = document.getElementById("19").value
    const P18 = document.getElementById("20").value
    const P19 = document.getElementById("21").value
    const P20 = document.getElementById("22").value
    const P21 = document.getElementById("25").value
    const P22 = document.getElementById("24").value
    
    const P30 = document.getElementById("30").value
    const P31 = document.getElementById("31").value
    const P32 = document.getElementById("32").value
    
    SpawnerObjects.push(new NewSpawnerObject(P1,P2,P3,P4,P5,P6,P7,P8,P9,P10,P11,P12,P13,P14,P15,P16,P17,P18,P19,P20,P21,P22, P30, P31, P32))
}








function Save1(){
    if(SaveSlot1 == "Exported"){
        // Export
        SaveSlot1RegObjects = RegObjects.slice()
        SaveSlot1SpawnerObjects = SpawnerObjects.slice()
        document.getElementById("ExportImportSave").innerHTML = "Exported to:"
        document.getElementById("LastInteractedSaveSlot").innerHTML = "Slot 1"
        SaveSlot1 = "Imported"
    }
    else{
        // Import
        RegObjects = SaveSlot1RegObjects.slice()
        SpawnerObjects = SaveSlot1SpawnerObjects.slice()
        document.getElementById("ExportImportSave").innerHTML = "Imported from:"
        document.getElementById("LastInteractedSaveSlot").innerHTML = "Slot 1"
        SaveSlot1 = "Exported"
    }
}

function Save2(){
    if(SaveSlot2 == "Exported"){
        // Export
        SaveSlot2RegObjects = RegObjects.slice()
        SaveSlot2SpawnerObjects = SpawnerObjects.slice()
        document.getElementById("ExportImportSave").innerHTML = "Exported to:"
        document.getElementById("LastInteractedSaveSlot").innerHTML = "Slot 2"
        SaveSlot2 = "Imported"
    }
    else{
        // Import
        RegObjects = SaveSlot2RegObjects.slice()
        SpawnerObjects = SaveSlot2SpawnerObjects.slice()
        document.getElementById("ExportImportSave").innerHTML = "Imported from:"
        document.getElementById("LastInteractedSaveSlot").innerHTML = "Slot 2"
        SaveSlot2 = "Exported"
    }
}

function Save3(){
    if(SaveSlot3 == "Exported"){
        // Export
        SaveSlot3RegObjects = RegObjects.slice()
        SaveSlot3SpawnerObjects = SpawnerObjects.slice()
        document.getElementById("ExportImportSave").innerHTML = "Exported to:"
        document.getElementById("LastInteractedSaveSlot").innerHTML = "Slot 3"
        SaveSlot3 = "Imported"
    }
    else{
        // Import
        RegObjects = SaveSlot3RegObjects.slice()
        SpawnerObjects = SaveSlot3SpawnerObjects.slice()
        document.getElementById("ExportImportSave").innerHTML = "Imported from:"
        document.getElementById("LastInteractedSaveSlot").innerHTML = "Slot 3"
        SaveSlot3 = "Exported"
    }
}




function UpdateObjectSettings(){

    if(RegObjects[FoundObjectNumber].ObjectType == "Physics"){

    if(document.getElementById("a").value){
        RegObjects[FoundObjectNumber].ConstantForceX = +document.getElementById("a").value}
    if(document.getElementById("b").value){
        RegObjects[FoundObjectNumber].ConstantForceY = +document.getElementById("b").value}
    if(document.getElementById("c").value){
        RegObjects[FoundObjectNumber].ConstantForceZ = +document.getElementById("c").value}
    if(document.getElementById("d").value){
        RegObjects[FoundObjectNumber].HitboxSizeX1 = +document.getElementById("d").value}
    if(document.getElementById("e").value){
        RegObjects[FoundObjectNumber].HitboxSizeY1 = +document.getElementById("e").value}
    if(document.getElementById("f").value){
        RegObjects[FoundObjectNumber].HitboxSizeZ1 = +document.getElementById("f").value}
    if(document.getElementById("g").value){
        RegObjects[FoundObjectNumber].HitboxSizeX2 = +document.getElementById("g").value}
    if(document.getElementById("h").value){
        RegObjects[FoundObjectNumber].HitboxSizeY2 = +document.getElementById("h").value}
    if(document.getElementById("i").value){
        RegObjects[FoundObjectNumber].HitboxSizeZ2 = +document.getElementById("i").value}
    if(document.getElementById("k").value){
        RegObjects[FoundObjectNumber].Mass = +document.getElementById("k").value}
    }

else{
    // Animation

    if(document.getElementById("a").value){
        RegObjects[FoundObjectNumber].LeaderX = +document.getElementById("a").value}
    if(document.getElementById("b").value){
        RegObjects[FoundObjectNumber].LeaderY = +document.getElementById("b").value}
    if(document.getElementById("c").value){
        RegObjects[FoundObjectNumber].LeaderZ = +document.getElementById("c").value}
    if(document.getElementById("d").value){
        RegObjects[FoundObjectNumber].HitboxSizeX1 = +document.getElementById("d").value}
    if(document.getElementById("e").value){
        RegObjects[FoundObjectNumber].HitboxSizeY1 = +document.getElementById("e").value}
    if(document.getElementById("f").value){
        RegObjects[FoundObjectNumber].HitboxSizeZ1 = +document.getElementById("f").value}
    if(document.getElementById("g").value){
        RegObjects[FoundObjectNumber].HitboxSizeX2 = +document.getElementById("g").value}
    if(document.getElementById("h").value){
        RegObjects[FoundObjectNumber].HitboxSizeY2 = +document.getElementById("h").value}
    if(document.getElementById("i").value){
        RegObjects[FoundObjectNumber].HitboxSizeZ2 = +document.getElementById("i").value}

    if(document.getElementById("j").value >= 1){
        ChosenPathStage = (+document.getElementById("j").value)-1}
    if(document.getElementById("k").value){
        RegObjects[FoundObjectNumber].AnimationStages = +document.getElementById("k").value}
    }
}
function UpdateSettings2(){
    SwitchTracker = !SwitchTracker
    if(RegObjects[FoundObjectNumber].ObjectType == "Physics"){

        if(SwitchTracker == true){
            RegObjects[FoundObjectNumber].DeleteOnCollision = true
        }
        else{
            RegObjects[FoundObjectNumber].DeleteOnCollision = false
        }

    }
    else{

        if(SwitchTracker == true){
            RegObjects[FoundObjectNumber].DeleteOTHERonCollision = true
        }
        else{
            RegObjects[FoundObjectNumber].DeleteOTHERonCollision = false
        }

    }

}





function ChangeObjectSettingsSet(){

    if(RegObjects[FoundObjectNumber].ObjectType == "Physics"){
        
    document.getElementById("ObjectTypeObjectSettingstag").innerHTML = "(Physics Object)"
    document.getElementById("ObjectTypeObjectSettingstag").style.color = "orange"

    document.getElementById("o").innerHTML = "Delete On Collision"
    document.getElementById("p").innerHTML = "Something Object"
    document.getElementById("r").innerHTML = "Object Mass Coefficient"

        document.getElementById("a").placeholder = "Const.F-X"
        document.getElementById("b").placeholder = "Const.F-Y"
        document.getElementById("c").placeholder = "Const.F-Z"
        document.getElementById("d").placeholder = "Hitbox-X1"
        document.getElementById("e").placeholder = "Hitbox-Y1"
        document.getElementById("f").placeholder = "Hitbox-Z1"
        document.getElementById("g").placeholder = "Hitbox-X2"
        document.getElementById("h").placeholder = "Hitbox-Y2"
        document.getElementById("i").placeholder = "Hitbox-Z2"

        document.getElementById("j").placeholder = "Nada"
        document.getElementById("k").placeholder = "Mass"

        document.getElementById("a").value = RegObjects[FoundObjectNumber].ConstantForceX
        document.getElementById("b").value = RegObjects[FoundObjectNumber].ConstantForceY
        document.getElementById("c").value = RegObjects[FoundObjectNumber].ConstantForceZ
        document.getElementById("d").value = RegObjects[FoundObjectNumber].HitboxSizeX1
        document.getElementById("e").value = RegObjects[FoundObjectNumber].HitboxSizeY1
        document.getElementById("f").value = RegObjects[FoundObjectNumber].HitboxSizeZ1
        document.getElementById("g").value = RegObjects[FoundObjectNumber].HitboxSizeX2
        document.getElementById("h").value = RegObjects[FoundObjectNumber].HitboxSizeY2
        document.getElementById("i").value = RegObjects[FoundObjectNumber].HitboxSizeZ2

        document.getElementById("j").value = 0
        document.getElementById("k").value = RegObjects[FoundObjectNumber].Mass
    }
    else{
        
    document.getElementById("ObjectTypeObjectSettingstag").innerHTML = "(Animated Object)"
    document.getElementById("ObjectTypeObjectSettingstag").style.color = "lightgreen"

    document.getElementById("o").innerHTML = "Delete OTHER"
    document.getElementById("p").innerHTML = "Object Focus Stage"
    document.getElementById("r").innerHTML = "Object Total Stages"

        document.getElementById("a").placeholder = "Start-X"
        document.getElementById("b").placeholder = "Start-Y"
        document.getElementById("c").placeholder = "Start-Z"
        document.getElementById("d").placeholder = "Hitbox-X1"
        document.getElementById("e").placeholder = "Hitbox-Y1"
        document.getElementById("f").placeholder = "Hitbox-Z1"
        document.getElementById("g").placeholder = "Hitbox-X2"
        document.getElementById("h").placeholder = "Hitbox-Y2"
        document.getElementById("i").placeholder = "Hitbox-Z2"

        document.getElementById("a").value = RegObjects[FoundObjectNumber].LeaderX
        document.getElementById("b").value = RegObjects[FoundObjectNumber].LeaderY
        document.getElementById("c").value = RegObjects[FoundObjectNumber].LeaderZ
        document.getElementById("d").value = RegObjects[FoundObjectNumber].HitboxSizeX1
        document.getElementById("e").value = RegObjects[FoundObjectNumber].HitboxSizeY1
        document.getElementById("f").value = RegObjects[FoundObjectNumber].HitboxSizeZ1
        document.getElementById("g").value = RegObjects[FoundObjectNumber].HitboxSizeX2
        document.getElementById("h").value = RegObjects[FoundObjectNumber].HitboxSizeY2
        document.getElementById("i").value = RegObjects[FoundObjectNumber].HitboxSizeZ2

        document.getElementById("j").value = ChosenPathStage
        document.getElementById("k").value = RegObjects[FoundObjectNumber].AnimationStages

        document.getElementById("j").placeholder = "Focus Stage"
        document.getElementById("k").placeholder = "Stages"

    }
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