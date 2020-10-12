/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import UsernameChangedOkEvent from "./events/UsernameChangedOkEvent";
import ToggleSaveInLocalStorageOkEvent from "./events/ToggleSaveInLocalStorageOkEvent";
import LoginSaveInLocalStorageEvent from "./events/LoginSaveInLocalStorageEvent";
import LoginDoNotSaveInLocalStorageEvent from "./events/LoginDoNotSaveInLocalStorageEvent";
import GetRoleOkEvent from "./events/GetRoleOkEvent";

export default class EventFactoryRegistrationLogin {

	static init() {
		ACEController.registerFactory('login.UsernameChangedOkEvent', 
			(eventData) => new UsernameChangedOkEvent(eventData));
		ACEController.registerFactory('login.ToggleSaveInLocalStorageOkEvent', 
			(eventData) => new ToggleSaveInLocalStorageOkEvent(eventData));
		ACEController.registerFactory('login.LoginSaveInLocalStorageEvent', 
			(eventData) => new LoginSaveInLocalStorageEvent(eventData));
		ACEController.registerFactory('login.LoginDoNotSaveInLocalStorageEvent', 
			(eventData) => new LoginDoNotSaveInLocalStorageEvent(eventData));
		ACEController.registerFactory('login.GetRoleOkEvent', 
			(eventData) => new GetRoleOkEvent(eventData));
	}

}




/******* S.D.G. *******/



