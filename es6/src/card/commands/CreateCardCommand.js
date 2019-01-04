import AbstractCreateCardCommand from "../../../gen/card/commands/AbstractCreateCardCommand";

export default class CreateCardCommand extends AbstractCreateCardCommand {

    initCommandData() {
    	//add from appState to commandData 
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
