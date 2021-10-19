import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addItem,
  selectItem,
  deselectItem,
  removeItem,
} from "../ducks/groceries";

import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";

const mapStateToProps = ({
  groceries: { list: groceryList, selectedItem },
}) => ({
  groceryList,
  selectedItem,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addItem,
      selectItem,
      deselectItem,
      removeItem,
    },
    dispatch
  );

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log("groceryList", this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("groceryList11", nextProps, this);
  }

  render() {
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={this.props.addItem} />
        </div>
        <div className="types">
          <ListSelection selectedItem={this.props.selectedItem} />
          <ListTable
            selectItem={this.props.selectItem}
            deselectItem={this.props.deselectItem}
            removeItem={this.props.removeItem}
            items={this.props.groceryList}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
