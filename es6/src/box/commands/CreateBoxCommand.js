import AbstractCreateBoxCommand from "../../../gen/box/commands/AbstractCreateBoxCommand";

export default class CreateBoxCommand extends AbstractCreateBoxCommand {
    execute() {
        return new Promise((resolve) => {
            const data = {
                categoryId: this.commandData.categoryId,
                maxInterval: this.commandData.maxInterval
            };
            this.httpPost("api/box/create", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.hash = "#dashboard";
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
