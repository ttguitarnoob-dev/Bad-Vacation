
let scenes = [
    startingScene0 = {
        text: "You wake up in the hotel room that you booked for the night in the Florida Keys.  It's 5:00am, and something doesn't seem right.  The sunlight coming through the curtains is a strange color and it's a little too quiet...no traffic sounds outside the window.",
        options: ['Walk to the bathroom', 'Pick up your phone', 'Open the Curtains'],

    },
    openCurtain1 = {
        text: "You walk over to the main balcony doors, open the curtains and gasp in disbelief.  The palm trees lining the ocean are missing all their leaves, and black ooze is dripping down the trunks. The water is an unpleasant red color, and there are people lying on the beach and street, covered in the same black ooze and not moving at all. It's almost impossible to see further than 100 feet because the air is thick with a blackish fog that obscures nearly all of the sun's light.",
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
        options: ['Turn and walk down the hall the other way', '"Yes, I will keep an eye out!"']
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
        text: "You come around the corner and push the elevator call button from the 2nd floor.  Which floor should you go to?",
        options: ['First Floor', 'Third Floor'],
    },
    thirdFloor8 = {
        text: "You take the elevator to the third floor and look down the hallway when the doors open.  You see a sign with directions on the wall.\n<---Pool/Hot Tub/Sauna\nrooms 301-310--->",
        options: ['Go left', 'Go right']
    },
    leftPool9 = {
        text: "You turn left and walk towards the Swimming Pool area.  There is a single door leading into a large room containing a pool and hot tub.  You enter the room and look around.  There is an old man sitting on one of the beach chairs reading a book. On the other side of him is a set of doors for Men's and Women's locker rooms, and at the end of that same wall is a door that leads to a Sauna.",
        options: ["Look in the Men's locker room", "Look in the Women's locker room", "Talk to the old man", "Look in the Sauna"], 
    },
    sauna10 = {
        text: "You walk over to the Sauna door and push it open. You look around and at first it seems to be empty.  You are about to leave when you hear a soft squeak from behind the door.  You look around the door and see a little girl hiding behind it looking up at you in fear.",
        options: ['Try to talk to her', 'Offer her your hand', 'Go back into the pool room'],
    },
    poolAgain11 = {
        text: "You go back into the pool room. What do you do before checking the rooms on the other side of the hallway?",
        options: ["Look in the Men's locker room", "Look in the Women's locker room", "Talk to the man", "Check the 3rd floor rooms"],
    },
    roomsRight12 = {
        text: "You head over to the side of the hall containing all of the rooms.  It's peculiar because most of the doors are wide open, and as you walk by them it doesn't seem that anyone is in them.  Rooms 305 and 309 are the only ones closed.",
        options: ['Yell into each room', 'Knock on 305', 'Knock on 309'],
    },
    findDoctor13 = {
        text: 'You knock on room 309. After about 10 seconds the door opens a crack, held in place by the chain. You can see a wide eye peeking out from the inside.\nDR.HANOVER:\n"What do you want? Did Matthew send you? Oh that does not matter what matters is the anomalous situation outside, have you looked out there? My bet is that it is very unwise to go outside, at least without proper precautions, which is why I was hoping someone would come up here. Thing is, I was here for a biology conference and just happen to have some test equipment, and I would love to take a look at that black substance that the people outside have secreted. A vacationing diver brought me his oxygen tank and regulator, but problem is, my head is too small for the damn thing and it leaks right above my nose.  Hey, you want to take a shot at it?',
        options: ['"Not a good idea..."', '"Sure, what do you need me to do?"'],
    },
    gooMissionAccept14 = {
        text: 'DR. HANOVER\n"Ok thank you...so really all I need is a small sample of that unknown substance.  I will give you a sealed container to put it in, and make sure it seals completely because last thing we need is to expose that to the air in this hotel. Should be pretty simple, just take the elevator to the first floor and find the nearest specimen and take a sample.  Here, let me get you fitted up."\nHe hands you a small sample container and fits the diving gear to your back and face.  It fits perfectly and the fresh oxygen revitalizes you. Dr. Hanover pats your back and gives you a reassuring nod.',
        options: ['Continue to Elevator'],
    },
    elevatorAgain15 = {
        text: "You walk over to the elevator. Which floor should you go to?",
        options: ['First floor', 'Second floor'],
    },
    firstFloor16 = {
        text: "You ride the elevator down to the first floor, and the moment the doors open up you are glad you have a breathing apparatus.  The air is visibly thick, and you can smell a pungent odor even through the mask.  The lobby of the hotel is completely empty, and the front doors are a mangled mass of metal in the street outside.  You see a crumpled figure in the shadows of the dining room area, and several more bodies covered in ooze out near the beach. Any of these bodies should contain what Dr. Hanover was looking for.",
        options: ['Check the dining room specimen', 'Check the beach specimens'],
    },
    secondFloor17 = {
        text: "You ride the elevator to the Second floor, and see Matthew leaning against the frame of his room, talking to someone just inside. ",
        options: ['Take elevator to 1st floor', 'Speak to Matthew'],
    },
    diningRoom18 = {
        text: "You walk into the dining room towards the figure on the floor and notice that it does't appear to be covered in ooze like the rest.  That's pointless if you are trying to gather a sample of ooze. Maybe the ooze is underneath the body.",
        options: ['Flip the body over', 'Check the beach specimens'],
    },
    outsideBeach19 = {
        text: 'You walk up to the smashed front doors and cautiously poke your head out to look both ways. There is no sign of movement anywhere and it stirs your heart with an uncomfortable edge. You scan the edge of the beach for the closest collapsed person, and begin to walk towards it. As you get closer, you notice that the ooze came from the chest of each person that was consumed by it, so Dr. Hanover must be right about the air being unsafe to breath.  You nervously fidget with your breathing regulator as you walk.  Finally, you reach the closest person and kneel down to take a look.  It is a young man that appeared to be here to do some snorkeling.  He is laying flat on his back and the ooze covers him from head to toe, pooling all around his body.',
        options: ['Collect ooze sample','Return to hotel'], //collect will remove container from inventory and replace it with sample, which will populate an option when you return to hotel. If you don't collect, the button will not be there and you will have to return to scene 19
    },
    flipBody20 = {
        text: "You reach out and flip the body over, but when it's halfway flipped, its arms swing around and throw you 10 feet, landing on your back near the far wall of the dining room. Gasping, and quickly checking to see if your regulator is still secure, you sit up and see it staggering toward you.  Its chest is severely swollen and pulsating all over as the figure struggles for air. Its eyes have gone all black, and the pupils are so wide that the iris is torn in half.  As it gets closer, you can see the inside of the eyeballs are full of black ooze. You start to panic as it approaches you and picks up speed, but stand up to face it with a burst of adrenaline because there's nowhere to run.", //add options for phone and steel pipe here....also maybe if choose to shine flashlight, add option to mention that to the dr. after he finishes the test
        options: ['Punch the figure'],
    },
    shineLight21 = {
        text: "With a sudden inspiration, you look again at the creature's unnaturally large pupils. You quickly turn on your phone's flashlight and shine it directly in one of the eyes at close range. The ooze inside violently shoots out of the eye, and evaporates into a cloud of sparkling black air. You do the same to the other eye, and then the mouth.  As you hold the light on the ooze in its mouth, it shudders and convulses as the chest gets smaller and smaller.  Eventually, there is no more evaporating ooze, and the figure collapses on the floor, breathing heavily. You jump over it and run back to the door way and wait for it to move again.  After several minutes, it stops moving completely and appears lifeless. You slide down the wall to a sitting position and take a moment to breath and process what just happened.",
        options: ["Check the beach specimens"],
    },
    returnHotel22 = {
        text: 'You pocket the Sample Container again and make your way slowly back to the hotel. Your breathing is getting heavy despite the oxygen mask, and you push yourself to get there faster. You stagger into the lobby and press the elevator call button.  You are just about to lose breath when it opens.  You quickly press the 3rd floor button and gasp, ripping off the mask as the doors open into the fresh air inside the hallway.  You make your way to room 309 and Dr. Hanover welcomes you in with an expectant smile.',
        options: ['Return to the beach specimen'],
    },
    handOoze23 = {
        text: 'DR. HANOVER:\n"Ooooh I knew you could do it! Wow am I glad you survived. I honestly had no idea if that scuba suit would protect you or not. Well, only thing left to do is run these tests.  Here, put this on."\n\nHe takes the Ooze sample from you and hands you a gas mask to wear while he empties the ooze into a test vial. He gets fast to work, muttering to himself the whole time while you go and sit on his bed and wait for the tests to finish. You fall asleep for about 30 minutes and wake up to an excited shout.',
        options: ["What did you find?"],
    },
    leapOfFaith24 = {
        text: 'DR. HANOVER:\n"What I found....is something I did not expect to find. It was as simple as looking at the ooze through a microscope.  This ooze is comprised of nothing but antibodies.  Human antibodies.  It is not toxic in any way.  In fact, I took a leap of faith and ingested some.  My theory is that when those poor folks outside breathed the air, their bodies reacted so strongly to the unknown contaminants that their antibodies went crazy and the body could not contain the extra pressure.  I am guessing that I am now immune to the air outside. You want to take a leap of faith too?\n\nHe hands you a vial of black ooze with a grin.',
        options: ["DRINK THE BLACK OOZE!"],
    },
    finalChoice25 = {
        text: 'You slowly reach to grab the vial from Dr. Hanover, never breaking eye contact in an unsure gaze. He seems totally fine, and if you think about it, there is not much to lose in this situation.  You will die today either way if you refuse. You finally break your gaze and down the whole vial in one swallow. You feel slightly nauseous at first, but otherwise totally fine. Dr. Hanover rushes to the balcony doors and drags them open before you can protest.  All of the air in your room rushes out and is replaced by dark fog, but your breathing remains easy. The two of you exchange important glances and then agree that there is only one thing left to do.',
        options: ['Go enjoy your vacation', 'Spread the news to survivors'],
    },
    questPrep26 = {
        text: 'DR. HANOVER:\n"I think what we need to do is venture out and see if there are any other survivors first and foremost.  But after that, our main goal needs to alert the scientific community to what we have found and start mass producing antidotes from these antibodies. You should head North to the mainland and start there, probably in Miami.  I have a few contacts you can try, but you will probalby have more luck trying to find other groups of survivors. I am going to take my plane back to Cali and find someone from my University.  That will be the best place to start. I wish you the best of luck, my friend."\n\nDr. Hanover starts packing various things in a suitcase after shaking your hand.  You turn and make your way down to the second floor to gather what you will need from your room. You get all of the necessities together and take one last look around the room to make sure there is nothing else you will need.',
        options: ["Head to your rental car"],
    },
    findKiara27 = {
        text: 'Which room were they in again? 208? You go out into the hallway and knock on 208.  You hear an excited squeal from the other side of the door and know you got the correct one.  Hazel opens the door jumping up and down and Kiara smiles and welcomes you into the room.  You tell her all about the situation and your discoveries with Dr. Hanover.  After a long pause in which she processes all of this, she looks at you and calmly asks for a dose of the black ooze for her and the child. You agree and take a couple vials out of your backpack.  They grimace while drinking it, but look more or less satisfied with life after letting it settle for a minute. Kiara then sighs and asks if you would be willing to take them along on the journey to save the survivors of Florida.  She also mentions that after that is done she would like to find a way to get to Guatemala to make sure all of her family out there is ok.',
        options: ['"Yes I would love to bring you two!"', '"Sorry I dunno if there is room"'],
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
                    scenes[20].options.push('Shine phone light at it')
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
                if (scenes[20].options.includes('Hit it with the pipe!')){
                    return
                }else if(inventory.includes('Steel Pipe')){
                    scenes[20].options[1] = 'Shine light at it!'
                    scenes[20].options[2] = 'Hit it with the pipe!'
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
            }//3rd floor
        if (currentScene === scenes[8]) {
            if (boxClicked === 'btnid0'){
                setScene(9)
            } else if (boxClicked === 'btnid1'){
                setScene(12)
            }
            return
        }//pool area
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
             }//girl in sauna
             if (currentScene === scenes[10]) {
                    if (boxClicked === 'btnid0'){
                        sceneText.innerText = "When you speak, her eyes get wider and she shrinks further into the corner."
                    } else if (boxClicked === 'btnid1'){
                        sceneText.innerText = "You extend your hand and she gives a pitiful yelp and slaps it away."
                    } else if (boxClicked === 'btnid2'){
                        setScene(11)
                    } else if (boxClicked === 'btnid3'){
                        removeItem('Stuffed Pokemon')
                        if (scenes[26].options.includes('Look for Kiara and Hazel')){
                            return
                        }else {scenes[26].options.push('Look for Kiara and Hazel')
                        }
                        setScene(5)
                    } 
                    return
                 }//return girl to mom
                 if (currentScene === scenes[5]) {
                    if (boxClicked === 'btnid0'){
                        setScene(12)
                    } else if (boxClicked === 'btnid1'){
                        setScene(12)
                    }
                    return
                }//pool again
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
                 }//3rd floor room explore
                 if (currentScene === scenes[12]) {
                        if (boxClicked === 'btnid0'){
                            sceneText.innerText = "You walk down the hall yelling into each room to see if anyone answers. After you yell into room 307, the door to 309 opens and an angry looking head pokes out and yells at you to keep it down. He shuts the door with frustration."
                        } else if (boxClicked === 'btnid1'){
                            sceneText.innerText = "You knock on the door to room 305 and wait for about 30 seconds.  It seems nobody is in there."
                        } else if (boxClicked === 'btnid2'){
                            setScene(13)
                        }
                        return
                     }//find Dr.
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
                    }//accept mission
                    if (currentScene === scenes[14]) {
                        if (boxClicked === 'btnid0'){
                            setScene(15)
                        }
                        return
                    }//elevator again
                    if (currentScene === scenes[15]) {
                        if (boxClicked === 'btnid0'){
                            setScene(16)
                        } else if (boxClicked === 'btnid1'){
                            setScene(17)
                        }
                        return
                    }//second floor again
                    if (currentScene === scenes[17]) {
                        if (boxClicked === 'btnid0'){
                            setScene(16)
                        } else if (boxClicked === 'btnid1'){
                            sceneText.innerText = 'MATTHEW:\n"Well hey man, you look like you just spoke to the Dr. Did he convince you to go out there?  Collect a specimen huh...wonder what he wants with that...good luck out there.  I would join ya, but there are no more breathing apparatus in this entire hotel.  Funny because we are in a prime scuba diving locale, but what can you do. Just let me know if I can help in any other way."'
                        }
                        return
                    }//first floor
                    if (currentScene === scenes[16]) {
                        if (boxClicked === 'btnid0'){
                            setScene(18)
                        } else if (boxClicked === 'btnid1'){
                            setScene(19)
                        }
                        return
                    }//dining room
                    if (currentScene === scenes[18]) {
                        if (boxClicked === 'btnid0'){
                            setScene(20)
                        } else if (boxClicked === 'btnid1'){
                            setScene(19)
                        }
                        return
                    }//monster fight
                    if (currentScene === scenes[20]) {
                        if (boxClicked === 'btnid0'){
                            gameOver("You punch the figure hard in the face and it staggers back one step.  Its nose broke but that didn't hurt it at all, and it becomes enraged.  It charges at you again with arms swinging wildly in all directions.  One arm catches your breathing regulator and it gets ripped from your face. You try to run, but your breathing gets heavy and suddenly black ooze bursts from your lungs and you collapse in a heap.  GAME OVER")
                        } else if (boxClicked === 'btnid1'){
                            if (scenes[23].options.includes('Mention shining light at the ooze')){
                                return
                            } else {
                                scenes[23].options.push('Mention shining light at the ooze')
                            }
                            setScene(21)
                        } else if (boxClicked === 'btnid2'){
                            gameOver("You smack the figure hard in the face and it staggers back one step.  Its skull caved in but that didn't hurt it at all, and it becomes enraged.  It charges at you again with arms swinging wildly in all directions.  One arm catches your breathing regulator and it gets ripped from your face. You try to run, but your breathing gets heavy and suddenly black ooze bursts from your lungs and you collapse in a heap.  GAME OVER")
                        }

                        return
                    }//shine light
                    if (currentScene === scenes[21]) {
                        if (boxClicked === 'btnid0'){
                            setScene(19)
                        }
                        return
                    }//beach
                    if (currentScene === scenes[19]) {
                            if (boxClicked === 'btnid0'){
                                removeItem('Sample Container')
                                if (inventory.includes('Ooze Sample')){
                                    return
                                }else {inventory.push("Ooze Sample")
                                addItem('Ooze Sample')
                                if (scenes[22].options.includes('Hand him the Ooze Sample')){
                                return
                            }else if(inventory.includes('Ooze Sample')){
                                scenes[22].options.push('Hand him the Ooze Sample')
                               
                            }
                                }
                                setScene(22)
                            } else if (boxClicked === 'btnid1'){
                                setScene(22)
                            }
                            return
                        }//bring sample to dr.
                        if (currentScene === scenes[22]) {
                            if (boxClicked === 'btnid0'){
                                setScene(19)
                            } else if (boxClicked === 'btnid1'){
                                setScene(23)
                            }
                            return
                        }//finished experiments
                        if (currentScene === scenes[23]) {
                            if (boxClicked === 'btnid0'){
                                setScene(24)
                            } else if (boxClicked === 'btnid1'){
                                sceneText.innerText = 'DR. HANOVER:\n"Well there is something I never would have guessed in any kind of research.  You may be onto something there, though I have no guess as to why the lights in this room have no effect on it.  Maybe it has to be a certain type of LED.  Adding that to my list of research points, thank you!"\n\nHe glances back at his experiment table.'
                            }
                            return
                        }//leap of faith
                        if (currentScene === scenes[24]) {
                            if (boxClicked === 'btnid0'){
                                setScene(25)
                            }
                            return
                        }//final choice
                        if (currentScene === scenes[25]) {
                            if (boxClicked === 'btnid0'){
                                gameWin("You shake Dr. Hanover's hand and he thanks you for helping with everything. Grabbing your backpack, you head back to your room to get ready for the day, planning to sit by the beach.  You head to the spot you found yesterday, but it doesn't seem as beautiful without the sun, and the ooze-covered bodies everywhere so you head out after about 30 minutes. You decide that it might be a better idea to drive down to Key West and see if you can find a boat to Havana.  Maybe there's more sunshine there.")
                            } else if (boxClicked === 'btnid1'){
                                setScene(26)
                            }
                            return
                        }//final room check
                        if (currentScene === scenes[26]) {
                            if (boxClicked === 'btnid0'){
                                gameWin("You say one last goodbye to the room and head down to your rental car.  You wonder if this drive will be like all the apocalypse movies that you used to watch at your uncle's house. Chuckling to yourself, and then suddenly feeling the weight of the situation, you start the car and begin the long drive up Highway 1 to Miami. Hopefully you can find some survivors and help get the process for an antidote started.  You wonder if your vacation could have turned out any more interesting and crank up the New Orleans Jazz album that you picked up on your way out here.")
                            } else if (boxClicked === 'btnid1'){
                                setScene(27)
                            }
                            return
                        }//find kiara
                        if (currentScene === scenes[27]) {
                            if (boxClicked === 'btnid0'){
                                gameWin("You give Kiara and Hazel a friendly smile and tell them you would be glad to have them join you.  They begin packing and you help with what you can.  Once everything is good to go, you take them both by the hand and walk down to the rental car. You wonder aloud if this drive will be like all the apocalypse movies that you used to watch at your uncle's house. Chuckling with your friends, and then suddenly feeling the weight of the situation, you start the car and begin the long drive up Highway 1 to Miami. Hopefully you can find some survivors and help get the process for an antidote started.  You wonder if your vacation could have turned out any more interesting and crank up the New Orleans Jazz album that you picked up on your way out here.")
                            } else if (boxClicked === 'btnid1'){
                                sceneText.innerText = 'KIARA:\n"Are you sure? We take up almost no space and you might want the company right? I have no idea what else we will do if we have no purpose in our journey. Please take us"'
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
    var dead = document.createElement('h1')
    var text = document.createTextNode(message)
    dead.setAttribute('id', 'end-message')
    dead.appendChild(text)
    document.body.appendChild(dead)
}
function gameWin(message){
    var win = document.createElement('h1')
    var text = document.createTextNode(message)
    win.setAttribute('id', 'win-message')
    win.appendChild(text)
    document.body.appendChild(win)
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