import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";

export function loadCategoryTree(actionData) {
    new LoadCategoryTreeAction(actionData).apply();
}

export function expandTreeItem(actionData) {
    new ExpandTreeItemAction(actionData).apply();
}

export function collapseTreeItem(actionData) {
    new CollapseTreeItemAction(actionData).apply();
}


/*       S.D.G.       */
