import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faChrome, faGoogle, faGoogleDrive, faGooglePay, faGooglePlay, faYoutube } from '@fortawesome/free-brands-svg-icons'

function setH1_active() {
  document.getElementById("title").classList.add("green")
}

function setH1_inactive() {
  document.getElementById("title").classList.remove("green")
}


function App() {
  let googleAps = [
    {name:'Google', link:'https://www.google.com', logo:faGoogle},
    {name:'YouTube', link:'https://www.youtube.com', logo:faYoutube},
    {name:'Google Drive', link:'https://drive.google.com', logo:faGoogleDrive},
    {name:'Gmail', link:'https://www.gmail.com', logo:faEnvelope},
    {name:'Google Play', link:'https://play.google.com/store', logo:faGooglePlay},
    {name:'Google Pay', link:'https://pay.google.com', logo:faGooglePay},
    {name:'Chrome', link:'https://www.google.com/intl/pt-BR/chrome/', logo:faChrome},
  ]

  let googleItems = googleAps.map((app,i) => 
    <li key={i}>
      <a href={app.link} target='_blank' onMouseEnter={setH1_active} onMouseLeave={setH1_inactive}> 
        <FontAwesomeIcon className='mid-height' icon={app.logo} color='grey'/>
        <div className='info'>
          {app.name}
        </div>
      </a>      
    </li>  
  )

  return (
    <>
      <div className='react-powered'>
        <img src='logos/logoReact.svg'></img>
        <span>feito com React</span>
      </div>
      
      <h1 id='title'>Google Apps</h1>

      <ul>
        {googleItems}
      </ul>

      <p className='message'>Just click to go.</p>

    </>
  );
}

export default App;