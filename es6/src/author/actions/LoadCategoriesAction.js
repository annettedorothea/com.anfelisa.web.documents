import AbstractLoadCategoriesAction from "../../../gen/author/actions/AbstractLoadCategoriesAction";
import * as App from "../../app/App";

export default class LoadCategoriesAction extends AbstractLoadCategoriesAction {

    initActionData() {
        this.actionData.naturalInputOrder = App.appState.data === undefined || App.appState.data.naturalInputOrder === undefined ? undefined : App.appState.data.naturalInputOrder;
        this.actionData.useDictionary = App.appState.data === undefined || App.appState.data.useDictionary === undefined ? undefined : App.appState.data.useDictionary;
    }

}

/*       S.D.G.       */
