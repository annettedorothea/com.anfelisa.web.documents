import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        if (this.commandData.saveInLocalStorage === true) {
            this.commandData.outcome = this.saveInLocalStorage;
        } else {
            this.commandData.outcome = this.doNotSaveInLocalStorage;
        }
    }
}

/*       S.D.G.       */
