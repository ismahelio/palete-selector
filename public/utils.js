function addV (v1, v2){
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]]
}

function scaleV (v, n){
  return [v[0] * n, v[1] * n, v[2] * n]
}

function getRandom(min=0, max=1) {
  return (fxrand() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomInt(min, max) {
  
  if(Math.abs(min-max) <= 0.002) return min;

  if(max < min){
    var mn = max;
    var mx = min;

    min = mn;
    max = mx;
  }

  min = Math.ceil(min);
  max = Math.floor(max)-0.001;
  const r = fxrand() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
  return Math.floor(r)
}

function choice(l){
  return l[getRandomInt(0, l.length)]

}


/// DRAWING
function sw(w){
  strokeWeight(w * S)// (zoomV *1.2)//* strokeReg;
  }