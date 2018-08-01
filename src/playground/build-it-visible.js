class VisiblityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisiblity=this.handleToggleVisiblity.bind(this);

        this.state={
            visiblity : false
        }

    }
    handleToggleVisiblity(){
        this.setState((previousState) =>{
            return {
                visiblity : !previousState.visiblity
            }
        })

    }

    render(){
        return(
            <div>
                 <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>{this.state.visiblity ? 'Hide Detail' : 'Show Details'}</button>

                {this.state.visiblity&&(
                    <div>hey these are some derail</div>
                )}
            
            </div>
        )
    }
}
ReactDOM.render(<VisiblityToggle/>, document.getElementById('app'))



// let visiblity = false;

// const toggleVisiblity = () =>{
//     visiblity = !visiblity;

//     randerApp();
// }
// const randerApp=() =>{
//     const template =(
//         <div>
//             <h1>Visiblity Toggle</h1>

//             <button onClick={toggleVisiblity}>
//             {visiblity ? 'Hide Detail' : 'Show Details'}
//             </button>
//             {visiblity &&(
//                 <div>Hey these are some detil you can see now</div>
//             )}
//         </div>

//     );
//     ReactDOM.render(template, document.getElementById('app'));

// }

// randerApp()