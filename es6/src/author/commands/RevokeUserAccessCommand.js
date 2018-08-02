import AbstractRevokeUserAccessCommand from "../../../gen/author/commands/AbstractRevokeUserAccessCommand";

export default class RevokeUserAccessCommand extends AbstractRevokeUserAccessCommand {
    execute() {
        return new Promise((resolve) => {
            let queryParams = [];
            queryParams.push({
                key: "revokedUserId",
                value: this.commandData.revokedUserId
            });
            queryParams.push({
                key: "categoryId",
                value: this.commandData.categoryId
            });
            this.httpDelete("api/category/revoke", queryParams).then((data) => {
                this.commandData.outcome = this.ok;
                this.commandData.messageKey = "userRemoved";
                resolve();
            });
        });
    }
}

/*       S.D.G.       */
