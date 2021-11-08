import React ,{Component} from 'react'
import {Redirect, Link } from 'react-router-dom';
import qs from 'query-string';

class Productdetails extends React.Component {
    handleSave = () =>{
        console.log('save')
        this.props.history.replace('/card')
    }
    render() { 
        const a =qs.parse(this.props.location.search)
        console.log(a)
        const product =this.props.products.find( c=> c.id === parseInt(this.props.match.params.id))
        console.log(product)
        if (!product) return <Redirect to="/notfound" />

        
        
        return (
            <div className="container">
                <h1>{product.id}</h1> 
                <h1>{product.name}</h1>
                <h1>{product.count}</h1> 
                <button  className="btn btn-primary" onClick={this.handleSave}> Save </button> 
                <br />
                <Link to="/card">back</Link>
            </div>
        );
    }
}
 
export default Productdetails;