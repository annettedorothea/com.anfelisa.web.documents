import AbstractEditCardCommand from "../../../gen/card/commands/AbstractEditCardCommand";

export default class EditCardCommand extends AbstractEditCardCommand {
    execute() {
        const card = this.commandData.cardList.filter(c => c.cardId === this.commandData.cardId)[0];
        this.commandData.editedCard = {
            cardId: this.commandData.cardId,
            given: card.given,
            wanted: card.wanted,
            image: card.image
        };
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
