import Button from './button';
import icon1 from '../assets/1y_icon.png'
import icon2 from '../assets/30d_icon.png'
import '../styles/Section4.css'

const Section4=()=>{

    return (
    
        <div className='div-container'>

    <div className='virtical-div-container'>
        
        
           
            <span> <img src={icon1} className="icon1"/>  </span>
            <span><h1>  AvastAntiTrak</h1></span>
            <span> <p >  <strong>&#163; 16.99</strong> / first year</p> </span>
            <span><Button ButtonType='large'> BUY NOW </Button></span>
            </div>

               <div className='horizontal-div-container'>
                  <span> <img src={icon1} className="icon"/> </span>
                  <span> <p >  30-day money-back gurantee</p> </span>
                </div>

                   <div className='horizontal-div-container'>
                      <span> <img src={icon2} className="icon"/> </span>
                      <span> <p >  30-day money-back gurantee</p> </span>
                    </div>

                        <div className='horizontal-div-container'>
                         <span> <p  className='paragraph3'> available on windows</p> </span>
                         </div>
                                    
                                                               
                             

            </div>
            
        

    



    );

    }
    
    export default Section4;