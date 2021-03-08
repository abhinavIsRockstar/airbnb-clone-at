    let main_container = document.getElementById("main-container")
    let main_footer = document.getElementById("main-footer");
    let nav_bar = document.querySelector(".nav-bar")

    let showMenu = false

    // nav_bar.addEventListener('click', navToggle)

    function navToggle () {

        console.log("inside toggle")

        if(!showMenu){

            console.log('inside if')
           
            document.getElementById("main-footer").style.display = "none"
            document.getElementById('unique_places').style.display = "none"
            document.getElementById('explore_airbnb').style.display = "none"
            document.getElementById('airbnb_adventures').style.display = "none"
            document.getElementById('terms_and_condition').style.display = "none"
            document.getElementById('booking-form').style.display = "none"
            document.getElementById('nav_bar').style.display = "none"
            
            // document.querySelectorAll('.unique-places').style.display = "none"
            // document.querySelectorAll('.unique-places').style.display = "none"

            document.getElementById("navigation-container").style.display = "block"            
            showMenu = true

        }

        else {

            console.log('inside else')

            // document.getElementById("main-footer").style.display = "block"
            // main_container.style.display = "block"

            document.getElementById("navigation-container").style.display = "none"
            document.getElementById("main-footer").style.display = "block"
            document.getElementById('unique_places').style.display = "block"
            document.getElementById('explore_airbnb').style.display = "block"
            document.getElementById('airbnb_adventures').style.display = "block"
            document.getElementById('terms_and_condition').style.display = "block"
            document.getElementById('booking-form').style.display = "block"
            document.getElementById('nav_bar').style.display = "flex"
           

            showMenu = false

        }
        
   
    
  
  // main_container.style.display = "none" 
   
 //  main_footer.style.display = "none" 
// nav_bar.style.display = "block"
//    let nav_toggle = document.getElementById("navigation-toggle");
//    nav_toggle.style.display = "block";

//    nav_toggle.style.animationName = "bottom"
//    nav_toggle.style.animationDuration = "1s"

}