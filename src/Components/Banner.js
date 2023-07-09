//import logo from '../assets/logo.svg'
import '../styles/Banner.css'

// ce composant represante la bannierer du site
// ce composant prent en parametre cest element enfant (voir APP.js)
function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner


