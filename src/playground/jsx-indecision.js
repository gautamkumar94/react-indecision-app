console.log("app.js is running ")

//jsx -javascript xml (javascript syntex extesion)

 
// if statement 
// ternary operator
// logical and operator 


const app= {
    title :' Indecision App',
    subtitle : 'put your life in the hands of computer',
    options :[]
}

function getSubtitle(subtitle){
    if (subtitle){
        return <p>Subtitle : {subtitle}</p>
    }
}

const onFormSubmit = (e)=>{ //e is even here
    e.preventDefault();
    console.log('form submitted');

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        randerCounterApp();
    }


};



// const template =(
//     <div> 
//         <h1>indecision</h1>
//         {getSubtitle(app.subtitle)}
//         <p>{ app.options.length > 0 ? 'Here Are Your Options' : 'No options' } </p>
//         <p>{app.options.length}</p>
//         <ol>
//         <li> item one</li>
//         <li>item two </li>
//         </ol>

//         <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/ >
//         <button>Add Option</button>
//         </form>
//     </div>);

var username = 'gautam kumar';
var userAge = 26;
var userLocation = 'pune';

const user = {
    name : 'gautam',
    age : 23,
    location: 'pune'
}

function getLocation(location){
    if (location){
        return <p>Location : {location}</p>;
    }
}

const templateTwo = (
    <div>
    <h1> {user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>age : {userAge} </p> }
    {getLocation( user.location)}
    </div>
);

// create remove all button
// onClick wipe the array

const removeAll = () =>{
    app.options = [];
    randerCounterApp();
}

const onMakeDecision = ()=>{
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option)
    console.log(randomNumber);
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000]


// create a randor function that rander new jsx
// call it right away
// call it after option array is added 

const randerCounterApp = ()=>{
    const template =(
        <div> 
            <h1>indecision</h1>
            {getSubtitle(app.subtitle)}
            <p>{ app.options.length > 0 ? 'Here Are Your Options' : 'No options' } </p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do</button>
            <button onClick = { removeAll}>Remove All </button>
            
            {
                numbers.map((number) =>  <p key={number}>number : {number} </p>)
            }
            
            <ol>
            {
                app.options.map((option) =>{
                    return <li key={option}> {option}</li>
                })
            }
            </ol>
    
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/ >
            <button>Add Option</button>
            </form>
        </div>);
    

    ReactDOM.render(template, appRoot);
}

randerCounterApp();







