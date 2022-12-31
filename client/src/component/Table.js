import React from 'react'
import { Link } from '@reach/router'
import DeleteButton from './DeleteButton'


const Table = (props) => {
    
    return (
        <div style={{backgroundColor:"#dddddd",marginLeft:"70px"}}>
            {/* <table style={{margin:"0 auto"}}  border="1">
        <thead>
            <tr>
                <th>
                    Player Name
                </th>
                <th>
                    preferd position
                </th>
                <th>
                    Actions
                </th>
            </tr>
            </thead>
            <tbody>
            {props.data.map((item,i)=>
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.pos}</td>
               <td>
                <DeleteButton Id={item._id} name={item.name} successCallback={(e)=>props.removefromdom(item._id)} />
                </td>

            </tr>
            

            )
            }
            </tbody>
 */}
            <h1>All competitions</h1>
            {props.data.map((item,i)=>{
                return( <div style={{border:"1px solid black",marginTop:"30px"}} key={i}>
                <Link to={"/choose/"+item._id}>{item.question}</Link>
                
                <p>{item.coun1.name}:{item.coun1.votes}</p>
                <p>{item.coun2.name}:{item.coun2.votes}</p>
                <p>{item.coun3.name}:{item.coun3.votes}</p>
              
                
                </div>)
            })}





            {/* </table> */}


        </div>
    )
}

export default Table
