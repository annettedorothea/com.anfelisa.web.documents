import AbstractCreateCardCommand from "../../../gen/card/commands/AbstractCreateCardCommand";

export default class CreateCardCommand extends AbstractCreateCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
    	this.addOkOutcome();
        this.commandData.newCard = {
            given: "",
            wanted: "",
            image: "",
            displaySpinner: false,
            displayTranslateSpinner: false
        };
        this.commandData.cardDuplicates = [];
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
