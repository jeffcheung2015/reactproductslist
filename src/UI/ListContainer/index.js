import React, { Component } from 'react';
import "./index.scss"
import PropTypes from 'prop-types';
import { Label, Grid, Image } from 'semantic-ui-react'
import _map from 'lodash/map';
import StarRatingComponent from 'react-star-rating-component';

class ListContainer extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const {
      prodList
    } = this.props

    return(
      <div className="div-listContainer-wrapper">
        <Grid verticalAlign="middle" columns={2} className="Grid-listContainer">
          {
            _map(prodList, (e, i) => (
              <Grid.Row key={"div-prod-" + i}>
                <Grid.Column>
                  <Image className="Image-prodImg" src={e.prodImg}/>
                </Grid.Column>

                <Grid.Column>
                  <Grid.Row>
                    <div className="div-prodName div-prodCommon">
                      {e.prodName || "N/A"}
                    </div>
                  </Grid.Row>

                  <Grid.Row>
                    <div className="div-prodDesc div-prodCommon">
                      {e.prodDesc || "N/A"}
                    </div>
                  </Grid.Row>

                  <Grid.Row>
                    <StarRatingComponent
                      name="userRating"
                      className="Rating-stars"
                      starCount={5}
                      value={e.userRating}
                      starColor="#d1c491"
                      emptyStarColor="#b2b2b2"
                      editing={false}
                    />
                  </Grid.Row>

                  <Grid.Row>
                    <div className="div-suggestPrice div-prodCommon">
                      建議零售價&nbsp;
                      <span className="span-price">
                        ${e.suggestPrice.toFixed(1) || "00.0"}
                      </span>
                    </div>
                  </Grid.Row>

                  <Grid.Row className="GridRow-prodComparison">
                    <Label className="Label-prodComparison">
                      產品比較
                    </Label>
                  </Grid.Row>
                </Grid.Column>
              </Grid.Row>
            ))
          }
        </Grid>

      </div>
    )
  }
}
export default ListContainer;

ListContainer.protoTypes = {
  prodList:PropTypes.arrayOf(
    PropTypes.shape({
      prodName: PropTypes.string.isRequired,
      prodDesc: PropTypes.string.isRequired,
      suggestPrice: PropTypes.number.isRequired,
      userRating: PropTypes.number.isRequired
    })
  ).isRequired
}
