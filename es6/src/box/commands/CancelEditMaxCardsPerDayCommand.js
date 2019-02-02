import AbstractCancelEditMaxCardsPerDayCommand from "../../../gen/box/commands/AbstractCancelEditMaxCardsPerDayCommand";

export default class CancelEditMaxCardsPerDayCommand extends AbstractCancelEditMaxCardsPerDayCommand {
    execute() {
        this.commandData.editedMaxCardsPerDay = null;
        this.commandData.editMaxCardsPerDay = false;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
