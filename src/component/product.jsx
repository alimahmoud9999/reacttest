import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class product extends Component {


    // componentWillUnmount() {
    //     console.log('aa')
    // }
    render() {
        const {product,onIncrement,onDecrement,onDelete}= this.props;
        return (
            <div style={{
                border: '1px solid #eee',
                padding: '8px',
                borderRadius: 12,
                marginBottom: 15
            }} className="box">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row ">
                                    <div className="col-md-2 col"><Link to={`product/${product.id}`}>{product.name}</Link></div>
                                    <div className="col-md-1 col-2"><span style={{ width: 40, height: 40, fontSize: 17, lineHeight: '28px' }}
                                        className={product.count === 0 ? 'badge bg-danger mt-1' : 'badge bg-primary mt-1'}>{product.count}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="row ">
                                    <div className="col-md-1 col-2">
                                        <button className="btn btn-primary" onClick={() => onIncrement(product)}> <i class="fas fa-plus"></i> </button>
                                    </div>
                                    <div className="col-md-1 col-2">
                                        <button className="btn btn-primary" onClick={() => onDecrement(product)}> <i class="fas fa-minus"></i> </button>
                                    </div>
                                    <div className="col-md-1 col-2">
                                        <button className="btn btn-primary" onClick={() => onDelete(product)}> <i class="fas fa-trash"></i> </button>
                                    </div>
                                    {this.props.product.count <= 0 ?
                                        <div className="col-md-9 col-6">
                                            <span style={{ textTransform: 'uppercase' }} className="text-danger mt-1">delete this or increment Number</span>
                                        </div>
                                        :
                                        ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default product
