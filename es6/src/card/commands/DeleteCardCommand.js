import AbstractDeleteCardCommand from "../../../gen/card/commands/AbstractDeleteCardCommand";

export default class DeleteCardCommand extends AbstractDeleteCardCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
        resolve();
    }
}

/*       S.D.G.       */
