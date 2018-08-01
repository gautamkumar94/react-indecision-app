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
    render(){

        const title = "Indecision";
        const subtitle = "put your life in hands of computer";
        const options = ["things one", "things two", "things three", "things four"];

        return(

            <div>
                <h1>Title</h1>
                <Header  title={title} subtitle={subtitle}/>
                <Action/>
                <Options  options = {options}/>
    
                <AddOptions/>
            
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
    handlePick(){
        alert('handlePick')
    }

   
    render(){
        
        return(
            <div>
                <button  onClick ={this.handlePick}>What Should i do?</button>

                
            </div>

        ) 
    }
}


// todo: render new p tag for each otion set (text and key)
// if we dont call super(props) we are not going to have the access to this.props. it is similar to inheritance 
class Options extends React.Component {
    constructor(props){
        super(props) 
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options)
        // alert("remove all")
    }
    render(){        
        return(
            <div>
                <button onClick={this.handleRemoveAll} >Remove All </button>

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
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.OPTION.value.trim();

        if (option){
            alert(option)
        }


    }
    render(){
        return(
            <div>
                Add options component here

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