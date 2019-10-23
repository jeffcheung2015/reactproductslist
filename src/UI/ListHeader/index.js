import React, { Component } from 'react';
import "./index.scss"
import PropTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react'
import ListHeader from 'UI/ListHeader';

class IndexHeader extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const {
      noOfProducts, sortType
    } = this.props

    return(
      <div className="div-indexHeader-wrapper">
        <span className="span-header">
          顯示 {noOfProducts} 個產品
        </span>
        <div className="div-viewOptions-container">
          <div className="div-searchSelection-container">
            <Label color="black" className="Label-sortTypeTab">
              篩選
            </Label>
            <Label className="Label-sortTypeTab">
              排序方式 - {sortType}
            </Label>
          </div>
          <div className="div-viewSelect-container">
            <Icon className="Icon-viewSelect" name="th" size="large"/>
            <Icon className="Icon-viewSelect" name="list" size="large"/>
          </div>
        </div>

      </div>
    )
  }
}
export default IndexHeader;

IndexHeader.protoTypes = {
  noOfProducts: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired
}
