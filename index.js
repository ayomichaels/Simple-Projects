const numOfDrumBtns = document.querySelectorAll('.drum').length;
const btns = document.querySelectorAll('.drum')


//BUTTON CLICKS
btns.forEach((btn)=>{
    // console.log(this);
    btn.addEventListener('click', (e)=>{
        let pad = e.currentTarget
        const padText = pad.innerHTML

        makeSound(padText)
        btnAnimation(padText)



        //CHANGE COLOR OF CLICKED BTN TEXT
        if (pad.innerHTML === 'd') {
            pad.style.color = 'white'
        }

        else if (pad.innerHTML === 'j') {
            pad.style.color = 'gold'
        }

        else {
            pad.style.color = 'purple'
        }
        
        // console.log(e.currentTarget);//logs the btn that was clicked
    })
    // btn.addEventListener('click', sound)
})


// btns.forEach((btn)=>{
//     btn.addEventListener('click', sound)
// })

// for (let i = 0; i < numOfDrumBtns; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {

//         console.log(this);//logs the  btn that was clicked

//         const audio = new Audio('sounds/tom-1.mp3')
//         audio.play()
//     }  )
// }

// function sound() {
//     const audio = new Audio('sounds/tom-1.mp3')
//         audio.play()
// }

//KEYDOWN EVENT LISTENER
document.addEventListener('keydown', function(e) {
    makeSound(e.key);
    btnAnimation(e.key)
})


//PLAY SOUND WITH KEYDOWN EVENT LISTENERS
function makeSound(arg) {
    switch (arg) {
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        
        case 'a':
                const tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
                break;
        
        case 's':
                const tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play()
                break;    
                
        case 'd':
                const tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play()
                break;

        case 'j':
                const snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;

        case 'k':
                const crash = new Audio('sounds/crash.mp3')
                crash.play()
                break;
        case 'l':
                const kick = new Audio('sounds/kick-bass.mp3')
                kick.play()
                break;
        default: console.log(arg);
    }
} 

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector('.'+ currentKey)

    activeBtn.classList.add('pressed')

    setTimeout (function(){
        activeBtn.classList.remove('pressed')

    }, 100)
}
