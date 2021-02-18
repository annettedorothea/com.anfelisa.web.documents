import AbstractUpdateCardCommand from "../../../gen/card/commands/AbstractUpdateCardCommand";

export default class UpdateCardCommand extends AbstractUpdateCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.addOkOutcome();
        this.commandData.editedCard = {
            cardId: "",
            given: "",
            wanted: "",
            image: ""
        };
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
