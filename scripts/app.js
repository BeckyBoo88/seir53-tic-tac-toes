window.addEventListener('DOMContentLoaded', () => {
   let playerTurns = 0

 // ARRAY FOR SQUARES
    let s1 = document.getElementById('one')
    let s2= document.getElementById('two')
    let s3= document.getElementById('three')
    let s4= document.getElementById('four')    
    let s5= document.getElementById('five')
    let s6= document.getElementById('six')
    let s7= document.getElementById('seven')
    let s8= document.getElementById('eight')
    let s9= document.getElementById('nine')

    const gameSq= [s1,s2,s3,s4,s5,s6,s7,s8]
    const gameSquareArray= document.querySelectorAll('.gameTile')
    console.log(`gameSq ${gameSq}`)
    console.log(`gameSq ${gameSquareArray}`)

// WIN.LOSE.TIE CONDITIONAL

    // const win= {
    //     scenario1 : (s1,s2,s3),
    //     scenario2 : (s4,s5,s6),
    //     scenario3 : (s7,s8,s9),
    //     scenario4 : (s1,s4,s7),
    //     scenario5 : (s2,s5,s3),
    //     scenario6 : (s3,s6,s9),
    //     scenario7 : (s1,s5,s9),
    //     scenario8 : (s3,s5,s7)
    // }

    // if (win === true  "X") {
    //     console.log("X wins! O is oooo so sad");
    // } else if (win === true) : 'O' {
    //     console.log("O wins! X is xxxceptionally distraught");
    // } else {
    //     console.log("Tie! Everyone's a winner!! kinda..")
    // }
   
   
   
   
   
   
    // On click toggle between Xs and Os on the gameboard
   let gameTiles = document.querySelectorAll('.gameTile')

   // Click event for tiles. Every tile is X unless already clicked, then 0
   for (let i=0; i < gameTiles.length; i++) {
       gameTiles[i].addEventListener('click', (event) => {
           playerTurns++
           // playerTurns= playerTurns + 1
            event.target.classList.add('noClick')
          
           // HOW TO CHECK IF CLASSLIST CONTAINS NO CLICK (NEXT STEP)
            // if no click then "O"
           //  let noMas = document.getElementsByClassName('noClick')
             //noMas === "O" ? "O" : "X"  
             
           // see what current letter is of game tile that was clicked
           //let tile = gameTiles[i].innerText
          
           // toggle between whichever letter is current vs x or 0
           let newPlayStatus = playerTurns % 2 === 0 ? "X" : "0"
           
           // set innerText of div to be new toggled letter
           gameTiles[i].innerText = newPlayStatus

       })
   }
   

// RESET BUTTON
    let gameTileList= document.getElementsByClassName('gameTile')
    let clear= document.getElementById('Reset')

    clear.addEventListener('click', () => {
        for (let v=0; v < gameTileList.length; v++) {
            let tile =gameTileList[v].innerText
            gameTileList[v].innerText = " ";
            gameTiles[v].classList.remove('noClick')
         }
    })



}) //Leave this for end of code so page loads with JS