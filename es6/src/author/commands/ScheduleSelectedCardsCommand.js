import AbstractScheduleSelectedCardsCommand from "../../../gen/author/commands/AbstractScheduleSelectedCardsCommand";

export default class ScheduleSelectedCardsCommand extends AbstractScheduleSelectedCardsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpPost("api/cards/schedule", [], {cardIds: this.commandData.cardIds}).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
