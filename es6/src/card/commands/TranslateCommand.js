import AbstractTranslateCommand from "../../../gen/card/commands/AbstractTranslateCommand";

export default class TranslateCommand extends AbstractTranslateCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve, reject) {
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
