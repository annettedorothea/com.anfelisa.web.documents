/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import LoadCategoryTreeOkEvent from "./events/LoadCategoryTreeOkEvent";
import ReloadCategoryTreeOkEvent from "./events/ReloadCategoryTreeOkEvent";
import ExpandTreeItemOkEvent from "./events/ExpandTreeItemOkEvent";
import CollapseTreeItemOkEvent from "./events/CollapseTreeItemOkEvent";
import CollapseTreeItemSelectParentCategoryEvent from "./events/CollapseTreeItemSelectParentCategoryEvent";
import SelectTreeItemOkEvent from "./events/SelectTreeItemOkEvent";
import NewCategoryClickOkEvent from "./events/NewCategoryClickOkEvent";
import CancelCategoryDialogOkEvent from "./events/CancelCategoryDialogOkEvent";
import CategoryNameChangedOkEvent from "./events/CategoryNameChangedOkEvent";
import CreateCategoryOkEvent from "./events/CreateCategoryOkEvent";
import EditCategoryClickOkEvent from "./events/EditCategoryClickOkEvent";
import UpdateCategoryOkEvent from "./events/UpdateCategoryOkEvent";
import InviteUserClickOkEvent from "./events/InviteUserClickOkEvent";
import GetInvitedUsernamesOkEvent from "./events/GetInvitedUsernamesOkEvent";
import CancelInviteUserOkEvent from "./events/CancelInviteUserOkEvent";
import InvitedUsernameChangedOkEvent from "./events/InvitedUsernameChangedOkEvent";
import InvitedUsernameChangedTooShortEvent from "./events/InvitedUsernameChangedTooShortEvent";
import SearchUsernameOkEvent from "./events/SearchUsernameOkEvent";
import InviteUserOkEvent from "./events/InviteUserOkEvent";
import DeleteCategoryClickOkEvent from "./events/DeleteCategoryClickOkEvent";
import CancelDeleteCategoryOkEvent from "./events/CancelDeleteCategoryOkEvent";
import DeleteCategoryOkEvent from "./events/DeleteCategoryOkEvent";
import DeleteCategoryErrorEvent from "./events/DeleteCategoryErrorEvent";
import CheckDropAllowedOkEvent from "./events/CheckDropAllowedOkEvent";
import MoveCategoryStartedOkEvent from "./events/MoveCategoryStartedOkEvent";
import MoveCategoryOkEvent from "./events/MoveCategoryOkEvent";
import ChangeOrderCategoryOkEvent from "./events/ChangeOrderCategoryOkEvent";
import PreviewCsvOkEvent from "./events/PreviewCsvOkEvent";
import CancelPreviewCsvOkEvent from "./events/CancelPreviewCsvOkEvent";
import SwapPreviewCsvOkEvent from "./events/SwapPreviewCsvOkEvent";
import ImportCsvOkEvent from "./events/ImportCsvOkEvent";
import FilterNonScheduledCardsOkEvent from "./events/FilterNonScheduledCardsOkEvent";
import PriorityChangedOkEvent from "./events/PriorityChangedOkEvent";

export default class EventFactoryRegistrationCategory {

	static init() {
		ACEController.registerFactory('category.LoadCategoryTreeOkEvent', 
			(eventData) => new LoadCategoryTreeOkEvent(eventData));
		ACEController.registerFactory('category.ReloadCategoryTreeOkEvent', 
			(eventData) => new ReloadCategoryTreeOkEvent(eventData));
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
		ACEController.registerFactory('category.CancelCategoryDialogOkEvent', 
			(eventData) => new CancelCategoryDialogOkEvent(eventData));
		ACEController.registerFactory('category.CategoryNameChangedOkEvent', 
			(eventData) => new CategoryNameChangedOkEvent(eventData));
		ACEController.registerFactory('category.CreateCategoryOkEvent', 
			(eventData) => new CreateCategoryOkEvent(eventData));
		ACEController.registerFactory('category.EditCategoryClickOkEvent', 
			(eventData) => new EditCategoryClickOkEvent(eventData));
		ACEController.registerFactory('category.UpdateCategoryOkEvent', 
			(eventData) => new UpdateCategoryOkEvent(eventData));
		ACEController.registerFactory('category.InviteUserClickOkEvent', 
			(eventData) => new InviteUserClickOkEvent(eventData));
		ACEController.registerFactory('category.GetInvitedUsernamesOkEvent', 
			(eventData) => new GetInvitedUsernamesOkEvent(eventData));
		ACEController.registerFactory('category.CancelInviteUserOkEvent', 
			(eventData) => new CancelInviteUserOkEvent(eventData));
		ACEController.registerFactory('category.InvitedUsernameChangedOkEvent', 
			(eventData) => new InvitedUsernameChangedOkEvent(eventData));
		ACEController.registerFactory('category.InvitedUsernameChangedTooShortEvent', 
			(eventData) => new InvitedUsernameChangedTooShortEvent(eventData));
		ACEController.registerFactory('category.SearchUsernameOkEvent', 
			(eventData) => new SearchUsernameOkEvent(eventData));
		ACEController.registerFactory('category.InviteUserOkEvent', 
			(eventData) => new InviteUserOkEvent(eventData));
		ACEController.registerFactory('category.DeleteCategoryClickOkEvent', 
			(eventData) => new DeleteCategoryClickOkEvent(eventData));
		ACEController.registerFactory('category.CancelDeleteCategoryOkEvent', 
			(eventData) => new CancelDeleteCategoryOkEvent(eventData));
		ACEController.registerFactory('category.DeleteCategoryOkEvent', 
			(eventData) => new DeleteCategoryOkEvent(eventData));
		ACEController.registerFactory('category.DeleteCategoryErrorEvent', 
			(eventData) => new DeleteCategoryErrorEvent(eventData));
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
		ACEController.registerFactory('category.FilterNonScheduledCardsOkEvent', 
			(eventData) => new FilterNonScheduledCardsOkEvent(eventData));
		ACEController.registerFactory('category.PriorityChangedOkEvent', 
			(eventData) => new PriorityChangedOkEvent(eventData));
	}

}




/******* S.D.G. *******/



