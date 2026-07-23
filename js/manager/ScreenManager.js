/**
 * ==========================================
 * C#基礎ゲーム集
 * ScreenManager
 * 画面表示を担当する
 * ==========================================
 */


import { GameConfig } from "../config/GameConfig.js";
import { TimerManager } from "./TimerManager.js";
import { ScoreManager } from "./ScoreManager.js";



export class ScreenManager {



    constructor(dataManager) {


        this.app =
            document.getElementById("app");


        this.dataManager =
            dataManager;


        this.questions = [];


        this.currentIndex = 0;


        this.timerManager =
            new TimerManager();


        this.scoreManager =
            new ScoreManager();


    }





    /**
     * 問題データ受け取り
     */
    setQuestions(questions) {


        this.questions = questions;


    }






    /**
     * タイトル画面
     */
    showTitleScreen() {


        this.app.innerHTML = `


            <div class="title-screen">


                <h1>
                    ${GameConfig.APP_NAME}
                </h1>



                <p class="version">
                    Version ${GameConfig.VERSION}
                </p>



                <button id="startButton" class="main-button">
                    ゲーム開始
                </button>



            </div>


        `;




        document
            .getElementById("startButton")
            .addEventListener("click",()=>{


                this.showGameSelectScreen();


            });



    }







    /**
     * ゲーム選択画面
     */
    showGameSelectScreen() {


        this.app.innerHTML = `


            <div class="title-screen">


                <h1>
                    ゲーム選択
                </h1>



                <p class="version">
                    遊ぶゲームを選んでください
                </p>




                <button id="typeGameButton" class="main-button">
                    型ゲーム
                </button>



                <br><br>



                <button class="main-button" disabled>
                    ifゲーム（準備中）
                </button>



                <br><br>



                <button class="main-button" disabled>
                    switchゲーム（準備中）
                </button>



                <br><br>



                <button id="backButton" class="main-button">
                    戻る
                </button>



            </div>


        `;





        document
            .getElementById("typeGameButton")
            .addEventListener("click",()=>{


                this.scoreManager.reset();


                this.showLevelSelectScreen();


            });





        document
            .getElementById("backButton")
            .addEventListener("click",()=>{


                this.showTitleScreen();


            });



    }







    /**
     * レベル選択画面
     */
    showLevelSelectScreen() {


        this.app.innerHTML = `


            <div class="title-screen">


                <h1>
                    型ゲーム
                </h1>



                <p class="version">
                    レベルを選んでください
                </p>




                <button id="level1Button" class="main-button">
                    Lv1　値 → 型
                </button>



                <br><br>



                <button id="level2Button" class="main-button">
                    Lv2　変数宣言 → 型
                </button>



                <br><br>



                <button id="level3Button" class="main-button">
                    Lv3　return値 → 型
                </button>



                <br><br>



                <button id="level4Button" class="main-button">
                    Lv4　戻り値 → 型
                </button>



                <br><br>



                <button id="level5Button" class="main-button">
                    Lv5　仮引数 → 型
                </button>



                <br><br>



                <button class="main-button" disabled>
                    Lv6　戻り値＋仮引数
                </button>



                <br><br>



                <button id="backGameButton" class="main-button">
                    戻る
                </button>



            </div>


        `;
        document
            .getElementById("level1Button")
            .addEventListener("click", async ()=>{


                await this.dataManager
                    .loadQuestions("type.json");


                this.questions =
                    this.dataManager.getQuestions();


                this.currentIndex = 0;


                this.showTypeGameScreen();


            });





        document
            .getElementById("level2Button")
            .addEventListener("click", async ()=>{


                await this.dataManager
                    .loadQuestions("type_lv2.json");


                this.questions =
                    this.dataManager.getQuestions();


                this.currentIndex = 0;


                this.showTypeGameScreen();


            });





        document
            .getElementById("level3Button")
            .addEventListener("click", async ()=>{


                await this.dataManager
                    .loadQuestions("type_lv3.json");


                this.questions =
                    this.dataManager.getQuestions();


                this.currentIndex = 0;


                this.showTypeGameScreen();


            });





        document
            .getElementById("level4Button")
            .addEventListener("click", async ()=>{


                await this.dataManager
                    .loadQuestions("type_lv4.json");


                this.questions =
                    this.dataManager.getQuestions();


                this.currentIndex = 0;


                this.showTypeGameScreen();


            });





        document
            .getElementById("level5Button")
            .addEventListener("click", async ()=>{


                await this.dataManager
                    .loadQuestions("type_lv5.json");


                this.questions =
                    this.dataManager.getQuestions();


                this.currentIndex = 0;


                this.showTypeGameScreen();


            });





        document
            .getElementById("backGameButton")
            .addEventListener("click",()=>{


                this.showGameSelectScreen();


            });



    }









    /**
     * 型ゲーム画面
     */
    showTypeGameScreen() {


        const question =
            this.questions[this.currentIndex];




        this.app.innerHTML = `


            <div class="title-screen">


                <h1>
                    型ゲーム
                </h1>




                <p class="version">
                    問題 ${this.currentIndex + 1} / ${this.questions.length}
                </p>




                <p id="timerMessage" class="version">
                    残り3秒
                </p>




                <p id="scoreMessage" class="version">
                    得点：${this.scoreManager.getScore()}点
                </p>




                <div class="question-area">


                    <div class="question-text">
                        ${question.question}
                    </div>


                </div>




                <div id="resultMessage" class="result-area">
                </div>





                <div class="answer-area">



                    <button class="main-button answerButton" data-index="0">

                        ${question.choices[0]}

                    </button>



                    <button class="main-button answerButton" data-index="1">

                        ${question.choices[1]}

                    </button>



                    <button class="main-button answerButton" data-index="2">

                        ${question.choices[2]}

                    </button>



                    <button class="main-button answerButton" data-index="3">

                        ${question.choices[3]}

                    </button>



                </div>
                                </div>


            </div>


        `;




        let answered = false;





        document
            .querySelectorAll(".answerButton")
            .forEach(button => {



                button.addEventListener("click",()=>{



                    if(answered) {


                        return;


                    }




                    answered = true;



                    this.timerManager.stop();




                    const selected =
                        Number(button.dataset.index);





                    const result =
                        document.getElementById("resultMessage");





                    if(selected === question.answer) {



                        this.scoreManager.addCorrect();



                        result.textContent =
                            "正解！";



                    } else {



                        result.textContent =
                            "不正解";



                    }





                    document
                        .querySelectorAll(".answerButton")
                        .forEach(button=>{


                            button.disabled = true;


                        });





                    setTimeout(()=>{


                        this.nextQuestion();



                    },1000);




                });



            });








        this.timerManager.start(3,(time)=>{



            const timer =
                document.getElementById("timerMessage");





            if(timer) {


                timer.textContent =
                    `残り${time}秒`;


            }






            if(time <= 0 && !answered) {



                answered = true;



                this.timerManager.stop();





                const result =
                    document.getElementById("resultMessage");




                result.textContent =
                    "時間切れ！";






                document
                    .querySelectorAll(".answerButton")
                    .forEach(button=>{


                        button.disabled = true;


                    });





                setTimeout(()=>{


                    this.nextQuestion();



                },1000);




            }



        });





    }
        /**
     * 次の問題へ
     */
    nextQuestion() {



        this.currentIndex++;





        if(this.currentIndex >= this.questions.length) {



            this.app.innerHTML = `



                <div class="title-screen">



                    <h1>
                        結果発表！
                    </h1>




                    <p class="version">
                        正解数：
                        ${this.scoreManager.getCorrectCount()}
                        問
                    </p>




                    <p class="version">
                        得点：
                        ${this.scoreManager.getScore()}
                        点
                    </p>




                    <br><br>





                    <button id="backGameButton" class="main-button">
                        ゲーム選択へ戻る
                    </button>




                </div>



            `;






            document
                .getElementById("backGameButton")
                .addEventListener("click",()=>{



                    this.currentIndex = 0;



                    this.scoreManager.reset();




                    this.showGameSelectScreen();



                });






            return;



        }






        this.showTypeGameScreen();



    }



}