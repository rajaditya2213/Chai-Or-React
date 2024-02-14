function customRender(react,container){
     /*
     const domElement=document.createElement(react.type)
     domElement.innerHTML=react.children
     domElement.setAttribute('href', react.props.href)
     domElement.setAttribute('target', react.props.target)
    
     container.appendChild(domElement)
     */

     const domElement= document.createElement(react.type)
     domElement.innerHTML=react.children

     for (const prop in react.props) {
         if(prop === 'children') continue;
         domElement.setAttribute(prop,react.props[prop])
     }
     container.appendChild(domElement)

}


const reactElement={
     type:'a',

     props:{
          href:"https://google.com",
          target:'_blank',
         
     },
     children:'Click me to visit google',
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)
