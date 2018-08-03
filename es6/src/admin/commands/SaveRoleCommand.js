import AbstractSaveRoleCommand from "../../../gen/admin/commands/AbstractSaveRoleCommand";

export default class SaveRoleCommand extends AbstractSaveRoleCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpPut("api/user/role", [], this.commandData).then(() => {
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
