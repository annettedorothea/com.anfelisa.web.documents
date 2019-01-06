import AbstractCategoryNameChangedCommand from "../../../gen/category/commands/AbstractCategoryNameChangedCommand";
import {getAppState} from "../../app/App";

export default class CategoryNameChangedCommand extends AbstractCategoryNameChangedCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
