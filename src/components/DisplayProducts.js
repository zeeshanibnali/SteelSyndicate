import React from 'react';
import Product from './Product';
import './DisplayProducts.css';

class DisplayProducts extends React.Component {

    render() {
        return !this.props.products ?
        <h1>LOADING</h1> :
            (
              <div className="displayProducts">
              {
                this.props.products.map((product, i) => {
                  return (
                    <Product
                      key={i}
                      name={this.props.products[i].name}
                      category={this.props.products[i].category}
                      dimensions={this.props.products[i].dimensions}
                      unit={this.props.products[i].unit}
                      stock={this.props.products[i].stock}
                    />
                  );
                })
              }
              </div>
        ); 
    }
}


export default DisplayProducts;