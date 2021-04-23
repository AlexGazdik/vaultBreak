// create an object from grid
const grid = Array.from(document.getElementsByClassName("grid-box"))
const startMap = (new Array(36).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5)).slice(0,5);

refresh = () => {
    location.reload();
    closeSlideMenu();
    
}
// getAndMap = async () => {
//     const response = await randomArray(35,5);
//     mapPlot(response);
// }
// set elemnt n from startmap array bg color to white
blackOut = () => {
    grid.forEach(v => {
        v.style.backgroundColor = 'black'
    })
}
//Random Array Generator, genertaes a random seuqbce of sequential numbers and pulls first n from array

// create an a random array for white squares
 
// change background value of grid-boxes by index from random array
mapPlot = (arr) => {
    setTimeout(blackOut, 2000)
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
        alert("VAULT UNLOCKED");
        blackOut();
        refresh();
    }else {
        alert("Incorrect");
        blackOut();
        refresh();
    }
}
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


// Navbar open/close
//write into this function a callback that sets an event listener onto the close box icon
// externally Called functions
function openSlideMenu () {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  
  function closeSlideMenu () {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }
