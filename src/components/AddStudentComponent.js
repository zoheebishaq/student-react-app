import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import StudentService from "../services/StudentService";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

export default function AddStudentComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const {id} = useParams();

  const saveOrUpdateStudent = (e) => {

    e.preventDefault();

    const student = { firstName, lastName, email };
    //test
    // console.log(student);
    if (id) {
      StudentService.updateStudent(id, student).then((res)=>{
          history.push('/students')
      }).catch(err=>{
        console.log(err);
      })
    }else{
      StudentService.createStudent(student)
      .then((res) => {
        console.log(res.data);
        history.push("/students");
      })
      .catch((err) => {
        console.log(err);
      });
    }
   
  };

useEffect(() => {
    StudentService.getStudentById(id).then((res)=>{
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmail(res.data.email)
    }).catch(err => {
      console.log(err);
    })
}, [])

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Student</h2>;
    } else {
      return <h2 className="text-center">Add Student</h2>;
    }
  };
  
  return (
    <div>
      <br />
      <br />
      <Container>
        
      </Container>
    </div>
  );
}
