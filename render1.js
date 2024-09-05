ReactDom.render(<h1>Hi,I am abhilash</h1>,document.getElementById("root"))
ReactDom.render(<p>Hi,I am para</p>,document.querySelector("#root"))
ReactDom.render(<div>
    <ul>
        <li>child 1</li>
        <li>child 2</li>
    </ul>    
    </div>,document.getElementById("root")
);


function mainContent(){
    return(
        <h1>Im learning react!</h1>
    )
}
ReactDom.render(
      <div>
          <navbar/>
          <mainContent />
      </div>
    ,document.getElementById('root'));
   //imperative
   const h1=document.createElement('h1')
   h1.textContent='this is imperative way of programming'
   h1.className='header'
   document.getElementById('root').append(h1)
   //declarative 
    ReactDom.render(<h1 className="header">Hello I'm React</h1>,document.getElementById("root")
    )

    //navabar in jsx(Java Script Syntax Extension)


    const page=( <navbar>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </navbar>)
    ReactDom.render(
        page,
        document,getElementById("root")
     
    )


    //Assignment
    
    const page=(
       
        <div>
             <img src='./' width='40px'/>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was  orinally created by Jordon walke</li>
                <li>Has well over 100k stars on Git Hub</li>
                <li>is maintained by FAcebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>
            </ul>
        </div>
    )
      
    ReactDom.render(page,document.getElementById("root"))


//castom components


function TemporaryName(){
    <div>
            <header>
                <nav>
                   <img src='./' width='40px'/>
                </nav>
            </header>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was  orinally created by Jordon walke</li>
                <li>Has well over 100k stars on Git Hub</li>
                <li>is maintained by FAcebook</li>
                <li>Powers thousands of enterprice apps, including mobile apps</li>
            </ul>
            <footer>
                <small>footer</small>
            </footer>
        </div>   
}


ReactDom.render(<TemporaryName/>,document.getElementById("root"));

function RamAyodya(){
  return(
     
    <div>
        <h1>Ram</h1>
        <ol>
            <li>Ram1</li>
            <li>Ram2</li>
            <li>Ram3</li>
        </ol>
    </div>
  )
}

ReactDom.render(<RamAyodya/>,document.getElementById("root"));


//Assignment-2
    import React from "react"
    import ReactDom from "react-dom"
    import Header from "./Header.js";
    import Footer from "./Footer.js";
    import MainContent from "./MainContent.js";
function page(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDom.render(<page/>,document.getElementById("root"));


