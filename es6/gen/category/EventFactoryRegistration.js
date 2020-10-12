/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import LoadCategoryTreeOkEvent from "./events/LoadCategoryTreeOkEvent";
import ExpandTreeItemOkEvent from "./events/ExpandTreeItemOkEvent";
import CollapseTreeItemOkEvent from "./events/CollapseTreeItemOkEvent";
import CollapseTreeItemSelectParentCategoryEvent from "./events/CollapseTreeItemSelectParentCategoryEvent";
import SelectTreeItemOkEvent from "./events/SelectTreeItemOkEvent";
import NewCategoryClickOkEvent from "./events/NewCategoryClickOkEvent";
import CancelNewCategoryOkEvent from "./events/CancelNewCategoryOkEvent";
import CategoryNameChangedOkEvent from "./events/CategoryNameChangedOkEvent";
import CreateCategoryOkEvent from "./events/CreateCategoryOkEvent";
import CreateCategoryErrorEvent from "./events/CreateCategoryErrorEvent";
import DeleteCategoryClickOkEvent from "./events/DeleteCategoryClickOkEvent";
import CancelDeleteCategoryOkEvent from "./events/CancelDeleteCategoryOkEvent";
import DeleteCategoryOkEvent from "./events/DeleteCategoryOkEvent";
import DeleteCategoryErrorEvent from "./events/DeleteCategoryErrorEvent";
import EditCategoryClickOkEvent from "./events/EditCategoryClickOkEvent";
import CancelEditCategoryOkEvent from "./events/CancelEditCategoryOkEvent";
import UpdateCategoryOkEvent from "./events/UpdateCategoryOkEvent";
import UpdateCategoryErrorEvent from "./events/UpdateCategoryErrorEvent";
import CheckDropAllowedOkEvent from "./events/CheckDropAllowedOkEvent";
import MoveCategoryStartedOkEvent from "./events/MoveCategoryStartedOkEvent";
import MoveCategoryOkEvent from "./events/MoveCategoryOkEvent";
import ChangeOrderCategoryOkEvent from "./events/ChangeOrderCategoryOkEvent";
import PreviewCsvOkEvent from "./events/PreviewCsvOkEvent";
import CancelPreviewCsvOkEvent from "./events/CancelPreviewCsvOkEvent";
import SwapPreviewCsvOkEvent from "./events/SwapPreviewCsvOkEvent";
import ImportCsvOkEvent from "./events/ImportCsvOkEvent";

export default class EventFactoryRegistrationCategory {

	static init() {
		ACEController.registerFactory('category.LoadCategoryTreeOkEvent', 
			(eventData) => new LoadCategoryTreeOkEvent(eventData));
		ACEController.registerFactory('category.ExpandTreeItemOkEvent', 
			(eventData) => new ExpandTreeItemOkEvent(eventData));
		ACEController.registerFactory('category.CollapseTreeItemOkEvent', 
			(eventData) => new CollapseTreeItemOkEvent(eventData));
		ACEController.registerFactory('category.CollapseTreeItemSelectParentCategoryEvent', 
			(eventData) => new CollapseTreeItemSelectParentCategoryEvent(eventData));
		ACEController.registerFactory('category.SelectTreeItemOkEvent', 
			(eventData) => new SelectTreeItemOkEvent(eventData));
		ACEController.registerFactory('category.NewCategoryClickOkEvent', 
			(eventData) => new NewCategoryClickOkEvent(eventData));
		ACEController.registerFactory('category.CancelNewCategoryOkEvent', 
			(eventData) => new CancelNewCategoryOkEvent(eventData));
		ACEController.registerFactory('category.CategoryNameChangedOkEvent', 
			(eventData) => new CategoryNameChangedOkEvent(eventData));
		ACEController.registerFactory('category.CreateCategoryOkEvent', 
			(eventData) => new CreateCategoryOkEvent(eventData));
		ACEController.registerFactory('category.CreateCategoryErrorEvent', 
			(eventData) => new CreateCategoryErrorEvent(eventData));
		ACEController.registerFactory('category.DeleteCategoryClickOkEvent', 
			(eventData) => new DeleteCategoryClickOkEvent(eventData));
		ACEController.registerFactory('category.CancelDeleteCategoryOkEvent', 
			(eventData) => new CancelDeleteCategoryOkEvent(eventData));
		ACEController.registerFactory('category.DeleteCategoryOkEvent', 
			(eventData) => new DeleteCategoryOkEvent(eventData));
		ACEController.registerFactory('category.DeleteCategoryErrorEvent', 
			(eventData) => new DeleteCategoryErrorEvent(eventData));
		ACEController.registerFactory('category.EditCategoryClickOkEvent', 
			(eventData) => new EditCategoryClickOkEvent(eventData));
		ACEController.registerFactory('category.CancelEditCategoryOkEvent', 
			(eventData) => new CancelEditCategoryOkEvent(eventData));
		ACEController.registerFactory('category.UpdateCategoryOkEvent', 
			(eventData) => new UpdateCategoryOkEvent(eventData));
		ACEController.registerFactory('category.UpdateCategoryErrorEvent', 
			(eventData) => new UpdateCategoryErrorEvent(eventData));
		ACEController.registerFactory('category.CheckDropAllowedOkEvent', 
			(eventData) => new CheckDropAllowedOkEvent(eventData));
		ACEController.registerFactory('category.MoveCategoryStartedOkEvent', 
			(eventData) => new MoveCategoryStartedOkEvent(eventData));
		ACEController.registerFactory('category.MoveCategoryOkEvent', 
			(eventData) => new MoveCategoryOkEvent(eventData));
		ACEController.registerFactory('category.ChangeOrderCategoryOkEvent', 
			(eventData) => new ChangeOrderCategoryOkEvent(eventData));
		ACEController.registerFactory('category.PreviewCsvOkEvent', 
			(eventData) => new PreviewCsvOkEvent(eventData));
		ACEController.registerFactory('category.CancelPreviewCsvOkEvent', 
			(eventData) => new CancelPreviewCsvOkEvent(eventData));
		ACEController.registerFactory('category.SwapPreviewCsvOkEvent', 
			(eventData) => new SwapPreviewCsvOkEvent(eventData));
		ACEController.registerFactory('category.ImportCsvOkEvent', 
			(eventData) => new ImportCsvOkEvent(eventData));
	}

}




/******* S.D.G. *******/



