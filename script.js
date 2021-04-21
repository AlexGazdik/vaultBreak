// create an object from grid
const grid = Array.from(document.getElementsByClassName("grid-box"))

refresh = () => {
    location.reload();
}
// Navbar open/close
function openSlideMenu () {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  
  function closeSlideMenu () {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }


// create an a random array for white squares
for (var a=[],i=0;i<36;++i) a[i]=i;
shuffle = (array) => {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
arraySelection = shuffle(a)
startMap = arraySelection.slice(0,5)
// set elemnt n from startmap array bg color to white
mapPlot = (arr) => {
    for(let i = 0;i < arr.length ;i++) {
    grid[arr[i]].style.backgroundColor = 'white'
}}
mapPlot(startMap)
// create a function that changes a squares BG color from black to white
Array.from(grid).forEach(v => v.addEventListener('click', function() {
    if (v.style.backgroundColor === "white") {
        v.style.backgroundColor = "black";
    } else {
        v.style.backgroundColor = "white";
    }
}));
// create a function to turn all squares black
const blackOut = () => {
    grid.forEach(v => {
        v.style.backgroundColor = 'black'
    })
}

// set timeout for 7000ms before running blackout function
setTimeout(blackOut, 4000)

// button triggered function that compares user entry map to randomly generated startmap and alerts if the two are equal(win) or unequal(lose), wait 3 seconds and reset game
submitSelection = () => {
    const gridState = Array.from(document.getElementsByClassName('grid-box'))
    const mapGrid = []
    gridState.forEach(v => {
        if(v.style.backgroundColor === "white") {
            mapGrid.push(gridState.indexOf(v))
        }
    });console.log(startMap.sort(),mapGrid.sort())
    if(JSON.stringify(startMap.sort()) == JSON.stringify(mapGrid.sort())) {
        alert("VAULT UNLOCKED")
        setTimeout(location.reload(), 3000)
    }else {
        alert("Incorrect")
        location.reload();
    }
}
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


