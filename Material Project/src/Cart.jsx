import { useState, useEffect } from 'react'
import { Button, TextField,List, ListItem, Typography, Grid, Container } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



export default function Cart() {

    const [input, setInput] = useState('')
    const [list, setList] = useState ([])
    const [total, setTotal] = useState(0)
  
    useEffect(()=>{
      return compute()
    },[list])
  
    function handleAddOnClick() {
      const newItem = {
        itemName : input,
        quantity : 1,
        isSelected : false
      }
      // console.log(newItem)
      const newItems = [...list, newItem]
      setList(newItems)
      setInput('')
      // console.log(list)
      
    }
  
      const handleIncrement = (index) => {
        // console.log(index)
        const increaseItem = [...list]
        // increase quantity by 1
        increaseItem[index].quantity++
        setList(increaseItem)
        
      }
  
      const handleDecrement = (index) => {
        // console.log(index)
        const decreaseItem = [...list]
        // increase quantity by 1
        decreaseItem[index].quantity--
        setList(decreaseItem)
        
      }
  
      const handleComplete = (index) => {
        const itemTarget = [...list]
        itemTarget[index].isSelected = !itemTarget[index].isSelected
        setList(itemTarget)
      }
  
      const compute = () => {
        const calculate = list.reduce((total, item) => {
          return total + item.quantity
        }, 0)
        setTotal(calculate) 
      }

    return(
        <>
            {/* <input type="text" onChange={(e) => setInput(e.target.value)} value={input} /> */}
            <div className="card-title">
            <Typography variant="h5" gutterBottom>
                 Buy mo?
             </Typography>
            </div>
            <div className="title">
            <TextField label="Add an Item"  id="filled-size-small" size="small"autoFocus="false" onChange={(e) => setInput(e.target.value)}  value={input} sx={{padding: 1}} ></TextField>
            
                <Button variant='contained' size='medium' onClick={() => handleAddOnClick()} sx={{padding: 1, margin: 1,}}><ShoppingCartCheckoutIcon/></Button>
            </div>   
                    <List>
                        {list.map((item, index) => (
                        <ListItem>
                            <input type="checkbox" onChange={()=>handleComplete(index)}></input>
                            <span style={{textDecoration: item.isSelected ? 'ListItemne-through' : ''}}>{item.itemName}</span>
                            <Button onClick={()=>handleDecrement(index)}>-</Button> 
                            {item.quantity}<Button onClick={()=>handleIncrement(index)}>+</Button>
                        </ListItem>
                        ))}   
                    </List>
                <ListItem>
                    Total: {total}
                </ListItem>
        </>
    )
}