import { Table, TableCell, TableHead } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";

export default function ListStudentComponent() {
  const [students, setstudents] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);
  
  const getAllStudents = ()=>{
    StudentService.getAllStudents()
    .then((res) => {
      setstudents(res.data);
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const deleteStudent =(studentId) =>{
      // test
      // console.log(studentId);
      StudentService.deleteStudent(studentId).then((res)=>{
        getAllStudents();
      }).catch(err=>{
        console.log(err);
      })
  }
  return (
    <Table>
      <TableHead>
        <TableCell>Student ID</TableCell>
        <TableCell>Student ID</TableCell>
        <TableCell>Student ID</TableCell>
        <TableCell>Student ID</TableCell>
        <TableCell>Student ID</TableCell>
      </TableHead>
    </Table>
  );
}
