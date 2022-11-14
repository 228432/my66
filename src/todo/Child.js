import React, { Component } from 'react'
export default class Child extends Component {

    state={ //state对内接口 只能组件内部修改    props 对完接口 只读属性 只能通过父组件修改
        index:1,
        age:19,
        bool:true
    }
     static getDerivedStateFromProps(){
          console.log('getDerivedStateFromProps 1 4');
     }
     componentDidMount(){
      console.log('componentDidMount 3');
     }
     shouldComponentUpdate(){
       console.log('shouldComponentUpdate 5');
       return true
     }

     getSnapshotBeforeUpdate(){
      
      console.log('getSnapshotBeforeUpdate 7');
      return null
     }

     componentWillReceiveProps(){
      console.log('componentWillReceiveProps');
     }

     componentDidUpdate(){
      console.log('componentDidUpdate 8');
      
     }

     componentWillUnmount(){
      console.log('componentWillUnmount 9');
     }

     
     
    //初始化阶段
   render(){
    console.log('render 2 6');
    return(
      <div>
        <button onClick={()=>{
          this.props.changenameage()
          this.setState({
            age:22
          })
        }}>
          1111
        </button>
        <input type='text' ref={this.props.ref1} onChange={()=>{
          // console.log(this.ref1.current.value)
        }}/>
          {/* {this.ref1.current.value} */}
        {/* {this.state.age}
              1111 */}
      </div>
    )
   }

  
}
