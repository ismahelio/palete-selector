function setupC(){
    // CANVAS SIZE IS INDEPENDENT

    W = 2000
    H = 2000

    strokeCap(ROUND);
    noSmooth()
    // ADJUST TO SCREEN
    let wh = W/H
    let windowW = window.innerWidth * 0.9
    let windowH = window.innerHeight * 0.9
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
    background(255);

    console.log("canvas size")
    console.log(wW, wH)

    let el = document.getElementById('color_list');
    el.style.position = "absolute"; // So it is on top of everything
    el.style.textAlign = "center"    
    el.style.top = window.innerHeight * .75 + 'px';
    el.style.width = windowW + 'px';


    }



