import AbstractLoadCardsCommand from "../../../gen/card/commands/AbstractLoadCardsCommand";

export default class LoadCardsCommand extends AbstractLoadCardsCommand {

    initCommandData() {
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
