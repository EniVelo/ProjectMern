import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import { Container,Form, Button, Image } from 'react-bootstrap';

const Update = () => {
    const {id}=useParams();
    const nav= useNavigate();
    const [item, setItem]= useState({
        name: '', 
        description: '',
         photo: '',
    });
    const [uploadedImage, setUploadedImage] = useState(null);
    useEffect(()=>{
        const getInfo=async()=>{
        await axios.get ("http://localhost:5000/readItem/"+id)
        .then(res =>{
            
                const { name, description, photo } = res.data;
                setItem((prevItem) => ({ ...prevItem,
                    name: name || '', description: description || '', photo: photo || '',
                    }));
           
        }).catch(err=>console.log(err))
        };
        getInfo()
            },[id])
            const handleChange = (e) => { const { name, value } = e.target; setItem((prevItem) => ({
                ...prevItem,
                [name]: value, }));
                };

                const handlePhoto =(e) =>{
                    setItem({ ...item, photo: e.target.files[0] })
                    setUploadedImage(URL.createObjectURL(e.target.files[0]));
                }

                const handleSubmit=async(e)=>{
                    e.preventDefault()
                    const formData = new FormData(); Object.entries(item).forEach(([key, value]) => {
                        if (key !== 'photo') { formData.append(key, value);
                        } });
                        if (item.photo instanceof File) { formData.append('photo', item.photo);
                        }
                        await axios.patch ("http://localhost:5000/updateItem/"+id, formData)
                        .then(res =>{
                            setItem((prevItem =>({...prevItem,...res.data})));
                            nav('/read');
                            
                        }).catch(err=>console.log(err))
                         }
  return (
    <Container>
    <h1>CUpdate Component</h1>
    <Form onSubmit={handleSubmit} encType='multipart/form-data'>
      <Form.Group className="mb-3" controlId="nameItem">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={item.name} name="name" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="photoItem">
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" name="photo" onChange={handlePhoto} accept=".jpeg , .jpg , .png"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionItem">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={item.description} rows={3} name="description" onChange={handleChange}/>
      </Form.Group>

      <Button type="submit" variant="warning">"Uploaded"</Button>
    </Form>

   
<h1>Preview Image</h1> 
 {uploadedImage && (
<Image src={uploadedImage} alt='Uploaded' rounded className='img-fluid'/>
)} 
  </Container>
  )
}

export default Update