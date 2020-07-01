import AbstractDisplayErrorCommand from "../../../gen/common/commands/AbstractDisplayErrorCommand";

export default class DisplayErrorCommand extends AbstractDisplayErrorCommand {
    execute() {
        const text = this.commandData.texts.errors[this.commandData.error.errorKey] && this.commandData.texts.errors[this.commandData.error.errorKey][this.commandData.language] ?
            this.commandData.texts.errors[this.commandData.error.errorKey][this.commandData.language] :
            this.commandData.texts.errors["unknownError"][this.commandData.language].replace("{0}", this.commandData.error.errorKey);
        this.commandData.message = {
            type: "error",
            text
        };
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
