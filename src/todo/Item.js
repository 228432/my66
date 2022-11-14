import classNames from 'classnames'
import React, { Component } from 'react'

export default class item extends Component {
  state={
    inE:false
  }
  ref=React.createRef()
  render() {
    let{todo,deleteTodo,selectTodo,changeTodo}=this.props
    let{inE}=this.state
    let completed=todo.completed?'completed':''
    let classes=inE? completed+' editing':completed
    return (
        <li className={classes}>
        <div className="view">
            <input type="checkbox" className="toggle" checked={todo.completed} onChange={()=>{selectTodo(todo)}}/>
            <label onDoubleClick={()=>{this.setState({inE:!inE},()=>{this.ref.current.value=todo.title; this.ref.current.focus()});}}>
              {todo.title}
            </label>
            <button className="destroy" onClick={()=>{deleteTodo(todo)}}></button>
        </div>
        <input type="text" className="edit" ref={this.ref} onBlur={inE?()=>{
          todo.title=this.ref.current.value
          changeTodo(todo)
          this.setState({inE:!inE})
        }:null} 
        onKeyUp={(evt)=>{
          if(evt.key==='Enter'){
          todo.title=this.ref.current.value
          changeTodo(todo)
          this.setState({inE:!inE})
          }
        }}
        /> 
     </li>
    )
  }
}
