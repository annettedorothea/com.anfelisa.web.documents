import AbstractToggleScheduleNextCommand from "../../../gen/box/commands/AbstractToggleScheduleNextCommand";
import {getState} from "../../../gen/ace/AppState";

export default class ToggleScheduleNextCommand extends AbstractToggleScheduleNextCommand {
    execute() {
        this.commandData.scheduleNext = !getState().data.scheduleNext;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
