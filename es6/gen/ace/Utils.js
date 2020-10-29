/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import AppUtils from "../../src/app/AppUtils";
import ACEController from "./ACEController";

export default class Utils {

    static getServerInfo() {
        return AppUtils.httpGet(Utils.settings.rootPath + '/server/info');
    }
    
	static loadSettings() {
	    return AppUtils.httpRequest("GET", "settings.json").then((settings) => {
	        Utils.settings = settings;
	        if (!Utils.settings.clientVersion) {
	            Utils.settings.clientVersion = "";
	        }
	        if (!Utils.settings.aceScenariosApiKey) {
	            Utils.settings.aceScenariosApiKey = "";
	        }
	        if (!Utils.settings.aceScenariosBaseUrl) {
	            Utils.settings.aceScenariosBaseUrl = "";
	        }
	        if (!Utils.settings.rootPath) {
	            Utils.settings.rootPath = "";
	        }
	        if (!Utils.settings.timelineSize) {
	            Utils.settings.timelineSize = 0;
	        }
	        if (Utils.settings.rootPath.startsWith("/")) {
	            Utils.settings.rootPath = Utils.settings.rootPath.substring(1);
	        }
	        if (Utils.settings.rootPath.endsWith("/")) {
	            Utils.settings.rootPath = Utils.settings.rootPath.substring(0, Utils.settings.rootPath.length - 1);
	        }
	    });
	}

    static saveTimeline(description, creator) {
        return Utils.getServerInfo().then((serverInfo) => {
            const browser = Utils.getBrowserInfo();
            const uuid = AppUtils.createUUID();
            const data = {
                description,
                timeline: JSON.stringify(ACEController.timeline),
                creator,
                clientVersion: Utils.settings.clientVersion,
                device: browser.name + " " + browser.version,
                apiKey: Utils.settings.aceScenariosApiKey,
                serverVersion: serverInfo.serverVersion
            };
            return AppUtils.httpPost(Utils.settings.aceScenariosBaseUrl + 'api/client-timeline/create', uuid, false, data).then(() => {
                return new Promise((resolve) => {
                    resolve(uuid);
                });
            });
        });
    }

    static loadTimeline(id) {
        return AppUtils.httpGet(Utils.settings.aceScenariosBaseUrl + `api/timeline?id=${id}&apiKey=${Utils.settings.aceScenariosApiKey}`, AppUtils.createUUID(), false);
    }

    static getBrowserInfo() {
        let ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name: 'IE ', version: (tem[1] || '')};
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null) {
                return {name: 'Opera', version: tem[1]};
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    }

}



/******* S.D.G. *******/





