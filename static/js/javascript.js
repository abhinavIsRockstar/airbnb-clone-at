//document.getElementById("guests").addEventListener("click", myFunction);
let adultValue = 0;
let childrenValue = 0;
let infantsvalue = 0;
let total_guest_value = 0
let total_guest_limit = 16

let adult_placeholder = "Guests"
let children_placeholder = "Guests"
let infants_placeholder = "Infants"

let button_right_adults = document.getElementById("button_right")
let button_right_children = document.getElementById("button_right_children")
let button_left_adults = document.getElementById("button_left_adults")
let button_left_children = document.getElementById("button_left_children")
let button_left_infants = document.getElementById("button_left_infants")
let button_right_infants = document.getElementById("button_right_infants")

let button_close_help = document.getElementById("close-button-help")
let button_close_signUp = document.getElementById("close-button-signup")
let button_close_logIn = document.getElementById("close-button")
let button_close_languagePopUp = document.getElementById("close-button-language")
let button_close_currencyPopUp = document.getElementById("currency-header")
let body = document.getElementById('body-container')





console.log("inside javascript.js");
// document.getElementById("guests").addEventListener("click", myFunction);
let bool = true;


function myFunction () {

let guest_container = document.getElementById("container-guest"); 

    if(bool == true) {
    // console.log("inside if");       
    guest_container.style.display = "block";
    bool = false;
    }

    else {
    // console.log("inside else")ccc
    guest_container.style.display = "none";
    bool = true;
    }

}


function buttonPlus ( name ) {
      
        // console.log("name", name)
        // console.log("inside buttonPlus");

        if (name == "button-adults" ) {

            if( adultValue <  16) {

            button_left_adults.style.cursor = "pointer"
            button_left_adults.style.background = "cadetblue"
            // console.log("inside buttonPlus if");
            let button_adults = document.getElementById("guest-button-adults");
           
         //   console.log(adult_placeholder)
            button_adults.innerText = ++adultValue + '+';
            total_guest_value = adultValue + childrenValue + infantsvalue
            document.getElementById("guests_input").value =  total_guest_value +"  " +adult_placeholder
        }
        else  {
            //console.log('16')
            document.getElementById("button_right").style.pointerEvents = "none"
            document.getElementById("button_right").style.background = "#ffffff"
            document.getElementById("button_right").style.borderColor = "rgba(0, 132, 137, 0.3)"
            document.getElementById("button_right").style.cursor = "none"
        }

        }

        else if ( name == "button-children") {

            if( childrenValue < 5) {

            // console.log("inside else if button-children");
            let button_children = document.getElementById("guest-button-children-number");
            button_children.innerText = ++childrenValue + '+';
            total_guest_value = adultValue + childrenValue + infantsvalue
            document.getElementById("guests_input").value =  total_guest_value +" " +children_placeholder
            button_left_children.style.cursor = "pointer"
            button_left_children.style.background = "cadetblue"
           }

           else {   

            button_right_children.style.pointerEvents = "none"
            button_right_children.style.background = "#ffffff"
            button_right_children.style.borderColor = "rgba(0, 132, 137, 0.3)"
            button_right_children.style.cursor = "none"
           }

    
        }

        else if( name == "button-infants") {

          //  console.log('inside button infants')

            if(infantsvalue < 5) {
              //  console.log('inside if of button infants')
                // console.log("inside else if button-infants")
            let button_infants = document.getElementById("guest-button-infants-number");
            button_infants.innerText = ++infantsvalue + '+';
            // total_guest_value = adultValue + childrenValue + infantsvalue
            document.getElementById("guests_input").value =  total_guest_value+" "
             +adult_placeholder+ " ,"+infantsvalue+ " "  +infants_placeholder

       // button_left_infants.style.borderColor = "rgba(0, 132, 137, 0.3)"
             button_left_infants.style.background = "cadetblue"
             
                
             
            }

            else{

              //  console.log('inside else of buttton infants')

                document.getElementById("button_right_infants").style.pointerEvents = "none"
                document.getElementById("button_right_infants").style.background = "#ffffff"
                document.getElementById("button_right_infants").style.borderColor = "rgba(0, 132, 137, 0.3)"
                document.getElementById("button_right_infants").style.cursor = "none"

            }

                  

        }     
}

function buttonMinus (name) {
        // console.log("inside button minus" , name);
    if( name == "button-adults") {

        if(adultValue >= 1) {
            document.getElementById("guest-button-adults").innerText =
            --adultValue + '+';
            total_guest_value = adultValue + childrenValue + infantsvalue

            document.getElementById("guests_input").value =  total_guest_value +" "+adult_placeholder

            button_right_adults.style.pointerEvents = "all"
            button_right_adults.style.cursor = "all"
            button_right_adults.style.background = "cadetblue"

        }  
        else {
            button_left_adults.style.cursor ="none"
            button_left_adults.style.pointerEvents = "none"
            button_left_adults.style.background = "transparent"
        }
    }

    else if( name == "button-children") {

        if(childrenValue >= 1) {
            document.getElementById("guest-button-children-number").innerText = 
            --childrenValue + '+';
            total_guest_value = adultValue + childrenValue + infantsvalue

            document.getElementById("guests_input").value =  total_guest_value +" " +infants_placeholder
            button_right_children.style.pointerEvents = "all"
            button_right_children.style.cursor = "all"
            button_right_children.style.background = "cadetblue"

        }  
        else {
            button_left_children.style.cursor = "none"
            button_left_children.style.pointerEvents = "none"
            button_left_children.style.background = "transparent"
        }
    }
    else if( name == "button-infants") {


        if(infantsvalue >= 1) {
            document.getElementById("guest-button-infants-number").innerText =
            --infantsvalue + '+';
            total_guest_value = adultValue + childrenValue + infantsvalue

            document.getElementById("guests_input").value =  total_guest_value +" " +infants_placeholder

            button_right_infants.style.pointerEvents = "all"
            button_right_infants.style.cursor = "all"
            button_right_infants.style.background = "cadetblue"

        }   else {
            button_left_infants.style.cursor ="none"
            button_left_infants.style.pointerEvents = "none"
            button_left_infants.style.background = "transparent"
        }
    }
}
let container_languages = document.getElementById("container-languages")
let lang_popUp = false

//console.log(body, 'bodyyy')

function languagePopUp () {
      //  console.log('inside language pop up')
        

        if(!lang_popUp) {
            
          //  console.log('inside if lang-pop up')
            body.style.position = "fixed";
            body.style.overflow = "hidden"
            
            container_languages.style.display = "block"
            // body.style.inset = "-1827px 0px 0px"
            lang_popUp = true
        }

        else if( !lang_popUp ) {
          //  console.log('inside else if lang pop up footer')
            body.style.position = "fixed";
            body.style.overflow = "hidden"
            container_languages.style.display = "block"
            body.style.inset = "auto"
            lang_popUp = true
        }
        
        else {

            container_languages.style.display = "none"
            body.style.position = "unset";
            body.style.overflow = "unset"
            body.style.inset = "0"
            lang_popUp  = false
            
        }
        
}

let currencyPopUp = false
let container_currency = document.getElementById("container-currency")

function currency_popUp () {

  //  console.log("inside currency popup")

    if(!currencyPopUp) {
        container_currency.style.display = "block"
        currencyPopUp = true
    }
    
    else {
        container_currency.style.display = "none"
        currencyPopUp  = false
    }

}

let signUpPopUp = false
let container_signUpPopUp = document.getElementById("sign-up-container")

function signUp () {

  //  console.log('inside signup')

    if(!signUpPopUp) {
        container_signUpPopUp.style.display = "block"
        signUpPopUp = true
    }
    
    else {                                                                  
        container_signUpPopUp.style.display = "none"
        signUpPopUp  = false
    }

}

function signUpMobile () {
  //  console.log('inside signUpMobile signup')

    if(!signUpPopUp) {
        container_signUpPopUp.style.display = "block"
        signUpPopUp = true
    }
    
    else {
        container_signUpPopUp.style.display = "none"
        signUpPopUp  = false
    }

}



let logInPopUp = false
let container_logInPopUp = document.getElementById("log-in-container")


function logIn () {

   // console.log('inside login')

    if(!logInPopUp) {
        container_logInPopUp.style.display = "block"
        logInPopUp = true
    }
    
    else {
        container_logInPopUp.style.display = "none"
        logInPopUp  = false
    }

}

let helpPopUp = false
let container_helpPopUp = document.getElementById("help-container")


function help () {

  //  console.log('inside help')

    if(!helpPopUp) {
        container_helpPopUp.style.display = "block"
        helpPopUp = true
    }
    
    else {
        container_helpPopUp.style.display = "none"
        helpPopUp  = false
    }

}

button_close_help.addEventListener('click', helpBtnClose);


function helpBtnClose () {
   // console.log('inside help btn close')
    container_helpPopUp.style.display = "none"
}

button_close_signUp.addEventListener('click', signUpBtnClose)

function signUpBtnClose () {
   // console.log('inside signup button close')
    container_signUpPopUp.style.display = "none"
}

button_close_logIn.addEventListener('click', logInBtnClose)

function logInBtnClose () {
   // console.log('inside login button close')
    container_logInPopUp.style.display = "none"
}

button_close_languagePopUp.addEventListener('click', languageBtnClose)

function languageBtnClose () {
   // console.log('inside button lang close')
    container_languages.style.display = "none"
    body.style.position = "unset"
    body.style.overflow = "unset"
    
}

button_close_currencyPopUp.addEventListener('click', currencyBtnClose)


function currencyBtnClose () {
   // console.log('inside button currency close')
    container_currency.style.display = "none"
}

// if(this.pageYOffset >= 5865){
//     document.getElementById('main-menu-container').style.display = "none"
// }

// else {
//     document.getElementById('main-menu-container').style.display = "block"
// }


// let body = document.getElementById('body-container')
    // body.addEventListener('mousemove', function(e)
    // {
    //     console.log('inside scrollbar')

    //     console.log(this.innerWidth, 'this innerwidth')

    //     if(window.pageYOffset >= 5600){
    //         console.log('inside scrollbar if')
    //     document.getElementById('main-menu-container').style.display = "none"
    // }
    
    // else {
    //     console.log('inside scrollbar else')
    //     document.getElementById('main-menu-container').style.display = "block"
    // }
    // });

    let width = this.pageYOffset + 'px'
  //  console.log(width,'width')  
    let innerwidth = window.innerWidth;
  //  console.log(innerwidth, 'innnner')

    let innerHeightDemo = this.scrollY
  //  console.log(innerHeightDemo,'innerHeightDemo')
    


    // window.addEventListener("scroll", function() {

    //     let width = this.pageYOffset + 'px'
    //     console.log(width,'width')
    //     console.log('inside scroll')


    //     if(innerwidth <= 745){

    //     if(window.pageYOffset >= innerHeightDemo){

    //             console.log('inside scrollbar if')
    //             document.getElementById('main-menu-container').style.display = "none"

    //         }
            
    //         else {

    //             console.log('inside scrollbar else')
    //             document.getElementById('main-menu-container').style.display = "block"
                
    //         } 
    //     }     

    // });

// function scrollbar ( e) {
//     console.log('inside scrollbar')

//     if(window.pageYOffset >= 5865){
//     document.getElementById('main-menu-container').style.display = "none"
// }

// else {
//     document.getElementById('main-menu-container').style.display = "block"
// }
// //  scrollbar()

// }

