
let allColors = {
    "1": [[3, 7, 6], [32, 39, 49], [229, 173, 0], [25, 35, 10], [213, 129, 0], [255, 236, 14], [110, 91, 49], [251, 166, 23], [130, 97, 80], [188, 118, 22], [202, 124, 52], [86, 51, 32], [103, 43, 0], [255, 195, 40], [140, 65, 0], [66, 71, 75], [145, 122, 70], [150, 133, 1], [211, 176, 34]],
    "2": [[4, 6, 3], [252, 108, 135], [210, 189, 12], [208, 206, 211], [201, 205, 66], [34, 119, 176], [68, 131, 164], [218, 165, 134], 
    [201, 213, 175], [32, 30, 35], [173, 29, 20], [178, 181, 94], [239, 175, 69], [185, 108, 80], [208, 219, 97], [245, 248, 237], 
    [54, 144, 206], [47, 48, 53], [140, 194, 160], [111, 41, 39], [108, 186, 170], [228, 204, 34], [134, 119, 18]],
    "3": [[224, 221, 44], [33, 19, 10], [55, 12, 84], [53, 0, 214], [102, 86, 0], [194, 199, 99], [188, 37, 52], [49, 61, 0], [106, 61, 128], 
    [78, 30, 0], [155, 84, 18], [53, 47, 33], [104, 22, 28], [137, 155, 143], [93, 104, 98], [233, 233, 243], [136, 82, 95], [89, 78, 46], 
    [229, 216, 0], [118, 58, 57], [37, 54, 62], [182, 68, 6], [236, 194, 94], [213, 218, 115], [82, 45, 159], [144, 128, 0], [181, 174, 68]],
    "4":   [[0, 15, 0], [47, 66, 60], [255, 192, 206], [162, 67, 65], [243, 210, 0], [106, 106, 68], [77, 68, 0], [210, 204, 206], [95, 43, 32], 
    [27, 46, 42], [9, 27, 29], [241, 229, 203], [57, 76, 93], [233, 192, 50], [244, 250, 246], [148, 134, 45], [197, 195, 157], [45, 49, 0], 
    [255, 247, 129], [105, 122, 130], [255, 214, 81], [213, 167, 55], [84, 63, 78], [217, 201, 90], [155, 103, 28], [142, 143, 101], 
    [216, 165, 134], [120, 137, 153], [90, 96, 34]],
    "5": [[95, 95, 95], [23, 23, 23], [44, 44, 44], [68, 68, 68], [143, 143, 143], [175, 175, 175], [228, 228, 228], [199, 199, 199], [122, 122, 122]],
    "6": [[199, 153, 91], [210, 173, 131], [219, 184, 162], [225, 212, 196], [69, 18, 14], [171, 119, 95], [119, 50, 19], [30, 33, 16], 
    [42, 58, 32], [213, 114, 13], [131, 121, 109], [109, 87, 76], [181, 70, 1], [102, 76, 1], [138, 24, 13]],
    "7": [[196, 33, 60], [31, 3, 2], [215, 173, 52], [156, 169, 175], [242, 194, 60], [6, 13, 23], [83, 94, 96], [70, 2, 13], [111, 160, 193], 
    [178, 58, 83], [216, 132, 145], [222, 31, 83], [217, 234, 242], [192, 196, 169], [188, 166, 81], [41, 48, 54], [76, 72, 45], [128, 135, 141], 
    [143, 25, 39]],
    "8": [[181, 161, 102], [78, 59, 16], [41, 25, 2], [200, 111, 19], [144, 31, 17], [148, 90, 66], [129, 67, 44], [160, 127, 0], 
    [218, 190, 93], [168, 123, 38], [208, 177, 123], [146, 131, 98], [213, 150, 45], [98, 138, 65], [3, 2, 0], [224, 201, 147], 
    [241, 94, 17], [210, 20, 0], [88, 81, 37], [31, 112, 106], [225, 171, 10], [123, 103, 17], [6, 49, 3], [119, 60, 0], [161, 155, 59], 
    [181, 86, 0], [128, 6, 3]],
    "9": [[22, 60, 81], [57, 147, 173], [36, 91, 112], [44, 115, 143], [75, 166, 187], [95, 182, 201], [95, 78, 97], [152, 108, 131], 
    [255, 253, 247], [14, 42, 54]],
    "10": [[0, 4, 8], [12, 31, 35], [0, 86, 72], [10, 96, 129], [47, 22, 18], [63, 48, 51], [92, 113, 54], [0, 217, 153], [30, 187, 178], 
    [98, 96, 81], [155, 98, 89], [69, 153, 119], [118, 59, 55], [232, 102, 112], [26, 92, 90], [71, 83, 63], [23, 54, 57], [114, 22, 11], 
    [244, 73, 91], [22, 151, 120], [254, 120, 147], [179, 192, 172], [63, 132, 41], [2, 240, 191], [192, 97, 65], [0, 130, 104], 
    [169, 149, 96], [202, 253, 248], [1, 175, 138], [142, 63, 33], [250, 186, 88], [184, 227, 184], [231, 151, 80], [127, 145, 69]],
    "11": [[157, 148, 115], [185, 168, 112], [207, 188, 145], [30, 29, 34], [157, 33, 23], [171, 71, 21], [209, 206, 187], [232, 230, 209], 
    [179, 123, 76], [201, 171, 61], [51, 52, 44], [96, 78, 54]]
  }


function getColors(){
    //SELECT THE COLORS FROM THE LIST
    let key = choice(Object.keys(allColors))
    CS = allColors[key]

    //SORT COLORS BY DARK
    let grays = []
    CS.map(c => {
        let g = (0.2126*c[0]) + (0.7152 * c[1]) + (0.0722 * c[2])
        grays.push(g)
    })
    CS = sortBy(CS, grays)


    //DRAW THE COLORS
    let nDiv = CS.length
    let barW = (W / nDiv) * S
    console.log(CS)
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
  

  
  
