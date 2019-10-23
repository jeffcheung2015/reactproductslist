import React, { Component } from 'react';
import "./index.scss"
import PropTypes from 'prop-types';
import { Icon, } from 'semantic-ui-react'
import ListHeader from 'UI/ListHeader';
import ListContainer from 'UI/ListContainer';
import images from 'importImages'

class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.dummyProdList = [
      {
        prodImg: images[0],
        prodName: "OLAY 新生深層潔面乳 Regenerist Micro-sculpting Cleanser",
        prodDesc: "深層潔淨同時高效抗衰老，溫和代謝老化角質",
        suggestPrice: 119.9,
        userRating: 5
      },
      {
        prodImg: images[1],
        prodName: "OLAY 新生淡紋緊緻眼霜 Regenerist Eye lifting serum",
        prodDesc: "減退眼角細紋，淡化暗沉，提亮膚色，使眼周肌膚回復緊緻彈性",
        suggestPrice: 199.9,
        userRating: 0
      },
      {
        prodImg: images[2],
        prodName: "OLAY 新生3D 彈力眼霜 Regenerist Micro-sculpting 3D Elastic Eye Concentrate",
        prodDesc: "深層滋潤乾燥的眼周肌膚，撫平細紋、提拉緊緻",
        suggestPrice: 239.9,
        userRating: 2
      },
      {
        prodImg: images[3],
        prodName: "OLAY 新生高效輕盈緊緻日霜 Regenerist Micro-sculpting Super Day Cream SPF30",
        prodDesc: "美國進口防曬日霜，促進膠原蛋白增生，日間輕盈抗UV",
        suggestPrice: 239.9,
        userRating: 4
      },
      {
        prodImg: images[4],
        prodName: "OLAY 新生高效緊緻活膚露 Regenerist Micro-sculpting Super Essence Water",
        prodDesc: "蘊含近90%精華成分，極致保濕，減淡細紋，重現無痕緊緻",
        suggestPrice: 219.9,
        userRating: 2
      },
      {
        prodImg: images[5],
        prodName: "OLAY 新生高效緊緻護膚霜 Regenerist Micro-sculpting Super Cream",
        prodDesc: "新昇級第4代Super Cream，激發膠原增生，賦彈性、淡皺紋、緊輪廓",
        suggestPrice: 239.9,
        userRating: 3
      },
      {
        prodImg: images[6],
        prodName: "OLAY 新生肌源青春精華露 Regenerist Miracle Boost Youth Pre-Essence",
        prodDesc: "「導入+精華」一瓶搞定，瞬透15層肌底，加強後續修護精華深層滲透",
        suggestPrice: 289.9,
        userRating: 0
      },
      {
        prodImg: images[7],
        prodName: "OLAY 新生高效緊緻精華露 Regenerist Micro-sculpting Super Serum",
        prodDesc: "雙重氨基酸肽專利的抗老化配方，重塑彈性，減褪細紋",
        suggestPrice: 239.9,
        userRating: 3
      }

    ]
  }

  render(){

    return(
      <div className="div-productList-wrapper">
        <ListHeader noOfProducts={8} sortType={"Feature Sort"}/>
        <ListContainer prodList={this.dummyProdList}/>
      </div>
    )
  }
}
export default ProductList;

ProductList.protoTypes = {

}
