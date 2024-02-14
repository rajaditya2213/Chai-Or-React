import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',

//     props:{
//          href:"https://google.com",
//          target:'_blank',
        
//     },
//     children:'Click me to visit google',
// }

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser="Code and React"

const reacteElement=React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'Click me to Goggle site',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

   reacteElement    
)