import React, { Component } from 'react'

export class product extends Component {



    render() {
        return (
                <div className="row">
                    <div className="col-lg-6">
                                <div className="row mb-2">
                                <div className="col-2"><span>{this.props.product.name}</span></div>
                                <div className="col-1"><span style={{width:40},{height:40},{fontSize:17}} className={this.props.product.count == 0 ? 'badge bg-danger mt-1': 'badge bg-primary mt-1'}>{this.props.product.count}</span></div>
                                <div className="col-1"> <button className="btn btn-primary" onClick={()=>this.props.onIncrement(this.props.product)} ><i class="fas fa-plus"></i></button> </div>
                                <div className="col-1"> <button className="btn btn-primary" onClick={()=>this.props.onDecrement(this.props.product)}><i class="fas fa-minus"></i></button> </div>
                                <div className="col-1"> <button className="btn btn-primary" onClick={()=>this.props.onDelete(this.props.product)}><i class="fas fa-trash"></i></button> </div>
                                {this.props.product.count <= 0 ? 
                                     <div className="col-6"><span style={{textTransform:'uppercase'}} className="text-danger mt-1">delet this or increment Number</span></div>
                                :
                                ''
                                }
                                </div>
                    </div> 
            </div>
        )
    }
}

export default product
