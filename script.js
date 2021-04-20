// creat an object from grid
const grid = Array.from(document.getElementsByClassName("grid-box"))
// create an a random array for white squares
const startMap = Array.from({length: 5}, () => Math.floor(Math.random() * 36));

// set elemnt n from startmap array bg color to white
for(let i = 0;i < startMap.length ;i++) {
    grid[startMap[i]].style.backgroundColor = 'white'
}
// create a function that changes a squares BG color from black to white
Array.from(grid).forEach(v => v.addEventListener('click', function() {
    if (v.style.backgroundColor === "white") {
        v.style.backgroundColor = "black";
    } else {
        v.style.backgroundColor = "white";
    }
}));
// create a function to turn all squares black
blackOut = () => {
    grid.forEach(v => {
        v.style.backgroundColor = 'black'
    })
}
// set timeout for 7000ms before running blackout function
setTimeout(blackOut, 000)



// button triggered function that compares user entry map to randomly generated startmap and alerts if the two are equal(win) or unequal(lose), wait 3 seconds and reset game
onClick = () => {
    const gridState = Array.from(document.getElementsByClassName('grid-box'))
    const mapGrid = []
    gridState.forEach(v => {
        if(v.style.backgroundColor === "white") {
            mapGrid.push(gridState.indexOf(v))
        }
    });console.log(startMap.sort(),mapGrid.sort())
    if(JSON.stringify(startMap.sort()) == JSON.stringify(mapGrid.sort())) {
        alert("YOU WIN")
    }else {
        alert("YOU LOSE")
    }setTimeout(location.reload(), 3000)
    }
   
