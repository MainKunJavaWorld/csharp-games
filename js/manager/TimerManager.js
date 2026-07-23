/**
 * ==========================================
 * C#基礎ゲーム集
 * TimerManager
 * タイマー管理
 * ==========================================
 */


export class TimerManager {


    constructor() {

        this.time = 0;

        this.timerId = null;

    }



    /**
     * タイマー開始
     */
    start(seconds, callback) {


        this.stop();


        this.time = seconds;


        this.timerId = setInterval(() => {


            this.time--;


            callback(this.time);



            if(this.time <= 0) {


                this.stop();


            }


        }, 1000);


    }



    /**
     * 停止
     */
    stop() {


        if(this.timerId !== null) {


            clearInterval(this.timerId);


            this.timerId = null;


        }


    }



    /**
     * 現在時間取得
     */
    getTime() {

        return this.time;

    }


}