/**
 * ==========================================
 * C#基礎ゲーム集
 * ScoreManager
 * 得点管理
 * ==========================================
 */


export class ScoreManager {


    constructor() {

        this.score = 0;

        this.correctCount = 0;

    }



    /**
     * 正解追加
     */
    addCorrect() {


        this.score += 10;

        this.correctCount++;


    }



    /**
     * 現在得点取得
     */
    getScore() {

        return this.score;

    }



    /**
     * 正解数取得
     */
    getCorrectCount() {

        return this.correctCount;

    }



    /**
     * 初期化
     */
    reset() {


        this.score = 0;

        this.correctCount = 0;


    }


}