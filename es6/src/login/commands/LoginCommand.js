import AbstractLoginCommand from "../../../gen/login/commands/AbstractLoginCommand";

export default class LoginCommand extends AbstractLoginCommand {
    execute() {
        this.commandData.loggedInUser = {
            username: this.commandData.username,
            password: this.commandData.password
        };
        if (this.commandData.saveInLocalStorage === true) {
            this.addSaveInLocalStorageOutcome();
        } else {
            this.commandData.username = undefined;
            this.commandData.password = undefined;
            this.addDoNotSaveInLocalStorageOutcome();
        }
    }
}

/*       S.D.G.       */
