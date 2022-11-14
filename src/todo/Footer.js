import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    let{clearTodo,shanxuanTodo,view,length}=this.props
    return (
        <footer className="footer">
               <span className="todo-count">
                  <strong>{length}</strong>
                  <span>{' items left'}</span>
              </span>
           <ul className="filters">
               <li>
                   <a href="#/all"className={view==='all'? 'selected':''} onClick={()=>{shanxuanTodo('all')}} >All</a>
               </li>
               <li>
                   <a href="#/active" className={view==='active'? 'selected':''}onClick={()=>{shanxuanTodo('active')}}>Active</a>
               </li>
               <li>
                   <a href="#/complete"className={view==='completed'? 'selected':''} onClick={()=>{shanxuanTodo('completed')}}>Completed</a>
               </li>
           </ul>
           <button className="clear-completed" onClick={clearTodo}>
               Clear commpleted
           </button>
         </footer>

    )
  }
}
