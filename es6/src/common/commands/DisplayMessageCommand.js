import AbstractDisplayMessageCommand from "../../../gen/common/commands/AbstractDisplayMessageCommand";
import * as AppState from "../../../gen/ace/AppState";

export default class DisplayMessageCommand extends AbstractDisplayMessageCommand {
    execute() {
        const texts = AppState.get_state_State_texts();
        const language = AppState.get_state_State_language();
        this.commandData.message = {
            type: "info",
            text: texts.messages[this.commandData.messageKey][language]
        };
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
