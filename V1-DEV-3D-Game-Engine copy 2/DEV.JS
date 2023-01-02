// Parameters - AddCubeObject/AddSphereObject:
// (Necessary) INLeaderX, INLeaderY, INLeaderZ, Size, 
// (Optional) HitboxSizeX1, HitboxSizeY1, HitboxSizeZ1, HitboxSizeX2, HitboxSizeY2, HitboxSizeZ2, ObjectType, VelocityX, VelocityY, VelocityZ, Mass, DeleteOnCollision, ConstantForceX, ConstantForceY, ConstantForceZ

// Parameters - new NewSpawnerObject:
// (Necessary) SpawnSpaceX1, SpawnSpaceY1, SpawnSpaceZ1, SpawnSpaceX2, SpawnSpaceY2, SpawnSpaceZ2, SpawnedLeaderX, SpawnedLeaderY, SpawnedLeaderZ, SpawnedSize, SpawnedHitboxSizeX1, SpawnedHitboxSizeY1, SpawnedHitboxSizeZ1, SpawnedHitboxSizeX2, SpawnedHitboxSizeY2, SpawnedHitboxSizeZ2, SpawnedVelocityX, SpawnedVelocityY, SpawnedVelocityZ, SpawnedMass, SpawnedDeleteOnCollision, SpawnedObjectCubeSphere, SpawnedConstantForceX, SpawnedConstantForceY, SpawnedConstantForceZ


// return "bool(false) to cancel function of origin"
function OnStart(){return true}
function OnDeleteFoundObject(FoundObjectNumber){return true}
function OnDeleteObject(ObjectNumber){return true}
function OnKeyPress(PressedKey){return true}
function OnNewFrame(){return true}
function OnScroll(ScrollValue){return true}

// return 1 => (Cancel function of origin)
// return 2 => (Don't do CollisionPhysics)
// return 3 => (Do CollisionPhysics)
function OnCollision(Object1,Object2){

    // Default setup
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
    return 3
}