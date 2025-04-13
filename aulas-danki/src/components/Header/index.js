
import styles from './styles.css'
function Header(props){
    return(
        <header className="Header">
            <div className="Header__logo">
                <h2>logo</h2>            
            </div>
            <div className="Header__menu">
                <a href="">Home</a>
                <a href="">Sobre</a>
            </div>
        </header>
    )
}
export default Header;