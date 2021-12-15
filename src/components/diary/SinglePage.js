import React from 'react'
import { useParams } from 'react-router';
import './singlepage.css';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, onValue,ref, set} from 'firebase/database';
import { Button, Container,Row,Col } from 'react-bootstrap';
export const SinglePage = (props) => {
    const state = useSelector(state => state.userReducer);
    const id  = props.match.params.id;
    const [description, setdescription] = useState("");
    useEffect(() => {
        const db = getDatabase();
        const quesRef = ref(db,'submission/'+state.user.uid+'/'+btoa(state.selectedDate.month+'/'+state.selectedDate.day+'/'+state.selectedDate.year)+'/'+id);
        onValue(quesRef,(snapshot)=>{
            console.log(snapshot.val());
            console.log(snapshot.val().comment);
            if(snapshot.val()!=null)
            {
                setdescription(snapshot.val().comment);
            }
        })
    }, [])
    const handleUpdate=async ()=>{
        const db = getDatabase();
        const quesRef = ref(db,'submission/'+state.user.uid+'/'+btoa(state.selectedDate.month+'/'+state.selectedDate.day+'/'+state.selectedDate.year)+'/'+id+'/comment');
        try {
            await set(quesRef,description);
            alert("update succesfull");
        } catch (error) {
            alert(error.message);
            console.log(error)
        }
        
    }
    return (
        <Container>
        <div className="paper">
            <div className="paper-content">
                <textarea autofocus value={description} onChange={(e)=>{
                    setdescription(e.target.value);
                }}></textarea>
                
            </div>
        </div>
        <Row>
            <Col md={{span:1,offset:10}}>
                <Button variant="danger" onClick={handleUpdate}>Update</Button>
            </Col>
        </Row>
        
        </Container>
    )
}
