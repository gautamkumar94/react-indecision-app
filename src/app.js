const obj = {
    name : 'vikram',

    getName(){
       return this.name;
    }
};

// console.log(obj.getName());

const getName = obj.getName.bind(obj);
// console.log(getName())

class IndecisionApp extends React.Component {
constructor(props){
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state ={
        options : []
    }
}
    handleDeleteOptions(){
        this.setState(() =>{
            return{
                options :[]
            }
        })

    }

    handlePick(){

        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)

    }

    handleAddOption(option){

        if(! option){
            return "enter valid vaue to the option"
        }else if (this.state.options.indexOf(option) > -1){
            return "this option already exists"
        }
        console.log(option)
        this.setState((prevState) =>{
            return{
                options : prevState.options.concat([option])
            }

        })

    }

    render(){

        const title = "Indecision";
        const subtitle = "put your life in hands of computer";
        // const options = ["things one", "things two", "things three", "things four"];

        return(

            <div>
                <h1>Title</h1>
                <Header  title={title} subtitle={subtitle}/>
                <Action 
                    hasOption={ this.state.options.length > 0 }
                    handlePick={this.handlePick}/>
                <Options  
                    options = {this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}/>
    
                <AddOptions  handleAddOption={this.handleAddOption}/>
            
            </div>
         )
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
            
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{  this.props.subtitle} </h2>
            </div>
        )
    }
}

class Action extends React.Component {
  
    render(){
        
        return(
            <div>
                <button  onClick ={this.props.handlePick}
                          disabled= {!this.props.hasOption}  >
                    What Should i do?
                </button>

                
            </div>

        ) 
    }
}


// todo: render new p tag for each otion set (text and key)
// if we dont call super(props) we are not going to have the access to this.props. it is similar to inheritance 
class Options extends React.Component {
    constructor(props){
        super(props) 
        
    }
   
    render(){        
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions} >Remove All </button>

                {
                    // this.props.options.map((Option) => <p key={Option}> {Option} </p>)
                            // or
                        this.props.options.map((option)=>  <Option key={option} optionText={option}/>)
                }
                
                <Option />

            
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.optionText}
                
            </div>
            
        )
    }
}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            error : undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.OPTION.value.trim();
        const error = this.props.handleAddOption(option)

        this.setState(()=>{
            return{
                error : error
            }
        })


    }
    render(){
        return(
            <div>
                {this.state.error &&  <p>{this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="OPTION"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
        <Action/>
        <Options/>
        <AddOptions/>
        
    </div>
)
// this is normalloding of react component
// ReactDOM.render(jsx, document.getElementById('app'))


// this lods a react component which has nested class
ReactDOM.render(<IndecisionApp/> , document.getElementById('app'))