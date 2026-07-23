/**
 * ==========================================
 * C#基礎ゲーム集
 * TypeGame
 * 型ゲーム処理
 * ==========================================
 */

export class TypeGame {


    constructor(dataManager) {

        this.dataManager = dataManager;

        this.questions = [];

        this.currentIndex = 0;

    }


    /**
     * ゲーム開始
     */
    start(level) {


        this.questions =
            this.dataManager
                .getQuestions()
                .filter(question => question.level === level);


        this.currentIndex = 0;


        console.log(
            "型ゲーム開始",
            this.questions
        );


        return this.getCurrentQuestion();

    }



    /**
     * 現在の問題取得
     */
    getCurrentQuestion() {


        return this.questions[this.currentIndex];


    }

}