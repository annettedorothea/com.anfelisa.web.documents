import AbstractDisplayErrorCommand from "../../../gen/common/commands/AbstractDisplayErrorCommand";
import * as AppState from "../../../gen/ace/ReadAppState";

export default class DisplayErrorCommand extends AbstractDisplayErrorCommand {
    execute() {
        const texts = AppState.get_state_State_texts();
        const language = AppState.get_state_State_language();
        const text = texts.errors[this.commandData.error.errorKey] && texts.errors[this.commandData.error.errorKey][language] ?
            texts.errors[this.commandData.error.errorKey][language] : texts.errors["unknownError"][language].replace("{0}", this.commandData.error.errorKey);
        this.commandData.message = {
            type: "error",
            text
        };
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
