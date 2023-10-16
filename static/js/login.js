let submit = document.getElementById('login-btn');

submit.addEventListener('click', function(event){
    let myForm = document.getElementById('my-form');

    // prevent defualt submission
    event.preventDefault()

    myForm.submit();
    console.log('Submitted Successfully! ');
    
})

let input = document.getElementById('password');

input.addEventListener("keypress", function(event){
    if (event.key==="Enter"){
        // prevents the defualt options.
        event.preventDefault();

        //click the button.
        document.getElementById("login-btn").click();

    }

})