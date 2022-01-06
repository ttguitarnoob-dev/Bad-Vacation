

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
        text: 'KIARA:\n    "You have got to help me! I...I woke up to a crash outside my door, and noticed that my daughter was not in her bed.  I have been looking for an hour and there is no sign of her anywhere! I have no idea what else to do...I mean there is only so much space inside this hotel right?  I hope she stayed inside the hotel, because something seems off out there. Please will you let me know if you see her?  She is 6 years old and wearing a Pokemon shirt."',
        options: ['Turn and walk down the hall the other way', '"Yes, I will keep an eye out!"']//if you choose yes, she'll give you a stuffed pokemon, which will populate an option for the scene where you find the child
    },
    stupid5 = {
        text: 'The childs eyes go wide and she lets out an excited shriek when she sees the Stuffed Pokemon.\nHAZEL:\n"Charmy!! My mom gave that to you didnt she? I wanted to go back, but I lost the door to the stairs and the man by the elevator told me not to use it, but I didnt want to stay in the room with those goo monsters looking in the window."\n\nHer eyes get scared again, and she grabs the Stuffed Pokemon from you. You extend your hand and she takes it.  You take her back down to the 2nd floor, but her mom is no longer in the hallway.  Hazel runs over to room 208 and knocks. Kiara opens the door and bursts into happy tears. She thanks you profusely and they retreat into the room. That felt good! You remember that you have yet to explore the rooms on the 3rd floor.',
        options: ['Head back to the 3rd floor']
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
        text: "You take the elevator to the third floor and look down the hallway when the doors open.  You see a sign with directions on the wall.\n<---Pool/Hot Tub/Sauna\nrooms 301-310--->",
        options: ['Go left', 'Go right']
    },
    leftPool9 = {
        text: "You turn left and walk towards the Swimming Pool area.  There is a single door leading into a large room containing a pool and hot tub.  You enter the room and look around.  There is an old man sitting on one of the beach chairs reading a book. On the other side of him is a set of doors for Men's and Women's locker rooms, and at the end of that same wall is a door that leads to a Sauna.",
        options: ["Look in the Men's locker room", "Look in the Women's locker room", "Talk to the old man", "Look in the Sauna"],//only sauna will be a new scene.  Hazel is inside. 
    },
    sauna10 = {
        text: "You walk over to the Sauna door and push it open. You look around and at first it seems to be empty.  You are about to leave when you hear a soft squeak from behind the door.  You look around the door and see a little girl hiding behind it looking up at you in fear.",
        options: ['Try to talk to her', 'Offer her your hand', 'Go back into the pool room'], //this will populate with an option to give her the pokemon toy if you accepted the offer from Kiara
    },
    poolAgain11 = {
        text: "You go back into the pool room. What do you do before checking the rooms on the other side of the hallway?",
        options: ["Look in the Men's locker room", "Look in the Women's locker room", "Talk to the man", "Check the 3rd floor rooms"],
    },
    roomsRight12 = {
        text: "You head over to the side of the hall containing all of the rooms.  It's peculiar because most of the doors are wide open, and as you walk by them it doesn't seem that anyone is in them.  Rooms 305 and 309 are the only ones closed.",
        options: ['Yell into each room', 'Knock on 305', 'Knock on 309'], //only 309 has new scene.  yell causes dr to peek out of 309 and then close the door again.  knock on 305 is just nobody answered.
    },
    findDoctor13 = {
        text: 'You knock on room 309. After about 10 seconds the door opens a crack, held in place by the chain. You can see a wide eye peeking out from the inside.\nDR.HANOVER:\n"What do you want? Did Matthew send you? Oh that does not matter what matters is the anomalous situation outside, have you looked out there? My bet is that it is very unwise to go outside, at least without proper precautions, which is why I was hoping someone would come up here. Thing is, I was here for a biology conference and just happen to have some test equipment, and I would love to take a look at that black substance that the people outside have secreted. A vacationing diver brought me his oxygen tank and regulator, but problem is, my head is too small for the damn thing and it leaks right above my nose.  Hey, you want to take a shot at it?',
        options: ['"Not a good idea..."', '"Sure, what do you need me to do?"'], //only sure makes new scene. no makes dr mad and give you no choice but to agree
    },
    gooMissionAccept14 = {
        text: 'DR. HANOVER\n"Ok thank you...so really all I need is a small sample of that unknown substance.  I will give you a sealed container to put it in, and make sure it seals completely because last thing we need is to expose that to the air in this hotel. Should be pretty simple, just take the elevator to the first floor and find the nearest specimen and take a sample.  Here, let me get you fitted up."\nHe hands you a small sample container and fits the diving gear to your back and face.  It fits perfectly and the fresh oxygen revitalizes you. Dr. Hanover pats your back and gives you a reassuring nod.',
        options: ['Continue to Elevator'],
    },
    firstFloor15 = {
        text: "",
        options: [],
    },
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
    // console.log(currentScene)
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
                        sceneText.innerText = 'KIARA:\n"Thank you so much!  Here take this.  She will trust you if you give her this."\n\nShe hands you a stuffed Pokemon character and you think "Wow this girl must love Pokemon."'
                        }
                    }
                    if (scenes[10].options.includes('Show her the Stuffed Pokemon')){
                        return
                    }else if(inventory.includes('Stuffed Pokemon')){
                        scenes[10].options.push('Show her the Stuffed Pokemon')
                    }
                    return
                }
                //walk away from woman
            if (currentScene === scenes[100]) {
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
                    sceneText.innerText = 'You reach to push open the door, but right as you do, it swings open revealing a very tired looking man in his mid 40s. You ask him if he knows what is going on and he shakes his head slowly side to side.\nMATTHEW:\n"We have yet to reach a solid conclusion, but what we do know is that it aint safe to go outside. I did hear that someone knows of a Doctor staying on the 3rd floor. I think it was room 309. We were about to send someone up there...hey would you mind going up there and seeing if you can find him? Here take this, we also heard that some of the people are gettin a little crazy. Oh! And make sure you do NOT take the elevator to the 1st floor.  The front door got breached and the air aint breathable."\n He hands you a snapped steel pipe and goes back inside the room.'
                }
                return
        } //elevator
            if (currentScene === scenes[7]) {
                if (boxClicked === 'btnid0'){
                    gameOver("You ride the elevator down to the first floor.  When the doors open, all of the air gets sucked out of the elevator. Slowly, it becomes difficult to breath and then suddenly black ooze bursts out of your lungs and you collapse in a heap.  GAME OVER")
                } else if (boxClicked === 'btnid1'){
                    setScene(8)
                }
                return
        }
        if (currentScene === scenes[8]) {
            if (boxClicked === 'btnid0'){
                setScene(9)
            } else if (boxClicked === 'btnid1'){
                setScene(12)
            }
            return
        }
        if (currentScene === scenes[9]) {
                if (boxClicked === 'btnid0'){
                    sceneText.innerText = "You enter the Men's locker room and look around, but there is nobody in there so you go back out to the main pool room."
                } else if (boxClicked === 'btnid1'){
                    sceneText.innerText = "You open the door to the Women's locker room, and there are two women doing their hair in the mirror.  They look at you shocked and you awkwardly shut the door and run away without saying anything."
                } else if (boxClicked === 'btnid2'){
                    sceneText.innerText = 'You walk over to the old man and he looks up from his book\nOLD MAN:\n"Hey there, kid, you come for a swim or just lookin around? Me? I took the chance to come sit in the hot tub while their aint no kids around, though I did see one run into the sauna an hour or so ago.  I dont do too well with all the noise they cause you understand. Seem awful quiet though, even considerin aint nobody around. Might wanna head to the coffee shop down the street later.  Well I gotta finish this chapter, you have a great mornin young man."\nyou take a quick second to warn him not to go outside and he nods in appreciation. He looks back at his book and you turn to walk away.'
                } else if (boxClicked === 'btnid3'){
                    setScene(10)
                } 
                return
             }
             if (currentScene === scenes[10]) {
                    if (boxClicked === 'btnid0'){
                        sceneText.innerText = "When you speak, her eyes get wider and she shrinks further into the corner."
                    } else if (boxClicked === 'btnid1'){
                        sceneText.innerText = "You extend your hand and she gives a pitiful yelp and slaps it away."
                    } else if (boxClicked === 'btnid2'){
                        setScene(11)
                    } else if (boxClicked === 'btnid3'){
                        removeItem('Stuffed Pokemon')
                        setScene(5)
                    } 
                    return
                 }
                 if (currentScene === scenes[5]) {
                    if (boxClicked === 'btnid0'){
                        setScene(12)
                    } else if (boxClicked === 'btnid1'){
                        setScene(12)
                    }
                    return
                }
                if (currentScene === scenes[11]) {
                    if (boxClicked === 'btnid0'){
                        sceneText.innerText = "You enter the Men's locker room and look around, but there is nobody in there so you go back out to the main pool room."
                    } else if (boxClicked === 'btnid1'){
                        sceneText.innerText = "You open the door to the Women's locker room, and there are two women doing their hair in the mirror.  They look at you shocked and you awkwardly shut the door and run away without saying anything."
                    } else if (boxClicked === 'btnid2'){
                        sceneText.innerText = 'You walk over to the old man and he looks up from his book\nOLD MAN:\n"Hey there, kid, you come for a swim or just lookin around? Me? I took the chance to come sit in the hot tub while their aint no kids around, though I did see one run into the sauna an hour or so ago.  I dont do too well with all the noise they cause you understand. Seem awful quiet though, even considerin aint nobody around. Might wanna head to the coffee shop down the street later.  Well I gotta finish this chapter, you have a great mornin young man."\nyou take a quick second to warn him not to go outside and he nods in appreciation. He looks back at his book and you turn to walk away.'
                    } else if (boxClicked === 'btnid3'){
                        setScene(12)
                    } 
                    return
                 }
                 if (currentScene === scenes[12]) {
                        if (boxClicked === 'btnid0'){
                            sceneText.innerText = "You walk down the hall yelling into each room to see if anyone answers. After you yell into room 307, the door to 309 opens and an angry looking head pokes out and yells at you to keep it down. He shuts the door with frustration."
                        } else if (boxClicked === 'btnid1'){
                            sceneText.innerText = "You knock on the door to room 305 and wait for about 30 seconds.  It seems nobody is in there."
                        } else if (boxClicked === 'btnid2'){
                            setScene(13)
                        }
                        return
                     }
                     if (currentScene === scenes[13]) {
                        if (boxClicked === 'btnid0'){
                            sceneText.innerText = 'DR. HANOVER:\n"Look here, bud. You think I wouldnt go right now if this regulator fit my face? Grow some balls man, I know you got a sense that the situation out there is dangerous, so why not try to help someone? You gonna do this?"'
                        } else if (boxClicked === 'btnid1'){
                            if (inventory.includes('Sample Container')){
                                return
                            }else {inventory.push("Sample Container")
                            addItem('Sample Container')
                            }
                            setScene(14)
                        }
                        return
                    }
                    if (currentScene === scenes[14]) {
                        if (boxClicked === 'btnid0'){
                            setScene(15)
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
//     return
//  }
//add option to scene on item pickup
// if (inventory.includes('Phone')){
//     console.log(currentScene, 'helllooooo')
//     scenes[1].options.push('Throw your phone in the trash')
// }