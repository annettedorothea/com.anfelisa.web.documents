import AbstractRenderLoginCommand from "../../../gen/common/commands/AbstractRenderLoginCommand";

class RenderLoginCommand extends AbstractRenderLoginCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.ok;
			resolve();
        });
    }
}

/*       S.D.G.       */