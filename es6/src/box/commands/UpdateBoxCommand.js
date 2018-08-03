import AbstractUpdateBoxCommand from "../../../gen/box/commands/AbstractUpdateBoxCommand";

export default class UpdateBoxCommand extends AbstractUpdateBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                boxId: this.commandData.boxId,
                maxInterval: this.commandData.maxInterval
            };
            this.httpPut("api/box/update", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
