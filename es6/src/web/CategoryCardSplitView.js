import React from 'react';
import CardList from "./CardList/CardList";
import CategoryTree from "./CategoryTree/CategoryTree";

export default class CategoryCardSplitView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="categoryCardSplitView">

                <CategoryTree {...this.props} />

                {this.props.data.cardList && <CardList {...this.props} />}

            </div>
        );
    }
}


