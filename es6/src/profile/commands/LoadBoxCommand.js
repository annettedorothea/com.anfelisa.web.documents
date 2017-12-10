import AbstractLoadBoxCommand from "../../../gen/profile/commands/AbstractLoadBoxCommand";

export default class LoadBoxCommand extends AbstractLoadBoxCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpGet("api/boxes/single", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.loaded;
                resolve();
            }, (error) => {
                this.commandData.messageKey = "readBoxFailed";
                this.commandData.error = error;
                this.commandData.outcome = this.error;
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
