import AbstractRenderHomeCommand from "../../../gen/common/commands/AbstractRenderHomeCommand";

export default class RenderHomeCommand extends AbstractRenderHomeCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */
