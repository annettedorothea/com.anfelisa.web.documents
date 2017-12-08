import AbstractRouteCommand from "../../../gen/common/commands/AbstractRouteCommand";

class RouteCommand extends AbstractRouteCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.hash = this.commandParam.hash;
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
