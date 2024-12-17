import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Container,Row,Col,Image } from 'react-bootstrap';

const ReadOne = () => {
    const [info, setInfo]= useState({});
    const {id}=useParams();
    useEffect(()=>{
const getInfo=async()=>{
await axios.get ("http://localhost:5000/readItem/"+id)
.then(res =>{
    return(
    setInfo(res.data)
    )
}).catch(err=>console.log(err))
};
getInfo()
    },[id])
  return (
    <Container>
        <Row>
            <Col>
            <h1>{info.name}</h1>
            <p>{info.description}</p>
            </Col>

            <Col>
            <Image src={"http://localhost:5000/images/"+info.photo} alt='Uploaded' rounded className='img-fluid'/>
            </Col>
        </Row>
        </Container>
  )
}

export default ReadOne