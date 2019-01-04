import AbstractDeleteCardCommand from "../../../gen/card/commands/AbstractDeleteCardCommand";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {

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
