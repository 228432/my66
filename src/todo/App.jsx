import React, { Component } from 'react'
import Footer from '@/Footer'
import Item from '@/Item'
import '@/css/index.css'
export default class App extends Component {
state={
  list:[],
  length:0,
  view:'all',
  bool:true
}
//添加todo
addTodo=(evt)=>{
  if(evt.key!=='Enter')return
  let{list,length}=this.state
  let value=evt.target.value
  if(value==='')return
  let obj={}
  obj.id=new Date().getTime()
  obj.title=value
  obj.completed=false
  list.push(obj)
  ++length
  this.setState({list,length})
  evt.target.value=''
}
//删除todo
deleteTodo=(todo)=>{
  let{list,length}=this.state
 list= list.filter(item=>item.id!==todo.id)
 --length
  this.setState({list,length})
}
//选中todo
selectTodo=(todo)=>{
  let{list,length}=this.state
  list=list.map(item=>{
    if(item.id===todo.id){
      item.completed=!todo.completed
      if(item.completed){--length}else{++length}
    return item 
    }
    return item
  })
  this.setState({list,length})
}
//修改todo
changeTodo=(todo)=>{
  let{list}=this.state
  list=list.map(item=>{
    if(item.id===todo.id){
      item.title=todo.title
    return item 
    }
    return item
  })
  this.setState({list})
}
//全选todo
selectAllTodo=()=>{
  let{list,length,bool}=this.state
  list=list.map(item=>{
    item.completed=bool
    return item
  })
  if(bool){length=0}else{length=list.length}
  this.setState({list,length,bool:!bool})
}

//一键清空已选
clearTodo=()=>{
  let{list}=this.state
  list=list.filter(item=>!item.completed)
  this.setState({list})
}
//筛选todo
shanxuanTodo=(text)=>{
  this.setState({view:text})
}

  render() {
    let{addTodo,deleteTodo,selectTodo,changeTodo,selectAllTodo,clearTodo,shanxuanTodo}=this
    let{list,length,view}=this.state
    let filter=list.filter(item=>{
      switch(view){
        case 'all':
          return true
        case 'active':
          return !item.completed
        case 'completed':
          return item.completed
      }
    })
    return (
      <section className="todoapp">
      <header className="header">
           <h1>Todos</h1>
           <input type="text" className="new-todo" onKeyUp={addTodo}  placeholder='What needs to be done '/>
      </header>
      <section className="main">
         <input id="toggle-all" type="checkbox" className="toggle-all" onChange={selectAllTodo}/>
         <label htmlFor="toggle-all" ></label>
         <ul className="todo-list">
          {
            filter.map(item=>
              <Item key={item.id} todo={item} changeTodo={changeTodo}  deleteTodo={deleteTodo} selectTodo={selectTodo}/>)
          }
         </ul>
      </section>
      <Footer clearTodo={clearTodo} shanxuanTodo={shanxuanTodo} view={view} length={length}/>
   </section>

    )
  }
}

