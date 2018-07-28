let count = 0;
// const someId = 'myIdHere';
const addOne = ()=>{
    count = count +1;
    console.log('addOne');
    randerCounterApp();

};
const minusOne = ()=>{
    count--;
    randerCounterApp();
    console.log('minusOne');
};

const reset = ()=>{
    count= 0;
    randerCounterApp();
    console.log('reset');
}

// console.log(templateThree); 

// challange
// make button with text -1 -- setup minusOne function and register 'minusOne' every time button is clicked
// ake reset button , setup reset function, log reset everytime button is clicked

const appChild = document.getElementById('myDetail')
const randerCounterApp= ()=>{
    const templateThree = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne } className="button" >+1</button>
            <button onClick={minusOne} className="button">-1</button>
            <button onClick={reset} className="button" >Reset</button>
        </div>
    );

    ReactDOM.render(templateThree, appChild);
}

randerCounterApp()