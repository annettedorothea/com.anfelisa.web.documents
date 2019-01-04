import AbstractPostponeCardsOfBoxCommand from "../../../gen/box/commands/AbstractPostponeCardsOfBoxCommand";

export default class PostponeCardsOfBoxCommand extends AbstractPostponeCardsOfBoxCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve, reject) {
    	this.commandData.outcome = this.next;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
