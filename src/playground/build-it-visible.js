
let visiblity = false;

const toggleVisiblity = () =>{
    visiblity = !visiblity;

    randerApp();
}
const randerApp=() =>{
    const template =(
        <div>
            <h1>Visiblity Toggle</h1>

            <button onClick={toggleVisiblity}>
            {visiblity ? 'Hide Detail' : 'Show Details'}
            </button>
            {visiblity &&(
                <div>Hey these are some detil you can see now</div>
            )}
        </div>

    );
    ReactDOM.render(template, document.getElementById('app'));

}

randerApp()