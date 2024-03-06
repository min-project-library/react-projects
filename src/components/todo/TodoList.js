import React,{Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component{

    constructor(props){
        super(props)
        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let currItems = this.state.items;
        if(this._inputElement.value !=""){
            

            currItems.unshift({text:this._inputElement.value,key:Date.now()})

            this.setState({items:currItems});
            this._inputElement.value = ""
            this._inputElement.focus();
            
        }
        console.log(currItems);
        e.preventDefault();
    }

    deleteItem(key){
        console.log(key)
        let filteredItems = this.state.items.filter((item)=>item.key !== key);
        this.setState({items:filteredItems})
    }



    render(){
        let self= this;
        return(
            <div className="todobody">
                <div className="todocontainer">
                <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a)=> self._inputElement = a} placeholder="enter task" type="text"></input>
                        <button type="submit" >Add</button>
                    </form>
                </div>
                <TodoItems delete = {this.deleteItem}entries={this.state.items}/>
            </div>
                </div>
            </div>
            
        );
    }
}


export default TodoList;