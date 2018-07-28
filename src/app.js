class IndecisionApp extends React.Component {
    render(){
        return(

            <div>
                <h1>Title</h1>
                <Header  title="Test Value"/>
                <Action/>
                <Options/>
    
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
                <h2>put your life in hands of computer</h2>
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

class Options extends React.Component {
    render(){
        return(
            <div>
                Options component Here

                <Option option="test option"/>
            
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div>
                option component here
                <h4>{this.props.option}</h4>
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