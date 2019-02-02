import AbstractMaxCardsPerDayChangedCommand from "../../../gen/box/commands/AbstractMaxCardsPerDayChangedCommand";

export default class MaxCardsPerDayChangedCommand extends AbstractMaxCardsPerDayChangedCommand {
    execute() {
        if (this.commandData.editedMaxCardsPerDay > 0 || this.commandData.editedMaxCardsPerDay === "") {
            this.commandData.outcome = this.ok;
        } else {
            this.commandData.outcome = this.invalid;
        }
    }
}

/*       S.D.G.       */
