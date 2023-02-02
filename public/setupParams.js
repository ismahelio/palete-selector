function setupC(){
    // CANVAS SIZE IS INDEPENDENT

    W = choice([2050])
    H = 2900

    strokeCap(ROUND);
    noSmooth()
    // ADJUST TO SCREEN
    let wh = W/H
    let windowW = window.innerWidth * 0.98
    let windowH = window.innerHeight * 0.98
    let whWin = windowW / windowH
    let wW
    let wH


    if(wh<whWin){
        //ajusta la altura
        S = windowH / H
        wH = windowH
        wW = windowH * wh
    }
    else{
        S = windowW / W
        wW = windowW
        wH = wW / wh
    }
    HDR = H/wH

    R = window.devicePixelRatio
    pixelDensity(R);
    createCanvas(wW, wH);
    background(0);



    }

