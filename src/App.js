import React, { Component } from 'react';
import Card from './component/card';
import Navbar from './component/navbar';



class App extends Component {
  state={
    products:[
        {id:1, name:'cola',count:'5'},
        {id:2, name:'burger',count:'0'},
        {id:3, name:'pepsi',count:'2'},
        {id:4, name:'mango',count:'9'},
        {id:5, name:'Apple',count:'7'},
        {id:6, name:'cola',count:'5'},
        {id:7, name:'burger',count:'0'},
        {id:8, name:'pepsi',count:'2'},
        {id:9, name:'mango',count:'9'},
        {id:10, name:'Apple',count:'1'},
        {id:11, name:'cola',count:'5'},
        {id:12, name:'burger',count:'0'},
        {id:13, name:'pepsi',count:'2'},
        {id:14, name:'mango',count:'9'},
        {id:15, name:'Apple',count:'3'},
    ]
}
restHandler = () =>{
  const products = [...this.state.products]
  products.map(p =>{
      p.count = 0;
      return p
  })
  this.setState({products})
}

incrementHandler =product =>{
  const products= [...this.state.products]
  const index = products.indexOf(product)
  products[index] = { ...products[index] }
  products[index].count ++
  this.setState({ products })
}
decrementHandler = product =>{
  const products = [...this.state.products]
  const index = products.indexOf(product)
  product[index] = {...products[index]}
  products[index].count --
  this.setState({products})

  if(products[index].count <= 0) {
    products[index].count=0
}

console.log(product)
}
deleteHandler = product =>{
  const newproducts = this.state.products.filter(p => p.id !== product.id)
    this.setState({products:newproducts})
}
render(){
  return (
    <div className="App">
      <Navbar proCount = {this.state.products.filter(p => p.count > 0).length}/>
      <Card 
      product={this.state.products} 
      restHandler={this.restHandler}
      onIncrement={this.incrementHandler}
      onDecrement={this.decrementHandler}
      onDelete ={this.deleteHandler}
      />
    </div>
  );
}
}

export default App;
