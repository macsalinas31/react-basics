import {useState} from "react";


function Count() {
    const [count, setCount] = useState(0)
    const [input, setInput] =useState("")
    

    function incrementValue() {
        setCount((prevCount) => count + 1)
        if (count >= 10) {
            setCount(10);
        }
    }
    function decrementValue() {
        setCount((prevCount) => count - 1)
        if (count <= 0){
            setCount(0);
        }
    }
    function handleOnChange (e) {
        console.log('changed')
        setInput((prevInput) => e.target.value)
    }

    return (
        <>
        <div style={{
            // display: 'flex',
            // justifyContent: 'center',
            // padding: "10px",
            // backgroundColor: 'black',
            
        }}>
        <button style={{
            padding: '10px',
            margin: '20px',
            width: '50px',
        }}type="button" class="btn btn-warning" onClick={decrementValue}>-</button>
        <span style={{
            color: 'white',
            margin: '20px',
            padding: '10px',
        
            
        }}>{count}</span>
        <button style={{
              padding: '10px',
              margin: '20px',
              width: '50px'
        }}type="button" class="btn btn-success"onClick={incrementValue}>+</button>
         <input style={{
            height: '50px',margin: '20px',padding: '10px',
            }}onChange={handleOnChange} value={input}></input>
        </div>
        
       

        </>
    );
}


export default Count;