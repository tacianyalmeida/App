import Profile from '../Profile/Profile'
import './App.css'
import jessicaImage from '../assets/'

const App = () => {
    return(
        <main className="container_main">
             <div className="container_card">
                 <Profile 
                 image={jessicaImage}
                 name= "Jassica Rendall "
                 location="London, United Kingdom"
                 role="Web Developer"/>  
                 <Button source={"#"} text="GitHub">
                    <Button text="Linkedin ">
             </div>
        </main>
    )
}

export default App;
