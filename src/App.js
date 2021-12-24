import React, { useState } from "react";
import './App.css';
import List from './List';
const App = () => {

    const[input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setInput(event.target.value);
    }
    
    const updateItems = (e) =>{
        e.preventDefault();
        setItems((oldItems) => {
                return [...oldItems, input];
            });
        setInput("");
          
    }
    const press = (e) =>{
        if(e.keycode===13){
            updateItems();
        }
    }

    const deletItems= (id) =>{
        setItems((oldItems) => {
            return oldItems.filter((elem, index) =>{
                return index !==id;
            })
        })
    }
    

    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1>ToDo List</h1>
                <form>
                    <input type="text" placeholder="Add Items" 
                    onKeyPress={press}
                    onChange={inputEvent} />
                    <button type='submit' onClick={updateItems}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </form>

                <ul className="ul">
                    {items.map((item, index) =>{
                      return <List key={index} id={index} text ={item}
                          onSelect = {deletItems}
                      />
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default App;
