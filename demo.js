let heading=React.createElement(
    'h1',{
        id:'big-blue'
    },
    "This is react js Demo"
)
let para=React.createElement(
    'p',{
      
    },
    "This is paragraph"
)

let wrapper=React.createElement(
    'div',{

    },
    [heading,para]
)
let ele=document.getElementById('root')
let root=ReactDOM.createRoot(ele);
    root.render(wrapper);
