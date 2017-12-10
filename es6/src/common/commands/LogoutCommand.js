import AbstractLogoutCommand from "../../../gen/common/commands/AbstractLogoutCommand";

export default class LogoutCommand extends AbstractLogoutCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.hash = "public";
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
