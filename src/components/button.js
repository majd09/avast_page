import '../styles/button.css'
const Button_Types={

    small :'small',
    large :'large'

}

const Button =({childern,ButtonType})=>
{
return (
    
<button className={`button ${Button_Types[ButtonType]}`}> 

{childern}


</button>

);

}

export default Button;