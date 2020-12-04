import AbstractDisplayErrorAndLogoutCommand from "../../../gen/common/commands/AbstractDisplayErrorAndLogoutCommand";

export default class DisplayErrorAndLogoutCommand extends AbstractDisplayErrorAndLogoutCommand {
    execute() {
        const text = this.commandData.texts.errors[this.commandData.error.errorKey] && this.commandData.texts.errors[this.commandData.error.errorKey][this.commandData.language] ?
            this.commandData.texts.errors[this.commandData.error.errorKey][this.commandData.language] :
            this.commandData.texts.errors["unknownError"][this.commandData.language].replace("{0}", this.commandData.error.errorKey);
        this.commandData.message = {
            type: "error",
            text
        };
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
