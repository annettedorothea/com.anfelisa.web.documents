import ACEController from "../../gen/ace/ACEController";

export default class ReplayUtils {

    static actualTimelineChanged(items) {
    }

    static expectedTimelineChanged(items) {
    }

    static resetDatabase() {
        return new Promise((resolve) => {
            resolve();
        });
    }

    static prepareAction(uuid) {
		if (ACEController.execution === ACEController.E2E) {
		    return new Promise((resolve) => {
		    		// prepare action
		    		resolve();
		    });
		} else {
		    return new Promise((resolve) => {
		        resolve();
		    });
		}
    }

    static replay(pauseInMillis) {
        ACEController.startReplay(ACEController.REPLAY, pauseInMillis)
    }

    static e2e() {
        ACEController.startReplay(ACEController.E2E, pauseInMillis)
    }

	static uploadTimeline() {
		// upload timeline
		const json = '';
        ACEController.initTimeline(JSON.parse(json));
	}

	static initFinishReplayCallback(callback) {
	    ReplayUtils.finishReplayCallback = callback;
	}

	static finishReplay() {
	    const normalized = ReplayUtils.normalizeTimelines(ACEController.expectedTimeline, ACEController.actualTimeline);
	    const result = JSON.stringify(normalized.expected, ReplayUtils.itemStringifyReplacer) === JSON.stringify(normalized.actual, ReplayUtils.itemStringifyReplacer);
	    if (ReplayUtils.finishReplayCallback) {
	        ReplayUtils.finishReplayCallback(result);
	    }
	}

	static saveScenario(description) {
	    const data = {
	        description: description,
	        data: JSON.stringify(ACEController.expectedTimeline)
	    };
	    return AppUtils.httpPost('api/scenario/create', null, data);
	}
	
	static deleteScenario(id) {
	    let queryParams = [
	        {
	            key: "id",
	            value: id
	        }
	    ];
	    return AppUtils.httpDelete('api/scenario/delete', queryParams);
	}

	static loadScenarios() {
	    return AppUtils.httpGet('api/scenario/all');
	}

}

/*       S.D.G.       */

