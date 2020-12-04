import AbstractDisplayMessageCommand from "../../../gen/common/commands/AbstractDisplayMessageCommand";

export default class DisplayMessageCommand extends AbstractDisplayMessageCommand {
    execute() {
        const text = this.commandData.texts.messages[this.commandData.messageKey] && this.commandData.texts.messages[this.commandData.messageKey][this.commandData.language] ?
            this.commandData.texts.messages[this.commandData.messageKey][this.commandData.language] :
            this.commandData.messageKey;
        this.commandData.message = {
            type: "info",
            text
        };
        this.addOkOutcome();
    }
}

/*       S.D.G.       */
