import AbstractLogoutCommand from "../../../gen/common/commands/AbstractLogoutCommand";

export default class LogoutCommand extends AbstractLogoutCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
            this.commandData.hash = "#";
			resolve();
        });
    }
}

/*       S.D.G.       */
