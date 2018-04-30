import AbstractLoginCommand from "../../../gen/common/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.username = this.commandParam.username;
            this.commandData.password = this.commandParam.password;
            this.commandData.hash = this.commandParam.hash? this.commandParam.hash : "#dashboard";
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
