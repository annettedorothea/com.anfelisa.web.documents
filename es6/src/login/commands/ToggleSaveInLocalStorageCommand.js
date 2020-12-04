import AbstractToggleSaveInLocalStorageCommand from "../../../gen/login/commands/AbstractToggleSaveInLocalStorageCommand";

export default class ToggleSaveInLocalStorageCommand extends AbstractToggleSaveInLocalStorageCommand {
    execute() {
        this.commandData.saveInLocalStorage = !this.commandData.saveInLocalStorage;
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
