import React,{useState, useEffect} from 'react'
import { Container ,Table, Image, Button} from 'react-bootstrap'
import axios from "axios";

const Read = () => {
    const[rezervime,setRezervime]= useState([]);
    useEffect(()=> {
        const getData = async () => {
            await axios.get('http://localhost:5000/readItems')
            .then(res=> {
                console.log(res);
                setRezervime(res.data);
            }

            ).catch(err=> console.log("Data not read:"+ err));
        }
        getData()
    },[])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/deleteItem/${id}`)
        .then(() => {
        
        })
        .catch((err) => {
        
        console.log("Data not deleted " + err); });
        };
  return (
    <Container>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {rezervime.map((item)=>{

            return(
                <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><Image src={"http://localhost:5000/images/"+item.photo} alt='Uploaded' rounded className='img-fluid'/></td>
                <td><Button variant="danger" onClick={()=> handleDelete(item._id)}>Delete</Button></td>
                <td><Button variant="primary" href={"/ReadOne/"+item._id}>Read one</Button></td>
                <td><Button variant="warning" href={"/Update/"+item._id}>Update</Button></td>
              </tr>
            )
        })}
        
      </tbody>
    </Table>
    </Container>
  )
}

export default Read
