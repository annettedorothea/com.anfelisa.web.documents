import AbstractFillBoxWithCardsCommand from "../../../gen/profile/commands/AbstractFillBoxWithCardsCommand";

export default class FillBoxWithCardsCommand extends AbstractFillBoxWithCardsCommand {
    execute() {
        return new Promise((resolve, reject) => {
            let queryParams = [];
            queryParams.push({
                key: "boxId",
                value: this.commandParam.boxId
            });
            this.httpPost("api/box/fill", queryParams).then(() => {
                this.commandData.outcome = this.filled;
                this.commandData.hash = "profile";
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
}

/*       S.D.G.       */
