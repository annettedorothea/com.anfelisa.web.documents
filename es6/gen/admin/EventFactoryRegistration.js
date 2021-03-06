/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import GetAllUsersOkEvent from "./events/GetAllUsersOkEvent";
import DeleteUserErrorEvent from "./events/DeleteUserErrorEvent";
import DeleteUserClickOkEvent from "./events/DeleteUserClickOkEvent";
import DeleteUserCancelOkEvent from "./events/DeleteUserCancelOkEvent";

export default class EventFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.GetAllUsersOkEvent', 
			(eventData) => new GetAllUsersOkEvent(eventData));
		ACEController.registerFactory('admin.DeleteUserErrorEvent', 
			(eventData) => new DeleteUserErrorEvent(eventData));
		ACEController.registerFactory('admin.DeleteUserClickOkEvent', 
			(eventData) => new DeleteUserClickOkEvent(eventData));
		ACEController.registerFactory('admin.DeleteUserCancelOkEvent', 
			(eventData) => new DeleteUserCancelOkEvent(eventData));
	}

}




/******* S.D.G. *******/



