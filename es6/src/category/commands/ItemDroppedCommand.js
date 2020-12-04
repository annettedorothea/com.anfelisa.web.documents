import AbstractItemDroppedCommand from "../../../gen/category/commands/AbstractItemDroppedCommand";

export default class ItemDroppedCommand extends AbstractItemDroppedCommand {
    execute() {
        if (this.commandData.movedCategory) {
            this.addCategoryOutcome();
        } else {
            this.addCardOutcome();
        }
    }
}

/*       S.D.G.       */
