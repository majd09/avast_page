import '../styles/Section2.css';
import product from '../assets/product_icon.png'
import Button from './button';

const Section2=()=>{

    return (
    
    <div className='Section2'>

    <div className="Section2Header">
    <h2> 
        AvastAntiTrak
    </h2>
    </div>

    <div class= "grid">

    <div className='Section2Div'>
        
        
            <span> <img src={product} className="Section2Photo"/> </span>
            <span> <p >  <strong>&#163; 16.99</strong> / first year</p> </span>
            <span><Button ButtonType='small' className="smallButton"> BUY NOW </Button></span>

    
    

        </div>

        <div className='div-footer'>
        <p className='grayStyle'> After the first year , it automatically renews <br/> every year at <strong>&#163; 49.99 </strong>unless cancelled {''} * </p>
        </div>

      <br/>

    </div>

    </div>
    );
    
    }
    
    export default Section2;