import React, { Component } from 'react'
import Product from './product'

export class Card extends Component {
    render() {
        const {restHandler,onDelete,onIncrement,onDecrement,product} =this.props
        return (
            <div>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12">
                            <h1 style={{textTransform:'uppercase'}} className="mt-2 mb-4">Shoping Card</h1>
                            </div>
                            <div className="col-md-3">
                            {product.length > 0 ? <button className="btn btn-danger btn-block mb-3 w-100" onClick={restHandler}>Reast</button> : ''}
                            {product.length === 0  && <h1>No Data</h1>}
                            </div>
                        </div>
                        
                        {product.map(pro =>{
                            return(
                                <Product 
                                key={pro.id}
                                product={pro}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                />
                            )
                        })}

                    </div>
            </div>
        )
    }
}

export default Card
