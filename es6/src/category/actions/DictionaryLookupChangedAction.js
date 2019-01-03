import AbstractDictionaryLookupChangedAction from "../../../gen/category/actions/AbstractDictionaryLookupChangedAction";

export default class DictionaryLookupChangedAction extends AbstractDictionaryLookupChangedAction {

    initActionData() {
    	//add not replayable data to action data in order to freeze for replay (e.g. time or date)
    }

}

/*       S.D.G.       */
