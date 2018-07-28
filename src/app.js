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
    render(){
        return(
            <div>
            <button>What Should i do?</button>
        </div>

        ) 
    }
}


// todo: render new p tag for each otion set (text and key)
class Options extends React.Component {
    render(){        
        return(
            <div>
                Options component Here

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
    render(){
        return(
            <div>
                Add options component here
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