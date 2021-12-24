import React from "react";

const List = (props) => {

    return(
        <>
            <div className="list-style">
            
                 <li>{props.text}</li>
                 <i className='fa fa-times' aria-hidden='true' 
                    onClick={()=>{
                    props.onSelect(props.id);
                }}/>
            </div>
         </>
    );
}

export default List;