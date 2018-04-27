import AbstractLoginCommand from "../../../gen/common/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.username = this.commandParam.username;
            this.commandData.password = this.commandParam.password;
            this.commandData.outcome = this.ok;
            this.commandData.hash = "#dashboard";
			resolve();
        });
    }
}

/*       S.D.G.       */
