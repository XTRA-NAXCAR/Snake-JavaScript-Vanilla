const container = document.querySelector(".container");
const styles = document.querySelector(".styles");
const body_Snake = document.querySelector(".body_Snake");
const play = document.querySelector(".play");
let html = " ";

play.addEventListener(
  "click",
  () => {
    html += `
            <div class = "w">W</div>
            <div class = "center">
                 <div class = "asd">A </div>
                <div class = "asd">S</div>
                <div class = "asd">D</div>
                <div></div>
                <button class = "next">Next</button>
            </div>
    `;
    container.innerHTML = html;

    const next = document.querySelector(".next");

    next.addEventListener(
      "click",
      () => {
        let Snake_Y = 30;
        let Snake_X = 60;
        let [Apple_Y, Apple_X] = random(0 , 0);
        let contador = 1;
        let Score = 0;
        let body = [];
        let move = '';
        let cuerpo = '';
        html = `
                <div class = "apple"></div>
                <div class = "snake"></div>
                <style>
                .Score{
                  font-size: 2em;
                  background:transparent ;
                  position: absolute;
                  display: block;
                  font-family:'East Sea Dokdo', cursive;
                  margin: 0;
                  color: #fff;
                  text-shadow:  0 0 0.5em #03e9f4,
                  0 0 1em #03e9f4,
                  0 0 2em #03e9f4;
                  margin: .5em;
                }
              </style>
              `;
             container.innerHTML = html;
        styles.innerHTML=`
        <style>
            .snake{
                top: ${Snake_Y}em;
                left:${Snake_X}em;
            }
            .apple{
              top:${Apple_Y}em;
              left:${Apple_X}em;
          }
        </style>
      `;
        function movimiento (key){
          let spawn = '';
          let shade = [Snake_Y, Snake_X];
          body.push(shade);

          if(key== 87){
            if(move == 83){
              movimiento(move);
            }
            else{
            Snake_Y -=2;
            html = `
            <h2 class = "Score">Score: ${Score}</h2>
                <style>
                    .snake{
                        top: ${Snake_Y}em;
                        left:${Snake_X}em;
                    }
                    .apple{
                      top:${Apple_Y}em;
                      left:${Apple_X}em;
                  }
                </style>
              `;
            styles.innerHTML = html;
            move = 87;
            }
          }
          if(key == 68){
            if(move == 65){
              movimiento(move);
            }
            else{
            Snake_X +=2;
            html = `
            <h2 class = "Score">Score: ${Score}</h2>
                <style>
                    .snake{
                        top: ${Snake_Y}em;
                        left:${Snake_X}em;
                    }
                    .apple{
                      top:${Apple_Y}em;
                      left:${Apple_X}em;
                  }
                </style>
              `;
               styles.innerHTML = html;
               move = 68;
              }
          }
          if(key == 83){
            if(move == 87){
              movimiento(move);
            }
            else{
            Snake_Y +=2;
            html = `
            <h2 class = "Score">Score: ${Score}</h2>
                <style>
                    .snake{
                        top: ${Snake_Y}em;
                        left:${Snake_X}em;
                    }
                    .apple{
                      top:${Apple_Y}em;
                      left:${Apple_X}em;
                  }
                </style>
              `;
              styles.innerHTML = html;
              move = 83;
              }
          }
          if(key == 65){
            if(move == 68){
              movimiento(move);
            }
            else{
            Snake_X -=2;
            html = `
            <h2 class = "Score">Score: ${Score}</h2>
                <style>
                    .snake{
                        top: ${Snake_Y}em;
                        left:${Snake_X}em;
                    }
                    .apple{
                      top:${Apple_Y}em;
                      left:${Apple_X}em;
                  }
                </style>
               `;
              styles.innerHTML = html;
              move = 65;
              }
          }
          if (Snake_Y == Apple_Y && Snake_X == Apple_X){
            Apple_Y = Math.floor(Math.random() * (58 - 0 + 1) + 0);
             if(Apple_Y%2 !=0){
                Apple_Y ++;
             }
             Apple_X = Math.floor(Math.random() * (118 - 0 + 1) + 0);
             if(Apple_X%2 !=0){
              Apple_X ++;
           }
           cuerpo = `
                <div class = "cuerpo_${contador}"></div>
                <style>
                  .cuerpo_${contador}{
                    display: inline-block;
                    position: absolute;
                    height: 2em;
                    width: 2em;
                    box-shadow:  0 0 0.5em #03e9f4,
                    0 0 1em #03e9f4,
                    0 0 2em #03e9f4;
                    border-radius: 1em;
                  }
                </style>
           `
           Score += 10;
           contador ++;
           container.innerHTML += cuerpo;
          }
          for ( var i = 1; i <= contador; i++){
            spawn += `
              <style>
               .cuerpo_${i}{
                  top: ${body[body.length - i][0]}em;
                  left: ${body[body.length - i][1]}em;
                }
              </style>
            `
            if(Snake_Y == body[body.length - i][0] && Snake_X == body[body.length - i][1] || Snake_Y == 60 || Snake_Y == -2 || Snake_X == -2 || Snake_X == 120){
              clearInterval(intervalo);
              container.innerHTML = '';
              let Game_Over = '';
              Game_Over +=`
                <div class = "box_over">
                  <h2>¡ Game Over !</h2>
                  <h1>Score: ${Score}</h1>
                  <button onclick = "location.href = location.href">Back To Main Menu</button>
                </div>
                <style>
                .box_over{
                  text-align: center;
                }
                  .box_over h2{
                    text-align: center;
                    font-size: 12em;
                    background:transparent ;
                    position: relative;
                    display: block;
                    font-family:'East Sea Dokdo', cursive;
                    margin: 0;
                    color: #fff;
                    text-shadow:  0 0 0.5em #03e9f4,
                    0 0 1em #03e9f4,
                    0 0 2em #03e9f4;
                  }
                  .box_over h1{
                    text-align: center;
                    font-size: 8em;
                    background:transparent ;
                    position: relative;
                    display: block;
                    font-family:'East Sea Dokdo', cursive;
                    margin: 0;
                    color: #fff;
                    text-shadow:  0 0 0.5em #03e9f4,
                    0 0 1em #03e9f4,
                    0 0 2em #03e9f4;
                  }
                  .box_over button{
                    position: relative;
                    margin-top: 1.5em;
                    font-family:'East Sea Dokdo', cursive;
                    font-size: 6em;
                    width: 4em;
                    height: 4em;
                    border-radius: 1em;
                    background: transparent;
                    border: transparent;
                    transition: all 1s;
                    color: #000000
                }
                .box_over button:hover{
                    color: #fff;
                    text-shadow:  0 0 0.5em #23a2a8,
                    0 0 1em #23a2a8;
                }
                </style>
              `
                styles.innerHTML= '';
                container.innerHTML = Game_Over;
            }
            if(Apple_Y == body[body.length - i][0] && Apple_X == body[body.length - i][1]){
              Apple_Y = Math.floor(Math.random() * (58 - 0 + 1) + 0);
               if(Apple_Y%2 !=0){
                  Apple_Y ++;
                }
               Apple_X = Math.floor(Math.random() * (118 - 0 + 1) + 0);
                if(Apple_X%2 !=0){
                 Apple_X ++;
               }
            }
          }
          function Snake_body(){
            body_Snake.innerHTML = spawn;
          }
          Snake_body();
        }
        let intervalo = 0;
        document.addEventListener( "keydown",(event) => {
          const key = event.keyCode;

            if(key == 87 || key == 68 || key == 83 || key == 65){
              window.clearInterval(intervalo);
              intervalo = setInterval(movimiento, 100,key);
            }
          },
          true
        );
      },
      true
    );
  },
  true
);
function random (Apple_Y, Apple_X){
  Apple_Y = Math.floor(Math.random() * (58 - 0 + 1) + 0);
   if(Apple_Y%2 !=0){
    Apple_Y ++;
  }
  Apple_X = Math.floor(Math.random() * (118 - 0 + 1) + 0);
  if(Apple_X%2 !=0){
    Apple_X ++;
  }
  return([Apple_Y, Apple_X]);
}