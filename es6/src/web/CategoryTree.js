import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import CategoryItem from "./CategoryTree/CategoryItem";

export default class CategoryTree extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log("TREE", this.props);
        const categoryItems = this.props.data.categoryList.map((category) => {
            return <CategoryItem
                {...category}
                childCategories={category.childCategories}
                depth={0}
                texts={this.props.texts}
                language={this.props.language}
                key={category.categoryId}
            />
            s
        });

        return (
            <div className="categoryTree">
                <div className="categoryTreeItems">

                    {categoryItems}

                </div>
                <button className="backButton"
                        onClick={() => new RouteAction("#dashboard").apply()}>
                    {this.props.texts.categoryList.back[this.props.language]}
                </button>

            </div>
        );
    }
}


