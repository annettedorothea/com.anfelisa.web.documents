import AbstractEditMaxCardsPerDayCommand from "../../../gen/box/commands/AbstractEditMaxCardsPerDayCommand";
import {getState} from "../../../gen/ace/AppState";

export default class EditMaxCardsPerDayCommand extends AbstractEditMaxCardsPerDayCommand {
    execute() {
        const maxCardsPerDay = getState().data.maxCardsPerDay
        this.commandData.editedMaxCardsPerDay = maxCardsPerDay ? maxCardsPerDay : "";
        this.commandData.editMaxCardsPerDay = true;
        this.commandData.editMaxInterval = false;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
