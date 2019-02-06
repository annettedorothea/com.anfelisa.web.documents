import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        this.commandData.language = "de";
        if (this.commandData.username && this.commandData.password) {
            this.commandData.loggedInUser = {
                username: this.commandData.username,
                password: this.commandData.password
            };
            this.commandData.outcome = this.user;
        } else {
            this.commandData.outcome = this.noUser;
        }
    }
}

/*       S.D.G.       */
