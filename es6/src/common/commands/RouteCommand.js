import AbstractRouteCommand from "../../../gen/common/commands/AbstractRouteCommand";

export default class RouteCommand extends AbstractRouteCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
