import AbstractDeleteCardCommand from "../../../gen/card/commands/AbstractDeleteCardCommand";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
    	resolve();
    }
    handleError(resolve) {
        this.addErrorOutcome();
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        resolve();
    }
}

/*       S.D.G.       */
