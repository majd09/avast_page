import '../styles/Section3.css';
import  feat1_icon from '../assets/feat1_icon.png'
import feat2_icon from '../assets/feat2_icon.png'
import feat3_icon from '../assets/feat3_icon.png'
import feat4_icon from '../assets/feat4_icon.png'



const Section3=()=>{

    const categories = [
    {
        id:1,
        header :'keep your true identify private' ,
        cardsPargraph:'when you\'re browsing ,  disguise your online behaviour so no one can tell it\'s you .  ', 
        imgUrl:feat1_icon
    },

    {

        id:2,
         header :'know when you\'re being tracked' ,
         cardsPargraph:'when advertisers track your online activity , we automatically expose and block them . ', 
        imgUrl:feat2_icon
    },

    {

        id:3,
         header :'stop targeted advertising ' ,
         cardsPargraph:'when you\'re shopping online, hide your purchases so you don\'t see the same ads .   ', 
        imgUrl:feat3_icon
    },

    {

        id:4,
         header :'keep your operating system private ' ,
         cardsPargraph:'stop third parties from seeing , tracking , and collecting information about your pc  .   ',
        imgUrl:feat4_icon 
    },

   ] 

    return (
    
    <div className="sectionHeader">

        <h1 className='htwo'> Enjoy {''} 1 year of the freedom from <br/> online trackers </h1>

        <div className="categories-container">
            {categories.map(({header,cardsPargraph,id,imgUrl})=>
            
            (
                <div key= {id} className="category-card">

                        <img src={imgUrl} className='image' style={{

                            backgroundImage:  `url (${imgUrl})`
                        }}/>   

                    <div className='Category-header'>
                          <h3 className='hThree'> {header}  </h3>
                    </div>

                             <div className='category-body'>
                                   <p className='text'> {cardsPargraph}  </p>
                            </div>

                </div>
            )


            
            
           ) }
                 

        </div>
    </div>


    
    );
    
    }
    
    export default Section3;