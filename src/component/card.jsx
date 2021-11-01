import React, { Component } from 'react'
import Product from './product'

export class Card extends Component {
    render() {
        return (
            <div>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                            <h1 style={{textTransform:'uppercase'}} className="mt-2 mb-4">Shoping Card</h1>
                            </div>
                            <div className="col-md-3">
                            {this.props.product.length > 0 ? <button className="btn btn-danger btn-block mb-3 w-100" onClick={this.props.restHandler}>Reast</button> : ''}
                            {this.props.product.length === 0  && <h1>No Data</h1>}
                            </div>
                        </div>
                        
                        {this.props.product.map(pro =>{
                            return(
                                <Product 
                                key={pro.id}
                                product={pro}
                                onDelete={this.props.onDelete}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                />
                            )
                        })}

                    </div>
            </div>
        )
    }
}

export default Card
