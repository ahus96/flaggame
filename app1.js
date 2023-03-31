const country = document.querySelector('#country')
const flagimage = document.querySelector('#flagimage')
const play = document.querySelector('#Play')
const next = document.querySelector('#Next')
const score = document.querySelector('#score')


let scores = 0;


const rand = () => {

    const textArray = [
        { code: 'AD' },
        { code: 'AE' },
        { code: 'US' },
        { code: 'UA' },
        { code: 'ET' },
        { code: 'EG' },
        { code: 'GB' },
        { code: 'IT' },
        { code: 'KW' },
        { code: 'MA' },
    ]

    const i = Math.floor(Math.random() * textArray.length);
    const flags = { Image: `https://flagsapi.com/${textArray[i].code}/flat/64.png` }

    return flags.Image
}



// var elem = document.getElementById('some_div');





// function timerId() {
//     var re = setInterval(countdown, 1000);

//     return re;
// }

// var re = setInterval(countdown, 1000);
var timeLeft = 30;




function countdown() {



    if (timeLeft === -1) {
        var highestTime = setTimeout(";");
        for (var i = 0; i < highestTime; i++) {
            clearTimeout(i);
        }
        console.log("Hi")
        youscored();

        document.querySelector('#timers').remove()
    } else {
        document.querySelector('label').innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }


}

play.addEventListener('click', function (e) {
    e.preventDefault(e)

    const timers = document.createElement('label')
    timers.setAttribute("id", "timers");
    // timers.innerText = `${timeLeft} + ' seconds remaining';`
    div.appendChild(timers)

    // setTimeout(myFunction, 2000)

    answer();

    next.disabled = true
})


const answer = () => {
    setInterval(countdown, 1000);

    countdown();


    const img = document.createElement('img')
    img.src = rand()
    flagimage.append(img)
    play.disabled = true;
    next.disable = true
}




const youscored = () => {
    try {

        confetti();


        document.querySelector('img').remove()
        const scored = document.createElement('label')
        scored.setAttribute("id", "yourscore");
        scored.innerText = `Well done you scored ${score.innerText} /10`
        flagimage.appendChild(scored)
        country.disabled = true;


        const playagain = document.createElement('button')
        playagain.setAttribute("id", "playagain");
        playagain.setAttribute("class", "btn btn-outline-secondary");
        playagain.innerText = 'play again'
        flagimage.append(playagain)

        playagain.addEventListener("click", function () {

            location.reload();
            return false;

            // playagain.remove()
            // scored.remove()
            // play.disabled = false;
            // score.innerText = 0;
            // flagimage.remove()
            // country.innerText = ""
            // country.disabled = false;

        });
    } catch (error) {

    }




}



country.addEventListener('input', function (e) {
    e.preventDefault(e)

    const src = document.querySelector('img').src


    const a1 = `https://flagsapi.com/AE/flat/64.png`
    const a2 = `https://flagsapi.com/AD/flat/64.png`
    const a3 = `https://flagsapi.com/US/flat/64.png`
    const a4 = `https://flagsapi.com/UA/flat/64.png`
    const a5 = `https://flagsapi.com/ET/flat/64.png`
    const a6 = `https://flagsapi.com/EG/flat/64.png`
    const a7 = `https://flagsapi.com/GB/flat/64.png`
    const a8 = `https://flagsapi.com/IT/flat/64.png`
    const a9 = `https://flagsapi.com/KW/flat/64.png`
    const a10 = `https://flagsapi.com/MA/flat/64.png`


    if (src === a1 && this.value === 'UAE' || src === a1 && this.value === 'UAE'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;

    } else if (src === a2 && this.value === 'Andorra' || src === a2 && this.value === 'ANDORRA'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;

    } else if (src === a3 && this.value == 'USA' || src === a3 && this.value === 'USA'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a4 && this.value == 'Ukraine' || src === a4 && this.value === 'UKRAINE'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a5 && this.value == 'Ethiopia' || src === a5 && this.value === 'ETHIOPIA'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a6 && this.value == 'Egypt' || src === a6 && this.value === 'EGYPT'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a7 && this.value == 'Britain' || src === a7 && this.value === 'BRITAIN'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a8 && this.value == 'Italy' || src === a8 && this.value === 'ITALY'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a9 && this.value == 'Kuwait' || src === a9 && this.value === 'KUWAIT'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    } else if (src === a10 && this.value == 'Morroco' || src === a10 && this.value === 'MORROCO'.toLowerCase()) {
        score.innerText = scores += 1
        next.disabled = false;
    }

})

next.addEventListener('click', function (e) {
    e.preventDefault(e)
    answer();

    document.querySelector("img").remove()
    country.value = ""

    next.disabled = true;

})


// function myFunction() {
//     youscored();
//     confetti();
// }

