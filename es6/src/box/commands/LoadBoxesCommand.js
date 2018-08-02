import AbstractLoadBoxesCommand from "../../../gen/box/commands/AbstractLoadBoxesCommand";

export default class LoadBoxesCommand extends AbstractLoadBoxesCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "today",
                value: this.commandData.today
            });
            this.httpGet("api/boxes/my", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.ok;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
