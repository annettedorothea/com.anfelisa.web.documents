import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        return new Promise((resolve, reject) => {
            if (this.commandParam.username && this.commandParam.password) {
                this.commandData.username = this.commandParam.username;
                this.commandData.password = this.commandParam.password;
                this.commandData.outcome = this.user;
            } else {
                this.commandData.outcome = this.noUser;
            }
            this.commandData.language = this.commandParam.language;
            resolve();
        });
    }
}

/*       S.D.G.       */
