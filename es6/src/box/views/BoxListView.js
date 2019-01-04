import {mergeState, deepMergeState} from "../../app/App";

export default class BoxListView {
	static render(eventData) {
        mergeState({
            route: "dashboard",
            data: {
                boxList: eventData.boxList,
                deleteBox: {
                    confirmDelete: false,
                    boxId: ""
                }
            }
        });
	};
	
	static cancelEditBox() {
        deepMergeState({
            data: {
                editedBox: {
                    boxId: ""
                }
            }
        });
	};

	static displayConfirmDelete(eventData) {
        deepMergeState({
            data: {
                deleteBox: {
                    confirmDelete: true,
                    boxId: eventData.boxId
                }
            }
        });
	};

	static hideConfirmDelete() {
        deepMergeState({
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
