class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log("component did mount")

        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10)

        if (!isNaN(count)){
            this.setState(()=>({
                count 
            }))


        }
    }

    componentDidUpdate(prevProps, previousState){
        if(previousState.count = this.state.count){
            localStorage.setItem('count', this.state.count)
        }
        console.log("component update")

    }

    handleAddOne(){
        this.setState((previousState)=>{
            return {
                count : previousState.count+1
            }
        }
    )}

    handleMinusOne(){
        // this.setState({
        //     count : 0
        // })
        this.setState((previousState)=>{
            return{
                count : previousState.count -1
            }
        })
    }
    handleReset(){
        this.setState((previousState)=>{
            return{
                count : 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Couner : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
// Counter.defaultProps = {
//     count : 0
// }

// create three method :handleAddOne, handleMinusOne, handleReset


ReactDOM.render(<Counter />, document.getElementById('app'));






// let count = 0;
// // const someId = 'myIdHere';
// const addOne = ()=>{
//     count = count +1;
//     console.log('addOne');
//     randerCounterApp();

// };
// const minusOne = ()=>{
//     count--;
//     randerCounterApp();
//     console.log('minusOne');
// };

// const reset = ()=>{
//     count= 0;
//     randerCounterApp();
//     console.log('reset');
// }

// // console.log(templateThree); 

// // challange
// // make button with text -1 -- setup minusOne function and register 'minusOne' every time button is clicked
// // ake reset button , setup reset function, log reset everytime button is clicked

// const appChild = document.getElementById('myDetail')
// const randerCounterApp= ()=>{
//     const templateThree = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne } className="button" >+1</button>
//             <button onClick={minusOne} className="button">-1</button>
//             <button onClick={reset} className="button" >Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateThree, appChild);
// }

// randerCounterApp()