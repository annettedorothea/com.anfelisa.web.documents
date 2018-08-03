import AbstractDeleteBoxCommand from "../../../gen/box/commands/AbstractDeleteBoxCommand";

export default class DeleteBoxCommand extends AbstractDeleteBoxCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandData.boxId
            });
            this.httpDelete("api/box/delete", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
