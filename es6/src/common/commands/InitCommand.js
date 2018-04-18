import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.username = this.commandParam.username;
            this.commandData.password = this.commandParam.password;
            this.commandData.language = this.commandParam.language;
            this.commandData.outcome = this.login;
            if (this.commandParam.hash === "registration") {
                this.commandData.outcome = this.registration;
            } else if (this.commandParam.hash === "dashboard") {
                this.commandData.outcome = this.dashboard;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */
