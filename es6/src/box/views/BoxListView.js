import * as App from "../../app/App";
import {Texts} from "../../common/views/Texts";

export default class BoxListView {
	static render(eventData) {
        App.mergeState({
            route: "dashboard",
            data: {
                boxList: eventData.data.boxList,
                deleteBox: {
                    confirmDelete: false,
                    boxId: ""
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
