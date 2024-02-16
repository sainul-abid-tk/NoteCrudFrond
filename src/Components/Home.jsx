import React, { useEffect, useState } from 'react'
import { AccordionBody, Button, Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Add from './Add'
import parse from 'html-react-parser'
import { getAllNotesAPI, removeNoteAPI } from '../Services/allAPi';
import Edit from './Edit';
function Home() {
  const [addNoteResponse,setAddNoteResponse]=useState()
  const [allNotes,setAllNotes]=useState([])
  useEffect(()=>{
    getAllAddNotes()
    removeNote()
  },[addNoteResponse])
  
  const removeNote = async(id)=>{
    await removeNoteAPI(id)
    getAllAddNotes()
    setAllNotes([])
  }

  const getAllAddNotes= async ()=>{
    const result= await getAllNotesAPI()
    if(result.status===200){
      console.log(result);
      setAllNotes(result.data)
    }
    else{
      console.log("API Failed");
      setAllNotes([])
    }
  }

  return (
    <div>
        <h1 className='text-center mt-5 '>Welcome to Notepad</h1>
        <Add setAddNoteResponse={setAddNoteResponse}/>
        <div className='mt-5'>
        <Row  className='px-5'>
        {
            allNotes?.length>0?
            allNotes.map(notes=>(
                <Col className='mb-5  ' xl={4} lg={4} md={6} sm={12}>
        <div className='d-flex justify-content-center'>
                <Edit getAllAddNotes={getAllAddNotes} notes={notes}/>
                <Button onClick={()=>removeNote(notes?.id)} variant='link'><i class="fa-solid fa-trash fs-4 text-white"></i></Button>
        </div>
        <Accordion>
            <div style={{width:'360px'}} >
            <Accordion.Header>
                <h4>{notes.title}</h4>
            </Accordion.Header>
                <AccordionBody><h6 >
                    {parse(notes.note)}
                </h6></AccordionBody>
            </div>
            </Accordion>
        </Col>
            ))
            : <h3>No Notes are Uploaded yet</h3>
        }
      </Row>
        </div>
    </div>
  )
}

export default Home