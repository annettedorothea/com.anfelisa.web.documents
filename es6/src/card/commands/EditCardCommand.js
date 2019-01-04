import AbstractEditCardCommand from "../../../gen/card/commands/AbstractEditCardCommand";
import {getAppState} from "../../app/App";

export default class EditCardCommand extends AbstractEditCardCommand {
    execute() {
        const data = getAppState().data;
        const card = data.cardList.filter(c => c.cardId === this.commandData.cardId)[0];
        this.commandData.wanted = card.wanted;
        this.commandData.given = card.given;
        this.commandData.image = card.image;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
