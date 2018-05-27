import AbstractInitCommand from "../../../gen/common/commands/AbstractInitCommand";

export default class InitCommand extends AbstractInitCommand {
    execute() {
        if (this.commandData.username && this.commandData.password) {
            this.commandData.outcome = this.user;
        } else {
            this.commandData.outcome = this.noUser;
        }
    }
}

/*       S.D.G.       */
