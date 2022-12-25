    // Reset Canvas Function
function ResetCanvas(){
    ctx.beginPath();
    ctx.rect(00, 00, 800, 800);
    ctx.fillStyle = "white";
    ctx.fill();
}
    // Reset Canvas Function





    // Manipulate Path/Object/Point Function
function DoManipulation(){
    if(Manipulate == "Path"){
        switch (KeyPress) {
            case "ArrowDown":
            ObjectAnimationInstructionsZ[FoundObjectNumber][ChosenPathStage] = Number(ObjectAnimationInstructionsZ[FoundObjectNumber][ChosenPathStage]) - 20
        
            break;
            case "ArrowUp":
            ObjectAnimationInstructionsZ[FoundObjectNumber][ChosenPathStage] = Number(ObjectAnimationInstructionsZ[FoundObjectNumber][ChosenPathStage]) + 20
            
            break;
            case "ArrowLeft":
            ObjectAnimationInstructionsX[FoundObjectNumber][ChosenPathStage] = Number(ObjectAnimationInstructionsX[FoundObjectNumber][ChosenPathStage]) - 20
            
            break;
            case "ArrowRight":
            ObjectAnimationInstructionsX[FoundObjectNumber][ChosenPathStage] = Number(ObjectAnimationInstructionsX[FoundObjectNumber][ChosenPathStage]) + 20
            
            break;
            case "SpaceBar":
            ObjectAnimationInstructionsY[FoundObjectNumber][ChosenPathStage] = Number(ObjectAnimationInstructionsY[FoundObjectNumber][ChosenPathStage]) - 20
            break;
        
            case "Shift":
            ObjectAnimationInstructionsY[FoundObjectNumber][ChosenPathStage] = Number(ObjectAnimationInstructionsY[FoundObjectNumber][ChosenPathStage]) + 20
            break;
        
            default:
                break;
        }
        
        }
        else if(Manipulate == "Point"){
        
        for (let i = 0; i < MarkedPoints.length; i++) {
        
            for (let o = 0; o < MarkedPoints[i].length; o++) {
        
                if(MarkedPoints[i][o] == true){
        
                    switch (KeyPress) {
                        case "ArrowDown":
                        ShellZ[i][o] -= 20
        
                        break;
                        case "ArrowUp":
                        ShellZ[i][o] += 20
        
                        break;
                        case "ArrowLeft":
                        ShellX[i][o] -= 20
        
                        break;
                        case "ArrowRight":
                        ShellX[i][o] += 20
        
                        break;
                        case "SpaceBar":
                        ShellY[i][o] -= 20
        
                        break;
                        case "Shift":
                        ShellY[i][o] += 20
        
                        break;
        
                        default:
                        break;
                    }
                }
            }
        }
        }
        
        else if(Manipulate == "Object"){
            switch (KeyPress) {
            case "ArrowDown":
            ShellLeaderZ[FoundObjectNumber] -= 20
        
            break;
            case "ArrowUp":
            ShellLeaderZ[FoundObjectNumber] += 20
            
            break;
            case "ArrowLeft":
            ShellLeaderX[FoundObjectNumber] -= 20
            
            break;
            case "ArrowRight":
            ShellLeaderX[FoundObjectNumber] += 20
            
            break;
            case "SpaceBar":
            ShellLeaderY[FoundObjectNumber] -= 20
        
            break;
            case "Shift":
            ShellLeaderY[FoundObjectNumber] += 20
            
            break;
        
            default:
                break;
        }
    }
}
    // Manipulate Path/Object/Point Function




    // Apply Scaling Function
function DoScaling(){
    if(ScrollY != "None"){

        let Scalefactor = 0
    
    if(ScrollY == "Up"){
        Scalefactor = 1.05
    }
    
    else{
        Scalefactor = 0.95    
    }
    
        for (let i = 0; i < ShellX[FoundObjectNumber].length; i++) {
            ShellX[FoundObjectNumber][i] *= Scalefactor
            ShellY[FoundObjectNumber][i] *= Scalefactor
            ShellZ[FoundObjectNumber][i] *= Scalefactor
            
        }
    }
}
    // Apply Scaling Function



    // Calculate Animation Values per Frame Function
function DoCalculateAnimation(){

    if(AnimateFrame > 400){
        AnimateFrame = 1
    }
    else{
        AnimateFrame ++
    }
    
    for (let i = 0; i < ShellX.length; i++) {
        
    let CurrentAnimationStage = Math.floor(AnimateFrame/100)
    let FrameInAnimationStage = AnimateFrame % 100
    
    AnimationX[i] = 0
    AnimationY[i] = 0
    AnimationZ[i] = 0
    
    for (let o = 0; o < CurrentAnimationStage; o++) {
    
        AnimationX[i] += Number(ObjectAnimationInstructionsX[i][o])
        AnimationY[i] += Number(ObjectAnimationInstructionsY[i][o])
        AnimationZ[i] += Number(ObjectAnimationInstructionsZ[i][o])
    
    }
    
    AnimationX[i] += Number(ObjectAnimationInstructionsX[i][CurrentAnimationStage]) * 0.01 * FrameInAnimationStage
    AnimationY[i] += Number(ObjectAnimationInstructionsY[i][CurrentAnimationStage]) * 0.01 * FrameInAnimationStage
    AnimationZ[i] += Number(ObjectAnimationInstructionsZ[i][CurrentAnimationStage]) * 0.01 * FrameInAnimationStage
    
    }
    
    
    
    if(ShowAnimationPathing == true){
    
    for (let i = 0; i < ObjectAnimationInstructionsX.length; i++) {
    
        TotalAnimationX[i] = []
        TotalAnimationY[i] = []
        TotalAnimationZ[i] = []
    
    
            TotalAnimationX[i][0] = Number(ObjectAnimationInstructionsX[i][0])
            TotalAnimationY[i][0] = Number(ObjectAnimationInstructionsY[i][0])
            TotalAnimationZ[i][0] = Number(ObjectAnimationInstructionsZ[i][0])
    
    
        for (let o = 1; o < ObjectAnimationInstructionsX[i].length; o++) {
    
            TotalAnimationX[i][o] = Number(TotalAnimationX[i][o-1]) + Number(ObjectAnimationInstructionsX[i][o])
            TotalAnimationY[i][o] = Number(TotalAnimationY[i][o-1]) + Number(ObjectAnimationInstructionsY[i][o])
            TotalAnimationZ[i][o] = Number(TotalAnimationZ[i][o-1]) + Number(ObjectAnimationInstructionsZ[i][o])
    
        }
    }
    }
}
    // Calculate Animation Values per Frame Function





    // Project Shell X/Y/Z -> 2D(X, Y) Function
function ProjectShell2D(){
    for (let i = 0; i < ShellX.length; i++) {
        ShellXProjected[i] = []
        ShellYProjected[i] = []

        for (let o = 0; o < ShellX[i].length; o++) {
            // Add Animation Frame Values
            let X = ShellX[i][o] + ShellLeaderX[i] + Number(AnimationX[i])
            let Y = ShellY[i][o] + ShellLeaderY[i] + Number(AnimationY[i])
            let Z = ShellZ[i][o] + ShellLeaderZ[i] + Number(AnimationZ[i])

            ShellXProjected[i][o] = ((X * FocalLength) / (Z + FocalLength))
            ShellYProjected[i][o] = ((Y * FocalLength) / (Z + FocalLength))
        }
    }
}
    // Project Shell X/Y/Z -> 2D(X, Y) Function





    // Project per Object Animation Path X/Y/Z -> 2D(X, Y) Function
function ProjectAnimationPath2D(){
if(ShowAnimationPathing == true){

    for (let i = 0; i < ShellLeaderX.length; i++) {

        AnimationPathXProjected[i] = []
        AnimationPathYProjected[i] = []

        for (let o = 0; o < TotalAnimationX[i].length; o++) {
            
            let X = ShellLeaderX[i] + TotalAnimationX[i][o]
            let Y = ShellLeaderY[i] + TotalAnimationY[i][o]
            let Z = ShellLeaderZ[i] + TotalAnimationZ[i][o]
            
            AnimationPathXProjected[i][o] = ((X * FocalLength) / (Z + FocalLength))
            AnimationPathYProjected[i][o] = ((Y * FocalLength) / (Z + FocalLength))
        }

        AnimationPathXProjected[i].unshift((ShellLeaderX[i] * FocalLength) / (ShellLeaderZ[i] + FocalLength))
        AnimationPathYProjected[i].unshift((ShellLeaderY[i] * FocalLength) / (ShellLeaderZ[i] + FocalLength))
    }

}
}
    // Project per Object Animation Path X/Y/Z -> 2D(X, Y) Function



    // Canvas Draw Object Shells with Marking Function
function CanvasDrawObjectShells(){
    for (let i = 0; i < ShellXProjected.length; i++) {
        // Object Marked
        if(MarkedObject[i] == true){
            for (let o = 0; o < ShellXProjected[i].length; o++) {
            
            ctx.moveTo(400+Number(ShellXProjected[i][o]),400+Number(ShellYProjected[i][o]));
            ctx.lineTo(400+Number(ShellXProjected[i][o+1]),400+Number(ShellYProjected[i][o+1]));
            ctx.strokeStyle = "orange"
            ctx.lineWidth = 2
            ctx.stroke()
        }
        // Point Marked (in Marked Object)
        for (let o = 0; o < ShellXProjected[i].length; o++) {
            
            if(MarkedPoints[i][o] == true){

                ctx.moveTo(400+Number(ShellXProjected[i][o]-10),400+Number(ShellYProjected[i][o]-10));
                ctx.lineTo(400+Number(ShellXProjected[i][o]+10),400+Number(ShellYProjected[i][o]+10));
                ctx.strokeStyle = "red"
                ctx.lineWidth = 2
                ctx.stroke()
                ctx.moveTo(400+Number(ShellXProjected[i][o]+10),400+Number(ShellYProjected[i][o]-10));
                ctx.lineTo(400+Number(ShellXProjected[i][o]-10),400+Number(ShellYProjected[i][o]+10))
                ctx.stroke()
            }
        }

        }
        // Object Not Marked
        else{
        for (let o = 0; o < ShellXProjected[i].length; o++) {
            
            ctx.moveTo(400+Number(ShellXProjected[i][o]),400+Number(ShellYProjected[i][o]));
            ctx.lineTo(400+Number(ShellXProjected[i][o+1]),400+Number(ShellYProjected[i][o+1]))
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2
            ctx.stroke()
        }}
        
    }
}
    // Canvas Draw Object Shells with Marking Function





    // Canvas draw Animation Pathing Visualisation Function
function CanvasDrawAnimationPathing(){
    if(ShowAnimationPathing == true){

        for (let i = 0; i < AnimationPathXProjected.length; i++) {
    
            for (let o = 0; o < AnimationPathXProjected[i].length; o++) {
    
                ctx.moveTo(400+Number(AnimationPathXProjected[i][o]),400+Number(AnimationPathYProjected[i][o]));
                ctx.lineTo(400+Number(AnimationPathXProjected[i][o+1]),400+Number(AnimationPathYProjected[i][o+1]));
                ctx.strokeStyle = "purple"
                ctx.lineWidth = 2
                ctx.stroke()
            }
        }
    }
}
    // Canvas draw Animation Pathing Visualisation Function