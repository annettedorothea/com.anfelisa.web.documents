import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        this.commandData.language = "de";
        if (this.commandData.username && this.commandData.password) {
            this.commandData.loggedInUser = {
                username: this.commandData.username,
                password: this.commandData.password
            };
            this.addUserOutcome();
        } else {
            this.commandData.loggedInUser = null;
            this.addNoUserOutcome();
        }
    }
}

/*       S.D.G.       */
