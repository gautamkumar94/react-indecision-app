import React from 'react'
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'





  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



  class OldSyntex{
      constructor(){
          this.name = "gautam"
          this.getGreetig = this.getGreetig.bind(this)
      }

      getGreetig(){
          return `hi my name is ${this.name}. `
      }
  }
  const oldSyntex = new OldSyntex();
  console.log(oldSyntex)
//   console.log(oldSyntex.getGreetig())
const oldSyntextGreet = oldSyntex.getGreetig
console.log(oldSyntextGreet)

//   -------


class NewSyntex {
    name='tripti';

    getGreeting = ()=>{
        return `hi my name is ${this.name}.`
    }
}
const newSystex = new NewSyntex();
const newSyntexGreet = newSystex.getGreeting;
console.log(newSyntexGreet())