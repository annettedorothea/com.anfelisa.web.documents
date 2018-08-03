import AbstractGetAllUsersCommand from "../../../gen/admin/commands/AbstractGetAllUsersCommand";

export default class GetAllUsersCommand extends AbstractGetAllUsersCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.httpGet("api/users/all").then((data) => {
                this.commandData.userList = data.userList;
                this.commandData.showDeleteUserDialog = false;
                this.commandData.outcome = this.ok;
                resolve();
            }, error => {
                reject(error)
            });
        });
    }
}

/*       S.D.G.       */
