// import React from 'react';
// import Header from './elements/Header';
// import Footer from './elements/Footer';
// import Items from './elements/Items';
// import Categories from './elements/Categories';
// import ShowFullItem from './elements/ShowFullItem';


// class App extends React.element {
//   constructor(props) {
//     super(props)
//     this.state = {
//       orders: [],
//       currentItems:[],
//       items: [
//         {
//           id:1,
//           title:'odezda',
//           img:'kofta.jpg',
//           desc:'стильно, модно, молодежно!',
//           category: 'kofts',
//           price: '15.50'
//         },
//         {
//           id:2,
//           title:'odezda',
//           img:'sviter.jpg',
//           desc:'стильно, модно, молодежно!',
//           category: 'sviters',
//           price: '15.50'
//         },
//         {
//           id:3,
//           title:'odezda',
//           img:'futbolka.jpg',
//           desc:'стильно, модно, молодежно!',
//           category: 'futbolks',
//           price: '15.50'
//         },
//         {
//           id:4,
//           title:'odezda',
//           img:'',
//           desc:'стильно, модно, молодежно!',
//           category: 'kofta',
//           price: '15.50'
//         },
//       ],
//       ShowFullItem:false,
//       fullItem:{},
//     }
//     this.state.currentItems = this.state.items
//     this.addToOrder = this.addToOrder.bind(this)
//     this.deleteOrder = this.deleteOrder.bind(this)
//     this.chooseCategory = this.chooseCategory.bind(this)
//     this.onShowItem = this.onShowItem.bind(this)
//   }
//   render(){
//     return (
//       <div className='wrapper'>
//         <Header orders={this.state.orders} onDelete={this.deleteOrder} />
//         <Categories chooseCategory={this.chooseCategory} />
//         <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
//         {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
//         <Footer/>
//       </div>
//     );
//   }

//   onShowItem(item) {
//     this.setState({fullItem:item})
//     this.setState({ShowFullItem: !this.state.ShowFullItem})
//   }

// chooseCategory(category){
//   if(category === 'all'){
//     this.setState({currentItems: this.state.items})
//     return
//   }
//   this.setState({
//     currentItems: this.state.items.filter(el => el.category === category)
//   })
// }

//   deleteOrder(id) {
//     this.setState({orders: this.state.orders.filter(el => el.id !== id)})
//   }

//   addToOrder(item){
//     let isInArray = false
//     this.state.orders.forEach(el => {
//       if(el.id === item.id)
//       isInArray = true
//     })
//     if(!isInArray)
//       this.setState({orders: [...this.state.orders, item]})
  
//   }
// }

// export default App;
import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About'
import AddEdit from './pages/AddEdit'
import Home from './pages/Home'
import View from './pages/View'


import Header from './components/Header/Header'

function App() {
  return (
  <div className='wrapper'>
    <BrowserRouter>
    <Header/>
    
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/add' element={<AddEdit/>} />
            <Route path='/update/:id' element={<AddEdit/>} />
            <Route path='/view/:id' element={<View/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
    </BrowserRouter>


        {/* <Header orders={this.state.orders} onDelete={this.deleteOrder} />
         <Categories chooseCategory={this.chooseCategory} />
         <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        
         {this.state.ShowFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer/> */}
  </div>
 
  )
}

export default App