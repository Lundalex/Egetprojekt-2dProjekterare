    // Select Function -----
function OnClickFunction(event) {
    // Mouse X/Y coords
    const X = event.clientX - 18 - 400
    const Y = event.clientY - 121 - 400
    
    let FoundCollision = false

    let FoundXcoord 
    let FoundYcoord 
    let FoundZcoord

    MarkedObject = []
    // Locate Collision
for (let i = 0; i < ShellXProjected.length; i++) {

    MarkedPoints[i] = []

    for (let o = 0; o < ShellXProjected[i].length; o++) {

        if((((Math.abs(X - ShellXProjected[i][o])) < 5) && ((Math.abs(Y - ShellYProjected[i][o])) < 5)) && FoundCollision == false){
        
            FoundXcoord = ShellX[i][o] + ShellLeaderX[i]
            FoundYcoord = ShellY[i][o] + ShellLeaderY[i]
            FoundZcoord = ShellZ[i][o] + ShellLeaderZ[i]

            FoundObjectNumber = i

            FoundCollision = true
        }
    }
}
    // Locate Collision

    // Locate Points Nearby
if(FoundCollision == true){

    for (let o = 0; o < ShellX[FoundObjectNumber].length; o++) {

        MarkedObject[FoundObjectNumber] = true

        if((Math.abs(FoundXcoord - (ShellX[FoundObjectNumber][o] + ShellLeaderX[FoundObjectNumber])) < 1) && (Math.abs(FoundYcoord - (ShellY[FoundObjectNumber][o] + ShellLeaderY[FoundObjectNumber])) < 1) && (Math.abs(FoundZcoord - (ShellZ[FoundObjectNumber][o] + ShellLeaderZ[FoundObjectNumber])) < 1)){
            
            MarkedPoints[FoundObjectNumber][o] = true
        }
        else{
            MarkedPoints[FoundObjectNumber][o] = false
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

      case "k":
    ChosenPathStage = 0
      break;
      case "l":
      ChosenPathStage = 1
      break;
      case "m":
      ChosenPathStage = 2
      break;
      case "n":
      ChosenPathStage = 3
      break;

////////////
      case "b":
      ShowAnimationPathing = !ShowAnimationPathing
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
    if(event.deltaY > 0){

        ScrollY = "Down"
    }
    else if(event.deltaY < 0 ){

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