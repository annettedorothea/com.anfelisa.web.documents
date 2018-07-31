import AbstractToggleScheduleNextCommand from "../../../gen/box/commands/AbstractToggleScheduleNextCommand";

export default class ToggleScheduleNextCommand extends AbstractToggleScheduleNextCommand {
    execute() {
        this.commandData.scheduleNext = !this.commandData.scheduleNext;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
