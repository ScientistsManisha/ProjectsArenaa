import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Preheader from './Components/Preheader';
import  Navbars from './Components/Navbars';
import Marque from './Components/Marque';
import Slider from './Components/Slider';
import Cards1  from './Components/Cards1';
import Cards2  from './Components/Cards2';
import Banners from './Components/Banners';
import Footer from   './Components/Footer';
import Groupscrds from './Components/Groupscrds';
import Bodyfooter from './Components/Bodyfooter';

function App() {
  return (
    <div className="App">
      <>
     <Preheader />
     <Navbars homeTitle="HOME Page"/>
     <Marque />
     <div style={{marginRight:"200px", marginLeft:"200px", marginTop:"50px"}}>
     <div style={{border:"solid gray 1px"}}>
     <Slider/>
     <Cards1/>
     <Cards2/>
     <Banners/>
     <Groupscrds/>
     <Bodyfooter/>
     </div>
     </div>

     <div>
      <Footer/>
     </div>
     
  </>
    </div>
  );
}

export default App;
