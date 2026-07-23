/**
 * ==========================================
 * C#基礎ゲーム集
 * DataManager
 * JSONデータ管理
 * ==========================================
 */

export class DataManager {


    constructor() {

        this.questions = [];

    }



    /**
     * JSONファイル読み込み
     */
    async loadQuestions(fileName) {


        const response = await fetch(
            `data/games/${fileName}`
        );


        const allQuestions =
            await response.json();



        this.questions =
            this.selectRandomQuestions(
                allQuestions,
                10
            );


        this.shuffleQuestions();



        console.log(
            "問題データ読み込み完了",
            this.questions
        );


    }





    /**
     * 指定数だけランダム取得
     */
    selectRandomQuestions(questions, count) {


        const copy =
            [...questions];


        for(let i = copy.length - 1; i > 0; i--) {


            const j =
                Math.floor(Math.random() * (i + 1));


            [
                copy[i],
                copy[j]
            ] =
            [
                copy[j],
                copy[i]
            ];

        }


        return copy.slice(0, count);


    }





    /**
     * 問題をランダム順に並び替え
     */
    shuffleQuestions() {


        for(let i = this.questions.length - 1; i > 0; i--) {


            const j =
                Math.floor(Math.random() * (i + 1));


            [
                this.questions[i],
                this.questions[j]
            ] =
            [
                this.questions[j],
                this.questions[i]
            ];

        }


    }





    /**
     * 問題取得
     */
    getQuestions() {


        return this.questions;


    }


}