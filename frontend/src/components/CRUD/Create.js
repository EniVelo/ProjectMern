import React, {useState} from 'react'
import {Container,Form,Button,Image} from "react-bootstrap";
import axios from "axios";

const Create = () => {
    const [newItem,setNewItem]=useState({
        name:"",
        description:"",
        photo:"",
    })
    const [uploadedImage, setUploadedImage] = useState(null);
    const handleChange =(e) =>{
        setNewItem({...newItem,[e.target.name]:e.target.value})
    }
    const handlePhoto =(e) =>{
        setNewItem({ ...newItem, photo: e.target.files[0] })
        setUploadedImage(URL.createObjectURL(e.target.files[0]));
    }
const handleSubmit = async (e) =>{
  
    e.preventDefault()
    console.log("hello")
    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
        formData.append(key, value); 
    });
        await axios.post("http://localhost:5000/addItem", formData)
        .then(res => console.log(res))
        .catch(err =>console.log("Not added:", err));
}
  return ( 
    <Container>
    <h1>Create Component</h1>
    <Form onSubmit={handleSubmit} encType='multipart/form-data'>
      <Form.Group className="mb-3" controlId="nameItem">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={newItem.name} name="name" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="photoItem">
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" name="photo" onChange={handlePhoto} accept=".jpeg , .jpg , .png"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionItem">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={newItem.description} rows={3} name="description" onChange={handleChange}/>
      </Form.Group>

      <Button type="submit" variant="primary">Create</Button>
    </Form>

   
<h1>Preview Image</h1> 
 {uploadedImage && (
<Image src={uploadedImage} alt='Uploaded' rounded className='img-fluid'/>
)} 
  </Container>
  )
}

export default Create
