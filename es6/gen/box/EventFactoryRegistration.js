/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import LoadBoxesOkEvent from "./events/LoadBoxesOkEvent";
import LoadBoxStatisticsOkEvent from "./events/LoadBoxStatisticsOkEvent";
import DeleteBoxClickOkEvent from "./events/DeleteBoxClickOkEvent";
import CancelDeleteBoxOkEvent from "./events/CancelDeleteBoxOkEvent";
import DeleteBoxErrorEvent from "./events/DeleteBoxErrorEvent";
import LoadNextCardOkEvent from "./events/LoadNextCardOkEvent";
import DisplayWantedOkEvent from "./events/DisplayWantedOkEvent";
import LoadSettingsOkEvent from "./events/LoadSettingsOkEvent";
import MaxCardsPerDayChangedOkEvent from "./events/MaxCardsPerDayChangedOkEvent";
import MaxIntervalChangedOkEvent from "./events/MaxIntervalChangedOkEvent";
import CategoryNameChangedOkEvent from "./events/CategoryNameChangedOkEvent";
import DictionaryLookupChangedOkEvent from "./events/DictionaryLookupChangedOkEvent";
import GivenLanguageChangedOkEvent from "./events/GivenLanguageChangedOkEvent";
import WantedLanguageChangedOkEvent from "./events/WantedLanguageChangedOkEvent";
import RootCategoryNameChangedOkEvent from "./events/RootCategoryNameChangedOkEvent";

export default class EventFactoryRegistrationBox {

	static init() {
		ACEController.registerFactory('box.LoadBoxesOkEvent', 
			(eventData) => new LoadBoxesOkEvent(eventData));
		ACEController.registerFactory('box.LoadBoxStatisticsOkEvent', 
			(eventData) => new LoadBoxStatisticsOkEvent(eventData));
		ACEController.registerFactory('box.DeleteBoxClickOkEvent', 
			(eventData) => new DeleteBoxClickOkEvent(eventData));
		ACEController.registerFactory('box.CancelDeleteBoxOkEvent', 
			(eventData) => new CancelDeleteBoxOkEvent(eventData));
		ACEController.registerFactory('box.DeleteBoxErrorEvent', 
			(eventData) => new DeleteBoxErrorEvent(eventData));
		ACEController.registerFactory('box.LoadNextCardOkEvent', 
			(eventData) => new LoadNextCardOkEvent(eventData));
		ACEController.registerFactory('box.DisplayWantedOkEvent', 
			(eventData) => new DisplayWantedOkEvent(eventData));
		ACEController.registerFactory('box.LoadSettingsOkEvent', 
			(eventData) => new LoadSettingsOkEvent(eventData));
		ACEController.registerFactory('box.MaxCardsPerDayChangedOkEvent', 
			(eventData) => new MaxCardsPerDayChangedOkEvent(eventData));
		ACEController.registerFactory('box.MaxIntervalChangedOkEvent', 
			(eventData) => new MaxIntervalChangedOkEvent(eventData));
		ACEController.registerFactory('box.CategoryNameChangedOkEvent', 
			(eventData) => new CategoryNameChangedOkEvent(eventData));
		ACEController.registerFactory('box.DictionaryLookupChangedOkEvent', 
			(eventData) => new DictionaryLookupChangedOkEvent(eventData));
		ACEController.registerFactory('box.GivenLanguageChangedOkEvent', 
			(eventData) => new GivenLanguageChangedOkEvent(eventData));
		ACEController.registerFactory('box.WantedLanguageChangedOkEvent', 
			(eventData) => new WantedLanguageChangedOkEvent(eventData));
		ACEController.registerFactory('box.RootCategoryNameChangedOkEvent', 
			(eventData) => new RootCategoryNameChangedOkEvent(eventData));
	}

}




/******* S.D.G. *******/



