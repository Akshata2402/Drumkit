
   

            // console.log("button pressed")
            // let audio=new Audio('sounds/tom-1.mp3');
            let dom=document.querySelectorAll(".drum").length;
            // let domArray=document.querySelectorAll(".drum");
            for (let index = 0; index < dom; index++) {
                console.log("for loop");
                document.querySelectorAll(".drum")[index].addEventListener('click',function run(){
                var buttonText=this.innerHTML;
                console.log(this.innerHTML);
                music(buttonText)
            });
            }
            function music(key) {
                switch (key) {
                   case 'w':
                        let audio=new Audio('sounds/tom-1.mp3')
                        audio.play();
                     break;
                     case 'a':
                        let audio1=new Audio('sounds/tom-2.mp3')
                        audio1.play();
                     break;

                     case 's':
                        let audio2=new Audio('sounds/tom-3.mp3')
                        audio2.play();
                     break;

                     case 'd':
                        let audio3=new Audio('sounds/tom-4.mp3')
                        audio3.play();
                     break;

                     case 'j':
                        let audio4=new Audio('sounds/snare.mp3')
                        audio4.play();
                     break;

                     case 'k':
                        let audio5=new Audio('sounds/kick-bass.mp3')
                        audio5.play();
                     break;
                     case 'l':
                        let audio6=new Audio('sounds/crash.mp3')
                        audio6.play();
                     break;

                
                    default:
                        break;
                }
                
            }




