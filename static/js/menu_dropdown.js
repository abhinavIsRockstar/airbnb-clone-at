    // let menu_hover = document.getElementsByClassName('paragraph-heading')
    // console.log(menu_hover,'menu-hover')

    let para_heading = document.getElementsByClassName('paragraph-heading')
    // console.log(para_heading,'para heading')

    let btn_click = false
    let btn_definition = document.getElementsByClassName('button_def')


    // for(let i =0;i < para_heading.length;i++) {
    //     para_heading[0].addEventListener('click', toggle(i))
    // }

    let boolBtnClicke = [para_heading.length]

    for(let i =0;i<boolBtnClicke.length;i++){
        boolBtnClicke[i] = false
    }
    
    for(let i =0;i < para_heading.length;i++) {
    para_heading[i].addEventListener('click',function (e) {
        console.log(e,'e')

        if( !boolBtnClicke[i]) {
                console.log(i,'i')
                console.log('inside if')
                btn_definition[i].style.display = "block"
                btn_definition[i].style.transition = "display 1s"
                // btn_click = true
                boolBtnClicke[i] = true
        
                }
        
                else{
        
                    console.log('inside else')
                    btn_definition[i].style.display = "none"
                    // btn_click = false 
                    boolBtnClicke[i] = false          
        
                }
                console.log(btn_click,'btn-click')
                console.log(boolBtnClicke)
        
            });
        }

    // function toggle (e) {
    //     let btn_definition = document.getElementsByClassName('button_def')
    //     console.log(btn_definition,'e')
    //     if(!btn_click){
    //     console.log('inside if')
    //     btn_definition[0].style.display = "none"
    //     btn_click = true

    //     }

    //     else{

    //         console.log('inside else')
    //         btn_definition[0].style.display = "block"
    //         btn_click = false           

    //     }
    // }

    // para_heading[0].removeEventListener('click',toggle)
    
    // function toggle(i) {

    //     console.log(i,'e')
       
    //   //  console.log(btn_definition,'btn_definition')

    //     if(!btn_click) {
    //         console.log('inside if')
            
    //         btn_definition[i].style.display = "none"
    //         btn_click = true
    //     }

    //     else {
    //         console.log('inside else')
    //         btn_definition[i].style.display = "block"
    //         btn_click = false

    //     }
        
    // }

    // $(document).ready(function(){
    //     $("p").click(function(){
    //       $("button").toggle();
    //     });
        
       
    //   });
