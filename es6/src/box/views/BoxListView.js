import * as App from "../../app/App";
import {Texts} from "../../common/views/Texts";

export default class BoxListView {
	static render(eventData) {
        App.mergeState({
            route: "dashboard",
            data: {
                boxList: eventData.data.boxList,
                editedBox: {
                    boxId: "",
                    maxIntervalChecked: false,
                    maxInterval: ""
                },
                deleteBox: {
                    confirmDelete: false,
                    boxId: ""
                }
            }
        });
	};
	
	static toggleMaxInterval() {
        App.deepMergeState({
            data: {
                editedBox: {
                    maxIntervalChecked: !App.appState.data.editedBox.maxIntervalChecked,
                    maxInterval: ""
                }
            }
        });
	};
	
	static maxIntervalChanged(eventData) {
        App.deepMergeState({
            data: {
                editedBox: {
                    maxInterval: eventData.maxInterval
                }
            }
        });
	};
	
	static editBox(eventData) {
        App.deepMergeState({
            data: {
                editedBox: {
                    boxId: eventData.boxId,
                    maxIntervalChecked: eventData.maxIntervalChecked,
                    maxInterval: eventData.maxInterval
                }
            }
        });
	};

	static cancelEditBox(eventData) {
        App.deepMergeState({
            data: {
                editedBox: {
                    boxId: ""
                }
            }
        });
	};

	static displayConfirmDelete(eventData) {
        App.deepMergeState({
            data: {
                deleteBox: {
                    confirmDelete: true,
                    boxId: eventData.boxId
                }
            }
        });
	};

	static hideConfirmDelete(eventData) {
        App.deepMergeState({
            data: {
                deleteBox: {
                    confirmDelete: false,
                    boxId: ""
                }
            }
        });
	};

}

/*                    S.D.G.                    */
