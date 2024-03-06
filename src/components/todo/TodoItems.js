import React,{Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createItems = this.createItems.bind(this);
        // this.deleteItems = this.deleteItems.bind(this);
    }

    deleteItems(key){
        return this.props.delete(key)
    }

    createItems(item){
        return <li key = {item.key} onClick={()=>this.props.delete(item.key)}>{item.text}</li>
    }


    render(){

        let itemsToCreate = this.props.entries;
        let items = itemsToCreate.map((i) => this.createItems(i));

        return (
            <ul className='ListItems'>
                <FlipMove duration={250} easing='ease-out'>
                {items}
                </FlipMove>
                
                </ul>
        );
    }
}

export default TodoItems;