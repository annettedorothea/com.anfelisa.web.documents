import AbstractItemDroppedCommand from "../../../gen/category/commands/AbstractItemDroppedCommand";

export default class ItemDroppedCommand extends AbstractItemDroppedCommand {
    execute() {
        if (this.commandData.movedCategory) {
            this.commandData.outcome = this.category;
        } else {
            this.commandData.outcome = this.card;
        }
    }
}

/*       S.D.G.       */
