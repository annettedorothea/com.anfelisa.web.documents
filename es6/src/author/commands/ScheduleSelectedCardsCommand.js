import AbstractScheduleSelectedCardsCommand from "../../../gen/author/commands/AbstractScheduleSelectedCardsCommand";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {
    execute() {
        return new Promise((resolve) => {
            this.httpPost("api/cards/schedule", [], {cardIds: this.commandData.cardIds}).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
