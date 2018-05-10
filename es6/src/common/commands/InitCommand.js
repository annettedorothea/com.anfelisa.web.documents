import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        if (this.commandParam.username && this.commandParam.password) {
            this.commandData.username = this.commandParam.username;
            this.commandData.password = this.commandParam.password;
            this.commandData.outcome = this.user;
        } else {
            this.commandData.outcome = this.noUser;
        }
        this.commandData.hash = this.commandParam.hash;
        this.commandData.language = this.commandParam.language;
    }
}

/*       S.D.G.       */
