import { useState } from "react";



export const Inventory = () => {
const [booksCount,setBooksCount] = useState(10);
const [notebooksCount,setnotebooksCount] = useState(13)
const [pensCount,setpensCount] = useState(40)
const [InkpensCount,setInkpensCount]=useState(20)
  
  /*const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    Inkpens:20
  });*/
    // Create add and remove functions here that changes the
    // state.

    const handleChange=(option,value)=>{
      if (option ==="books"&& booksCount>=0){
        setBooksCount(booksCount+value)
      }else if(option ==="notebooks"&& notebooksCount>=0){
        setnotebooksCount(notebooksCount+value)
      }else if(option ==="pens"&& pensCount>=0){
        setpensCount(pensCount+value)
      }else if(option  ===  "Inkpens"&& InkpensCount>=0){
        setInkpensCount(InkpensCount+value)
      }
      
    }
    


 

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick ={()=>handleChange("books",1)} className="circlularButton">+</button>
        <button onClick ={()=>handleChange("books",-1)} className="circlularButton">-</button>
        <span>{booksCount<0 ? setBooksCount(0):booksCount}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick ={()=>handleChange("notebooks",1)} className="circlularButton">+</button>
        <button onClick ={()=>handleChange("notebooks",-1)} className="circlularButton">-</button>
        <span>{notebooksCount<0 ? setnotebooksCount(0):notebooksCount}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick ={()=>handleChange("pens",1)} className="circlularButton">+</button>
        <button  onClick ={()=>handleChange("pens",-1)} className="circlularButton">-</button>
        <span>{pensCount<0 ? setpensCount(0):pensCount}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button onClick ={()=>handleChange("Inkpens",1)} className="circlularButton">+</button>
        <button onClick ={()=>handleChange("Inkpens",-1)} className="circlularButton">-</button>
        <span>{InkpensCount<0 ? setInkpensCount(0):InkpensCount}</span>
      </div>
            {/*calculate total and show it*/}
      total: {" "}{booksCount+notebooksCount+pensCount<0?0 :booksCount+notebooksCount+pensCount+InkpensCount}
    </div>
  );
};
