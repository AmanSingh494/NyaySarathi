let submit = document.getElementById('signup-btn');

submit.addEventListener('click', function(){
    let myForm = document.getElementById('my-form');
    myForm.submit();
    console.log('Submitted Successfully! ');
    
})

let input = document.getElementById('password');

input.addEventListener("keypress", function(event){
    if (event.key==="Enter"){
        // prevents the defualt options.
        event.preventDefault();

        //click the button.
        document.getElementById("signup-btn").click();

    }

})