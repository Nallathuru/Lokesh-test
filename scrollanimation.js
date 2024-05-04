// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // // Get form values
//     // var name = document.getElementById("name").value;
//     // var email = document.getElementById("email").value;
    
//     // // Do something with the form values (e.g., send them to a server)
//     // console.log("Name: " + name);
//     // console.log("Email: " + email);
    
//     // // You can also perform form validation here before submission
    
//     // // Optionally, reset the form
//     // this.reset();
//   });


  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // to prevent from the submission

    // to get the values of name and email
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var selectedGender = document.querySelector('input[name="gender"]:checked').value;
  
    // Log the selected value to the console
    console.log("Selected gender:", selectedGender);


    // to get these values in the console we need to log this

    console.log("Name:" +name);
    console.log("Email:" +email);
    console.log("date of birth:" +date);
    console.log("Male:" +male);
    console.log("female:" +female);
    console.log("Other:" +other);
    

    //to reset the form

    this.reset();

  });