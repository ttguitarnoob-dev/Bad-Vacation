

const scenes = [
    startingScene = {
        text: 'You wake up in your bedroom in the middle of the night.',
        options: ['Walk to the bathroom', 'Pick up your phone', 'Pet the kitty'],

    },
    bathroomScene = {
        text: "You enter the bathroom and discover a wonderful smell",
        options: ['Ignore the smell and sit on the toilet', 'Walk back to the bedroom'],
    }
]

const optionsButtons = document.getElementById("choice-btns")
const sceneText = document.getElementById("text")
var currentScene = scenes[0]

function startGame(){
    // currentScene = scenes[0]
    setScene(0)
}

function setScene(scene){
    currentScene = scenes[scene]
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
            if (currentScene = scenes[0]){
                // console.log('scene 0 confirmed!!')
                if (boxClicked === 'btnid0'){
                setScene(1)
            }else if (boxClicked === 'btnid2'){
                console.log('purrpurrpurrCHOMP')
            }
        }
            
}




startGame()