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

    //////////////// LOAD IMAGE

    // function setup() {
    // image(img, 0, 0);
    // }

    console.log("canvas size")
    console.log(wW, wH)

    let el = document.getElementById('color_list');
    el.style.position = "absolute"; // So it is on top of everything
    el.style.textAlign = "center"    

    if(windowH < windowW){
        el.style.width = windowH + 'px';
        el.style.top = ((window.innerHeight - wH) / 2) +  (wH * .65) + 'px';
        el.style.backgroundColor = "red"

    }
    else{
        el.style.width = windowW + 'px';
        el.style.top = ((window.innerHeight - wH) / 2) +  (wH * .65) + 'px';
        el.style.backgroundColor = "blue"


    }
    let colBck = [0,0,0]
    let colText = [255,255,255]
    el.style.backgroundColor = "rgb(" + colBck[0] + "," + colBck[1] + "," + colBck[2] + ")"
    el.style.color = "rgb(" + colText[0] + "," + colText[1] + "," + colText[2] + ")"



    }



