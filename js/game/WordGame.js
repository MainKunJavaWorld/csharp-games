/**
 * ==========================================
 * C#基礎ゲーム集
 * WordGame
 * 用語ゲーム管理
 * ==========================================
 */

export class WordGame {

    constructor(screenManager) {

        this.screenManager = screenManager;

        this.questions = [];

        this.currentIndex = 0;

        this.correctCount = 0;

    }


    /**
     * 問題設定
     */
    setQuestions(questions) {

        this.questions =
            this.shuffleQuestions(questions)
                .slice(0,10);

        this.currentIndex = 0;

        this.correctCount = 0;

    }


    /**
     * 問題シャッフル
     */
    shuffleQuestions(array) {

        const result = [...array];

        for(let i = result.length - 1; i > 0; i--) {

            const j =
                Math.floor(Math.random() * (i + 1));

            [result[i], result[j]] =
                [result[j], result[i]];

        }

        return result;

    }


    /**
     * 現在問題取得
     */
    getCurrentQuestion() {

        return this.questions[this.currentIndex];

    }


    /**
     * 正解数取得
     */
    getCorrectCount() {

        return this.correctCount;

    }


    /**
     * 正解判定
     */
    checkAnswer(answer) {

        const question =
            this.getCurrentQuestion();


        if(answer === question.answer) {

            this.correctCount++;

            return true;

        }


        return false;

    }


    /**
     * 次の問題
     */
    nextQuestion() {

        this.currentIndex++;

    }


    /**
     * 終了判定
     */
    isFinished() {

        return this.currentIndex >= this.questions.length;

    }

}