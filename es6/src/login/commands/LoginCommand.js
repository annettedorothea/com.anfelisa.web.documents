import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        this.commandData.loggedInUser = {
            username: this.commandData.username,
            password: this.commandData.password
        };
        if (this.commandData.saveInLocalStorage === true) {
            this.commandData.outcome = this.saveInLocalStorage;
        } else {
            this.commandData.username = undefined;
            this.commandData.password = undefined;
            this.commandData.outcome = this.doNotSaveInLocalStorage;
        }
    }
}

/*       S.D.G.       */
