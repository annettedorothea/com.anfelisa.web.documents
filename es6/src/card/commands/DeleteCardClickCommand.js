import AbstractDeleteCardClickCommand from "../../../gen/card/commands/AbstractDeleteCardClickCommand";

export default class DeleteCardClickCommand extends AbstractDeleteCardClickCommand {
    execute() {
    	this.addOkOutcome();
        this.commandData.deleteCard = {
            confirmDelete: true,
            cardId: this.commandData.cardId
        };
    }
}

/*       S.D.G.       */
