/* Program to print Happy Independence Day after 1 to 15 Count Down*/

// Initializing tags to variable
let div = document.getElementsByClassName("container");
let button = document.getElementById("button");
let count = document.getElementById('countdown');
count.style.display = 'none';
let temp = 10;

// Even Listener for Button Click
button.addEventListener('click',buttonClick);


function greeting10(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting9(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting8(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting7(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting6(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting5(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting4(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting3(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting2(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting1(callback){
    setTimeout(function(){
    count.textContent = `Countdown : ${temp--} `;
    callback();
    },1000);
}
function greeting0(callback){
    setTimeout(function(){
    count.textContent = `Happy Independence Day`;
    callback();
    },1000);
}

//Program for Button click execution
function buttonClick(){
button.style.display = 'none'; //To hide the button
count.style.display = ''; //To display the CountDown
greeting10(function(){
    console.log('greeting10'); //To test the execution of the function
    greeting9(function(){
        console.log('greeting09'); //To test the execution of the function
        greeting8(function(){
            console.log('greeting08'); //To test the execution of the function
            greeting7(function(){
                console.log('greeting07'); //To test the execution of the function
                greeting6(function(){
                    console.log('greeting06'); //To test the execution of the function
                    greeting5(function(){
                        console.log('greeting05'); //To test the execution of the function
                        greeting4(function(){
                            console.log('greeting04'); //To test the execution of the function
                            greeting3(function(){
                                console.log('greeting03'); //To test the execution of the function
                                greeting2(function(){
                                    console.log('greeting02'); //To test the execution of the function
                                    greeting1(function(){
                                        console.log('greeting01'); //To test the execution of the function
                                        greeting0(function(){
                                            console.log('Execution Completed'); //To test the execution of the function
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
};