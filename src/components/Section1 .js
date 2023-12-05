import hero from '../assets/hero_img.png'
import '../styles/Section1.css';


const Section1=()=>{

    return (
    
    <div >

    
< h1 className="headerText"> 
    
        How about building a 
       <br/>supreme comfort
       <br/> zone ? 
     
     </h1>
     <div/>



    <p className='paragraph_One'> 
        we all want to life in comfort ,
        so why not build a plush fort for<br/> yourself{''} <strong>
         just because</strong> you can ?
        compile your cushions and<br/> bridge your blankets to create
        a comfy fortress to browse in .
        To <br/>strengthen privacy in your soft sanctuary, 
        you've still got time to <br/> get 1 year of{' '}<strong> 
        Avast AntiTrack for only $16.99.</strong>
    </p>

    <img src={hero} className='heroImg'/>
    </div>
    
    );
    
    }
    
    export default Section1;