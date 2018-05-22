import AbstractCreateCardCommand from "../../../gen/author/commands/AbstractCreateCardCommand";

export default class CreateCardCommand extends AbstractCreateCardCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                given: this.commandParam.given,
                wanted: this.commandParam.wanted,
                cardIndex: this.commandParam.cardIndex,
                categoryId: this.commandParam.categoryId,
                image: this.commandParam.image,
            };
            this.httpPost("api/card/create", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.parentCategoryId = this.commandParam.categoryId;
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
