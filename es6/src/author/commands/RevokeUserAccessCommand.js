import AbstractRevokeUserAccessCommand from "../../../gen/author/commands/AbstractRevokeUserAccessCommand";

export default class RevokeUserAccessCommand extends AbstractRevokeUserAccessCommand {
    execute() {
        return new Promise((resolve, reject) => {
            const data = {
                categoryId: this.commandData.categoryId,
                revokedUserId: this.commandData.revokedUserId
            };
            this.httpDelete("api/category/revoke", [], data).then((data) => {
                this.commandData.outcome = this.ok;
                resolve();
            }, (error) => {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    this.commandData.error = error;
                    this.commandData.outcome = this.unauthorized;
                    resolve();
                } else if (error.code === 400) {
                    error.errorKey = "userDoesNotExist";
                    this.commandData.error = error;
                    this.commandData.outcome = this.userDoesNotExist;
                    resolve();
                } else {
                    reject(error.text);
                }
            });
        });
    }
}

/*       S.D.G.       */
