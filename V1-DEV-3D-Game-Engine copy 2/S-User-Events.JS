    // Select Function -----
function OnClickFunction(event) {
    // Mouse X/Y coords
    const X = event.clientX +138 - 690
    const Y = event.clientY +372 - 690
    
    let FoundCollision = false

    let FoundXcoord = 0
    let FoundYcoord = 0
    let FoundZcoord = 0

    for (let i = 0; i < RegObjects.length; i++) {
      RegObjects[i].Marked = false
      
    }
    // Locate Collision
for (let i = 0; i < RegObjects.length; i++) {

  RegObjects[i].PointsMarked = []

    for (let o = 0; o < RegObjects[i].ShellX.length; o++) {

        if((((Math.abs(X - RegObjects[i].ShellprojectedX[o])) < 8) && ((Math.abs(Y - RegObjects[i].ShellprojectedY[o])) < 8)) && FoundCollision == false){
        
            FoundXcoord = RegObjects[i].RelativePointPositionX(o)
            FoundYcoord = RegObjects[i].RelativePointPositionY(o)
            FoundZcoord = RegObjects[i].RelativePointPositionZ(o)

            FoundObjectNumber = i
            ChangeObjectSettingsSet()

            document.getElementById("ObjectSettings").innerHTML = "Properties - Object " + (FoundObjectNumber + 1)

            FoundCollision = true
        }
    }
}
    // Locate Collision

    // Locate Points Nearby
if(FoundCollision == true){

    for (let o = 0; o < RegObjects[FoundObjectNumber].ShellX.length; o++) {

      RegObjects[FoundObjectNumber].Marked = true

        if((Math.abs(FoundXcoord - (RegObjects[FoundObjectNumber].RelativePointPositionX(o))) < 1) && (Math.abs(FoundYcoord - (RegObjects[FoundObjectNumber].RelativePointPositionY(o))) < 1) && (Math.abs(FoundZcoord - (RegObjects[FoundObjectNumber].RelativePointPositionZ(o))) < 1)){

          RegObjects[FoundObjectNumber].PointsMarked[o] = true
        }
        else{
          RegObjects[FoundObjectNumber].PointsMarked[o] = false
        } 
    }
}
    // Locate Points Nearby

}
    // Select Function -----





    // KeyPress Event Listener -----
        window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  let Continue = OnKeyPress(event.key)
  if(!Continue){return}
  switch (event.key) {
    case "ArrowDown":
    KeyPress = "ArrowDown"
      break;
    case "ArrowUp":
    KeyPress = "ArrowUp"
      break;
    case "ArrowLeft":
    KeyPress = "ArrowLeft"
      break;
    case "ArrowRight":
    KeyPress = "ArrowRight"
      break;
      case "Shift":
    KeyPress = "Shift"
      break;
      case " ":
    KeyPress = "SpaceBar"
      break;

      case "Backspace":
    DeleteFoundObject(FoundObjectNumber)
      break;

      case "a":
        KeyPress = "ArrowLeft"
          break;
          case "d":
            KeyPress = "ArrowRight"
          break;
          case "w":
            KeyPress = "ArrowUp"
          break;
          case "s":
            KeyPress = "ArrowDown"
          break;

////////////
      case "b":
      ShowAnimationPathing = !ShowAnimationPathing
      break;

      case "h":
        ShowHitboxes = !ShowHitboxes
        break;
////////////

////////////
case "v":
  RunProgram = false
  break;
////////////

    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
    // KeyPress Event Listener -----





    // Scroll Function (Up & Down) -----
function ScrollFunction(event){
  let Continue = OnScroll(event.deltaY)
  if(!Continue){return}

    if(event.deltaY > 0){

        ScrollY = "Down"
    }
    else if(event.deltaY < 0){

        ScrollY = "Up"
    }
}
    // Scroll Function (Up & Down) -----





   // Mouse Drag Functions -----
function MouseDownFunction(event){

    LastMouseDownX = event.clientX
    LastMouseDownY = event.clientY

}

function MouseUpFunction(event){

    LastMouseUpX = event.clientX
    LastMouseUpY = event.clientY

    // Calls Function
    CameraPerpectiveHandling(LastMouseDownX, LastMouseDownY, LastMouseUpX, LastMouseUpY)
}
   // Mouse Drag Functions -----