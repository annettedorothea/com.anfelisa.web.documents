import AbstractTranslateCommand from "../../../gen/card/commands/AbstractTranslateCommand";

export default class TranslateCommand extends AbstractTranslateCommand {

    initCommandData() {
    	//add from appState to commandData 
    }

    handleResponse(resolve, reject) {
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
