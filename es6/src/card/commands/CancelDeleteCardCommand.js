import AbstractCancelDeleteCardCommand from "../../../gen/card/commands/AbstractCancelDeleteCardCommand";

export default class CancelDeleteCardCommand extends AbstractCancelDeleteCardCommand {
    execute() {
        this.commandData.deleteCard = {
            confirmDelete: false,
            cardId: ""
        };
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
