import React, { Component } from 'react'
import  Item  from './Item'

export class Items extends Component {
  render() {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() =>{
      const getPostsFromFirebase = []
    })
    return (
      <main>
        {/* {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
        ))} */}

      </main>
    )
  }
}

export default Items






