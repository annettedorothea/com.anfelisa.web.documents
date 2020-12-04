import AbstractCancelEditCardCommand from "../../../gen/card/commands/AbstractCancelEditCardCommand";

export default class CancelEditCardCommand extends AbstractCancelEditCardCommand {
    execute() {
    	this.addOkOutcome();
        this.commandData.editedCard = {
            cardId: "",
            given: "",
            wanted: "",
            image: ""
        };
    }
}

/*       S.D.G.       */
