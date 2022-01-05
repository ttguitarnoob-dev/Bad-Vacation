

const scenes = [
    startingScene0 = {
        text: 'You wake up in your bedroom in the middle of the night.',
        options: ['Walk to the bathroom', 'Pick up your phone', 'Pet the kitty'],

    },
    bathroomScene1 = {
        text: "You enter the bathroom and discover a wonderful smell",
        options: ['Ignore the smell and sit on the toilet', 'Walk to the kitchen'],
    },
    kitchenScene2 = {
        text: "You enter the kitchen and discover that you have literally nothing for breakfast.  How does this happen every day? You seriously go to the store to buy milk and cereal every single morning but for some reason it's never there the next morning",
        options: ['Eat a head of lettuce', 'drink water from the faucet']
    }
]

const optionsButtons = document.getElementById("choice-btns")
const sceneText = document.getElementById("text")
let currentScene = scenes[0]
const restart = document.getElementById('restart-button')

restart.addEventListener('click', function(){
    startGame()
    window.location.reload()
})
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
            // console.log(boxClicked)
            if (currentScene === scenes[0]) {
                if (boxClicked === 'btnid0'){
                    setScene(1)
                } else if (boxClicked === 'btnid1'){
                    console.log('ringring')
                } else if (boxClicked === 'btnid2'){
                    console.log('purrpurrpurrCHOMP')
                }
                return 
            }
            if (currentScene === scenes[1]) {
                if (boxClicked === 'btnid0'){
                    gameOver('you pooped so hard that your liver came out and you died')
                } else if (boxClicked === 'btnid1'){
                    setScene(2)
                } else if (boxClicked === 'btnid2'){
                    console.log('purrpurrpurrCHOMP')
                }
                return
            }
            if (currentScene === scenes[2]) {
                if (boxClicked === 'btnid0'){
                    gameOver('That lettuce is so rotted that you died')
                } else if (boxClicked === 'btnid1'){
                    gameWin('Your house just happened to have magic water being pumped into it at this moment.  You become a superhero and join the Avengers')
                } else if (boxClicked === 'btnid2'){
                    console.log('purrpurrpurrCHOMP')
                }
                return
            }


            //end of the line

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

startGame()