import AbstractUpdateCardCommand from "../../../gen/card/commands/AbstractUpdateCardCommand";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.commandData.outcome = this.ok;
        this.commandData.editedCard = {
            cardId: "",
            given: "",
            wanted: "",
            image: ""
        };
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
