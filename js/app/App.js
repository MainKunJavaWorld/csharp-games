/**
 * ==========================================
 * C#基礎ゲーム集
 * App.js
 * アプリケーション開始処理
 * ==========================================
 */

import { GameConfig } from "../config/GameConfig.js";
import { ScreenManager } from "../manager/ScreenManager.js";
import { DataManager } from "../manager/DataManager.js";


export class App {


    constructor() {

        console.log(
            `${GameConfig.APP_NAME} Ver.${GameConfig.VERSION}`
        );

        this.dataManager =
            new DataManager();

        this.screenManager =
            new ScreenManager(this.dataManager);


        

    }



    async initializeGame() {


        console.log(
            "App initialized."
        );


        await this.dataManager.loadQuestions("type.json");


        console.log(
            "取得した問題数:",
            this.dataManager.getQuestions().length
        );

        this.screenManager.setQuestions(
            this.dataManager.getQuestions()
        );
        
        this.screenManager.showTitleScreen();

    }


}



const app = new App();

app.initializeGame();