
let allColors = {
    "1": [[103,43,0],[66,71,75],[150,133,1],[251,166,23],[255,236,14],[3,7,6]],
    "2": [[47,48,53],[173,29,20],[54,144,206],[140,194,160],[228,204,34],[208,219,97]],
    "3": [[37,54,62],[93,104,98],[229,216,0],[233,233,243],[104,22,28]],
    "4": [[57,76,93],[120,137,153],[255,192,206],[255,247,129],[244,250,246],[9,27,29]],
    "5": [[23,23,23],[95,95,95],[143,143,143],[228,228,228],[175,175,175]],
    "6": [[30,33,16],[42,58,32],[213,114,13],[199,153,91],[225,212,196],[138,24,13]],
    "7": [[6,13,23],[222,31,83],[111,160,193],[242,194,60],[217,234,242],[128,135,141]],
    "8": [[6,49,3],[210,20,0],[31,112,106],[241,94,17],[225,171,10],[224,201,147]],
    "9": [[14,42,54],[22,60,81],[44,115,143],[95,182,201],[57,147,173]],
    "11": [[30,29,34],[157,33,23],[171,71,21],[201,171,61],[209,206,187],[232,230,209]]
  }


function getColors(){
    //SELECT THE COLORS FROM THE LIST
    let key = choice(Object.keys(allColors))
    CS = allColors[key]
    console.log("Paleta number", key)
    //SORT COLORS BY DARK
    let grays = []
    CS.map(c => {
        let g = (0.2126*c[0]) + (0.7152 * c[1]) + (0.0722 * c[2])
        grays.push(g)
    })
    CS = sortBy(CS, grays)

  }

  function drawColors(){
        //DRAW THE COLORS
        let nDiv = CS.length
        let barW = (W / nDiv) * S
        /// Iterate all the colors of the palette
        for (let i = 0; i < nDiv; i++) {
          let x = barW * i
          let c = CS[i]
          stroke(255)
          fill(c)
          rect(x, H * .15 * S, barW, H * S * 0.5)
        }
  }



function mouseClicked() {


    //Check if clicking the selection or the palette
    if(mouseY < H * .1 * S){
        console.log("palette sel")
        //Remove the color from the selection if we click on it
        let nDiv = PCS.length
        let barW = (W / nDiv) * S
        /// Iterate all the colors of the palette
        for (let i = 0; i < nDiv; i++) {
        let x = barW * i
        if(mouseX > x && mouseX < x + barW){
            PCS.splice(i, 1)
            updateList()
            break
        }
        
        }
    }
    else if(mouseY > H * .15 * S && mouseY < H * .65 * S){
        console.log("all colors")
        /// Check wich color I am clicking
        let index
        /// Iterate all the colors of the palette
        let nDiv = CS.length
        let barW = (W / nDiv) * S
        for (let i = 0; i < nDiv; i++) {
            let x = barW * i
            if(mouseX > x && mouseX < x + barW){
            index = i
            break
            } 
        }

        if(index != undefined){
            let clickColor = CS[index]
            //ADD THE COLOR TO THE PALETTE IF NOT IN THE PCS LIST
            if(!listInList(PCS, clickColor)){
                PCS.push(clickColor)
                updateList()
            }
        }   
    }
    
 

  
  
  }

// THE COLORS WE SELECT
function drawPalette(){
    fill([255,255,255])
    stroke(255)
    strokeWeight(4)
    rect(0, 0, W * S, H * S * .1)

    //SORT COLORS BY DARK
    let grays = []
    PCS.map(c => {
        let g = (0.2126*c[0]) + (0.7152 * c[1]) + (0.0722 * c[2])
        grays.push(g)
    })
    PCS = sortBy(PCS, grays)

    // DRAW THE COLORS IN THE PALETTE
    let nDiv = PCS.length
    let barW = (W / nDiv) * S
    /// Iterate all the colors of the palette
    for (let i = 0; i < nDiv; i++) {
      let x = barW * i
      let c = PCS[i]
      fill(c)
      rect(x, 0, barW, H * .1 * S)
      
    }
}

// MAKE THE LIST VISIBLE TO COPY IT
function drawColorList(){
    fill(0);
    if(PCS.length > 0){
        fill(PCS[PCS.length - 1])
    }
    strokeWeight(0)
    textSize(W * S * .03);
    text('PALETE MAKER', 0, H * S * .135);

    // UPDATE THE TEXT

}

function equalList(l1, l2){
    if(l1.length == l2.length){
        for (let i = 0; i < l1.length; i++) {
            if(l1[i] != l2[i]){
                return false
            }
            
        }
        return true
    }
    else{
        return false
    }
}

function listInList(mainList, miniList){
    for (let i = 0; i < mainList.length; i++) {

        if(equalList(mainList[i], miniList)){
            return true
        }
    }
    return false
}

function updateList(){
    //lIST TO STRING
    document.getElementById('color_list').innerHTML = JSON.stringify(PCS);

}
  

  
  
