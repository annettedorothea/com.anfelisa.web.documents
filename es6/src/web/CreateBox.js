import React from 'react';
import CategorySelection from "./CategorySelection";
import MaxIntervalChangedAction from "../box/actions/MaxIntervalChangedAction";
import ToggleMaxIntervalAction from "../box/actions/ToggleMaxIntervalAction";
import CategorySelectedAction from "../box/actions/CategorySelectedAction";
import CreateBoxAction from "../box/actions/CreateBoxAction";
import RouteAction from "../common/actions/RouteAction";

export default class CreateBox extends React.Component {

    constructor(props) {
        super(props);
        this.onMaxIntervalChange = this.onMaxIntervalChange.bind(this);
        this.onMaxIntervalCheckedChange = this.onMaxIntervalCheckedChange.bind(this);
        this.onCategorySelected = this.onCategorySelected.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    onMaxIntervalChange(event) {
        const maxInterval = event.target.value;
        new MaxIntervalChangedAction({maxInterval}).apply();
    }

    onMaxIntervalCheckedChange() {
        new ToggleMaxIntervalAction().apply();
    }

    onCategorySelected(event) {
        const selectedCategoryId = event.target.value;
        new CategorySelectedAction({selectedCategoryId}).apply();
    }

    onCreate() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            selectedCategoryId: this.props.data.selectedCategoryId,
            maxInterval: this.props.data.maxInterval
        };
        new CreateBoxAction(data).apply();

    }

    render() {
        const categoryItems = this.props.data.categoryList.map((category) => {
            return <CategorySelection
                key={category.categoryId}
                {...category}
                onCategorySelected={this.onCategorySelected}
                checked={category.categoryId === this.props.data.selectedCategoryId}
            />
        });
        const canSave = this.props.data.selectedCategoryId.length > 0 && (this.props.data.maxIntervalChecked && this.props.data.maxInterval.length > 0 || !this.props.data.maxIntervalChecked);
        return (
            <div>
                <h1>{this.props.texts.createBox.title}</h1>

                <input id="maxIntervalCheckbox" type={"checkbox"} value={this.props.data.maxIntervalChecked} onChange={this.onMaxIntervalCheckedChange}/>
                <label for="maxIntervalCheckbox">{this.props.texts.createBox.maxInterval}</label>

                <input type="number" value={this.props.data.maxInterval} onChange={this.onMaxIntervalChange} disabled={!this.props.data.maxIntervalChecked}/>

                {categoryItems}

                <button disabled={!canSave} onClick={this.onCreate}>{this.props.texts.createBox.create}</button>
                <button onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#"
                    }).apply()}>{this.props.texts.createBox.cancel}</button>
            </div>
        );
    }
}

