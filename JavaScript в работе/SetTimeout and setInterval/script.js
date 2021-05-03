const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    


    function frame(){
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }

    // function frameTop(){
    //     const idTop = setInterval(frameTop, 10);
    //     if(pos == 0){
    //         clearInterval(idTop);
    //         frameBottom();
    //     }else {
    //         pos--;
    //         elem.style.top = pos + "px";
    //     }
    // }
    // function frameBottom(){
    //     const idBottom = setInterval(frameBottom, 10);
    //     if(pos == 300){
    //         clearInterval(idBottom);
    //     }else {
    //         pos++;
    //         elem.style.left = pos + "px";
    //         elem.style.bottom = pos + "px";
    //     }
    // }
}

btn.addEventListener('click', myAnimation);

// clearInterval(timerId);

// function logger (){
//     if(i === 3){
//         clearInterval(timerId);
//     }
//     console.log('hello');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);