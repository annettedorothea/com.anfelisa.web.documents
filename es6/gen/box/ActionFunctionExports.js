import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import LoadRootCategoriesAction from "../../src/box/actions/LoadRootCategoriesAction";
import ToggleMaxIntervalAction from "../../src/box/actions/ToggleMaxIntervalAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import CategorySelectedAction from "../../src/box/actions/CategorySelectedAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";

export function loadBoxes(actionParam) {
    new LoadBoxesAction(actionParam).apply();
}

export function loadRootCategories(actionParam) {
    new LoadRootCategoriesAction(actionParam).apply();
}

export function toggleMaxInterval(actionParam) {
    new ToggleMaxIntervalAction(actionParam).apply();
}

export function maxIntervalChanged(actionParam) {
    new MaxIntervalChangedAction(actionParam).apply();
}

export function categorySelected(actionParam) {
    new CategorySelectedAction(actionParam).apply();
}

export function createBox(actionParam) {
    new CreateBoxAction(actionParam).apply();
}


/*       S.D.G.       */
