

let scenes = [
    startingScene0 = {
        text: "You wake up in the hotel room that you booked for the night in the Florida Keys.  It's 5:00am, and something doesn't seem right.  The sunlight coming through the curtains is a strange color and it's a little too quiet...no traffic sounds outside the window.",
        options: ['Walk to the bathroom', 'Pick up your phone', 'Open the Curtains'],

    },
    openCurtain1 = {
        text: "You walk over to the main balcony doors, open the curtains and gasp in disbelief.  The palm trees lining the ocean are missing all their leaves, and black ooze is dripping down the trunks. The water is an unpleasant red color, and there are people lying on the beach and street, covered in the same black ooze and not moving at all. ",
        options: ['Open the balcony doors', 'Exit your room to search for more information'],
    },
    exitRoom2 = {
        text: "You walk to the front door, open it and peer out into the hallway.  The air seems stale and unfulfilling to breath.  When you look to the left you can hear a distant chatter of multiple voices coming from one of the rooms.  When you look to the right you see a young woman at the end of the hallway sitting against the wall with her hands covering her face.  She appears to be crying.",
        options: ['Go left', 'Go right']
    },
    //if you choose to go right, and eventually help the woman, a new button will appear later in the story with the option to go to a different scene where you will find the woman and the child and continue the story from there
    rightWoman3 = {
        text: "You turn right and walk down the hall towards the woman.  She is definitely crying. You walk up close to her, and she looks up to meet your eyes as you approach.  She is pretty and her face is stained with the evidence of tears both recent and previous.",
        options: ['Talk to her', 'Walk back down the hall the other way']
    },
    talkWoman4 = {
        text: 'Kiara:\n    "You have got to help me! I...I woke up to a crash outside my door, and noticed that my daughter was not in her bed.  I have been looking for an hour and there is no sign of her anywhere! I have no idea what else to do...I mean there is only so much space inside this hotel right?  I hope she stayed inside the hotel, because something seems off out there. Please will you let me know if you see her?  She is 6 years old and wearing a Pokemon shirt."',
        options: ['Turn and walk down the hall the other way', '"Yes, I will keep an eye out!"']//if you choose yes, she'll give you a stuffed pokemon, which will populate an option for the scene where you find the child
    },
    stupid5 = {
        text: "As you turn to walk away from the woman, you see someone walk inside a door down the hallway.  You hurry to catch up with them and get to the door, which is still cracked.",
        options: ['Take a deep breath', 'Continue']
    },
    leftVoices6 = {
        text: "You walk down the hall towards the voices that you heard.  They get louder as you get further down the hall, and eventually you see one of the rooms has a cracked door.  The voices are definitely coming from in there. ",
        options: ['Continue down the hall to the elevator', 'Open the door']
    },
    elevator7 = {
        text:"You come around the corner and push the elevator call button from the 2nd floor.  Which floor should you go to?",
        options: ['First Floor', 'Third Floor'],
    },
    thirdFloor8 = {
        text: "",
        options: []
    }
    //end of array
]

const optionsButtons = document.getElementById("choice-btns")
const sceneText = document.getElementById("text")
let currentScene = scenes[0]
const restart = document.getElementById('restart-button')
let inventory = []
let items = document.getElementById('inventory')


function startGame(){
    // currentScene = scenes[0]
    setScene(0)
}

function setScene(scene){
    currentScene = scenes[scene]
    console.log(currentScene)
    sceneText.innerText = currentScene.text
    while (optionsButtons.firstChild){
        optionsButtons.removeChild(optionsButtons.firstChild)
    }
    for (i=0; i<currentScene.options.length; i++){
        let options = currentScene.options
        const button = document.createElement('button')
        button.innerText = options[i]
        button.classList.add('button')
        button.setAttribute('id', 'btnid'+i)
        optionsButtons.appendChild(button)
        button.addEventListener('click', function(e){
            choiceMade(e)
            
        })
           
        }
    }
   


function choiceMade(e){
    let boxClicked = e.currentTarget.id
            // startingScene
            if (currentScene === scenes[0]) {
                if (boxClicked === 'btnid0'){
                    sceneText.innerText = "You walk to the bathroom and take a pee, which is relieving, but everything in the bathroom seems normal.  You can't shake the thought that something feels weird.  You wonder what's going on outside."
                } else if (boxClicked === 'btnid1'){
                    if (inventory.includes('Phone')){
                        return
                    }else {inventory.push("Phone")
                    addItem('Phone')
                    }
                } else if (boxClicked === 'btnid2'){
                    setScene(1)
                } else if (boxClicked === 'btnid3'){
                    removeItem('Phone')
                }
                if (scenes[1].options.includes('Call 911 now!')){
                    return
                }else if(inventory.includes('Phone')){
                    scenes[1].options.push('Call 911 now!')
                }
                return 
            }
            //open curtain
            if (currentScene === scenes[1]) {
                if (boxClicked === 'btnid0'){
                    gameOver('You slide the balcony door open, and feel all of the air rush out of the hotel room.  Slowly, a haze starts building up in the room, and you find it hard to breath.  Suddenly black ooze bursts out of your lungs and you fall over in a heap.  GAME OVER')
                } else if (boxClicked === 'btnid1'){
                    setScene(2)
                } else if (boxClicked === 'btnid2'){
                    sceneText.innerText = "You dial 911, but immediately get a message that the line is disconnected.  That's not a good sign. You wonder if anyone else in the hotel is aware of what's going on. "
                }
                return
            }
            //exit room and look left and right
            if (currentScene === scenes[2]) {
                if (boxClicked === 'btnid0'){
                    setScene(6)
                } else if (boxClicked === 'btnid1'){
                    setScene(3)
                }
                return
            }
            //walk towards woman
            if (currentScene === scenes[3]) {
                    if (boxClicked === 'btnid0'){
                        setScene(4)
                    } else if (boxClicked === 'btnid1'){
                        setScene(6)
                    }
                    return
                }
            //talk to woman
            if (currentScene === scenes[4]) {
                    if (boxClicked === 'btnid0'){
                        setScene(6)
                    } else if (boxClicked === 'btnid1'){
                        if (inventory.includes('Stuffed Pokemon')){
                            return
                        }else {inventory.push('Stuffed Pokemon')
                        addItem('Stuffed Pokemon')
                        sceneText.innerText = 'Kiara:\n"Thank you so much!  Here take this.  She will trust you if you give her this."\n\nShe hands you a stuffed Pokemon character and you think "Wow this girl must love Pokemon."'
                        }
                    }
                    return
                }
                //walk away from woman
            if (currentScene === scenes[5]) {
                if (boxClicked === 'btnid0'){
                    return
                }else if (boxClicked === 'btnid1'){
                    setScene(6)
                        }
            }
            //walk towards voices 
            if (currentScene === scenes[6]) {
                if (boxClicked === 'btnid0'){
                    setScene(7)
                } else if (boxClicked === 'btnid1'){
                    if (inventory.includes('Steel Pipe')){
                        return
                    }else {inventory.push('Steel Pipe')
                    addItem('Steel Pipe')
                    
                    }
                    sceneText.innerText = 'You reach to push open the door, but right as you do, it swings open revealing a very tired looking man in his mid 40s. You ask him if he knows what is going on and he shakes his head slowly side to side.\nMATTHEW:\n"We have yet to reach a solid conclusion, but what we do know is that it aint safe to go outside. I did hear that someone knows of a Doctor staying on the 3rd floor. We were about to send someone up there...hey would you mind going up there and seeing if you can find him? Here take this, we also heard that some of the people are gettin a little crazy. Oh! And make sure you do NOT take the elevator to the 1st floor.  The front door got breached and the air aint breathable."\n He hands you a snapped steel pipe and goes back inside the room.'
                }
                return
        } 
            if (currentScene === scenes[7]) {
                if (boxClicked === 'btnid0'){
                    gameOver("You ride the elevator down to the first floor.  When the doors open, all of the air gets sucked out of the elevator. Slowly, it becomes difficult to breath and then suddenly black ooze bursts out of your lungs and you collapse in a heap.  GAME OVER")
                } else if (boxClicked === 'btnid1'){
                    setScene(8)
                }
                return
        }
            //end of the line

}
//maybe use li.remove like from the removeItem function to remove every li item of class "inventoryItems" before repopulating the list with the array items with the forEach method.  That would require assigning the class to every item picked up. Just a smoother way of automating everything 
function addItem(item){
    let li = document.createElement('li')
    li.innerText = item
    li.setAttribute('id', item)
    items.appendChild(li)

    // if (items.length >= 1){
    // while (items.firstChild){
    //     items.removeChild(optionsButtons.firstChild)
    // }
    // }
    // inventory.forEach((item)=>{
    //     let li = document.createElement('li')
    //     li.innerText = item
    //     items.appendChild(li)
    // })
}

function removeItem(item){
    let li = document.getElementById(item)
    li.remove()
    inventory = inventory.filter(e => e !== item)
}

function gameOver(message){
    box = document.getElementById('game-over')
    box.style.display = "flex"
    box.innerText = message
}
function gameWin(message){
    box = document.getElementById('game-win')
    box.style.display = "flex"
    box.innerText = message
}

restart.addEventListener('click', function(){
    startGame()
    window.location.reload()
})

startGame()

//templates

//4 button scene
// if (currentScene === scenes[0]) {
//     if (boxClicked === 'btnid0'){
        
//     } else if (boxClicked === 'btnid1'){
        
//     } else if (boxClicked === 'btnid2'){
        
//     } else if (boxClicked === 'btnid3'){
        
//     } 
//  }
//add option to scene on item pickup
// if (inventory.includes('Phone')){
//     console.log(currentScene, 'helllooooo')
//     scenes[1].options.push('Throw your phone in the trash')
// }