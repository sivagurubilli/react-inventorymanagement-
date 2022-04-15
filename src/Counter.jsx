

const Counter = ({intValue,mulDouble,handleCount})=>{
    return (
        <div>
            <h1 style={{
                colour:intValue%2 ===0? "green":"red"
            }}>{value}</h1>
            <button onClick={()=>{
                handleCount(1)
            }}>Increment</button>
             <button onClick={()=>{
                handleCount(-1)
            }}>Decrement</button>
             <button onClick={mulDouble}>double</button>
        </div>
    )
}

export default Counter