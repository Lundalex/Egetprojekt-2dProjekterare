// return "bool(false) to cancel function of origin"
function OnStart(){return true}
function OnDeleteFoundObject(FoundObjectNumber){return true}
function OnDeleteObject(ObjectNumber){return true}
function OnKeyPress(PressedKey){return true}

// return 1 => (Cancel function of origin)
// return 2 => (Don't do CollisionPhysics)
// return 3 => (Do CollisionPhysics)
function OnCollision(Object1,Object2){

    // Default
    if(RegObjects[Object1].DeleteOTHERonCollision == true){
        DeleteObject(Object2)
        return 1
    }
    else if(RegObjects[Object2].DeleteOTHERonCollision == true){
        DeleteObject(Object1)
        return 1
    }
    else if(RegObjects[Object1].DeleteOnCollision == true){
        DeleteObject(Object1)
        return 1
    }
    else if(RegObjects[Object2].DeleteOnCollision == true){
        DeleteObject(Object2)
        return 1
    }
    // Default
    return 3
}