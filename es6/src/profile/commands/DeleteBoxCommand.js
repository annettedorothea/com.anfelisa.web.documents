import AbstractDeleteBoxCommand from "../../../gen/profile/commands/AbstractDeleteBoxCommand";

export default class DeleteBoxCommand extends AbstractDeleteBoxCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpDelete("api/boxes/delete", queryParams).then((data) => {
                this.commandData.data = data;
                this.commandData.outcome = this.deleted;
                this.commandData.hash = "profile";
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
