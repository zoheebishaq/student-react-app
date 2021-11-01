import axios from "axios";

const STUDENT_BASE_REST_API_URl = "http://localhost:8080/api/v1/students";

class StudentService {
  getAllStudents() {
    return axios.get(STUDENT_BASE_REST_API_URl);
  }

  createStudent(student) {
    return axios.post(STUDENT_BASE_REST_API_URl, student);
  }

  getStudentById(studentId){
    return axios.get(STUDENT_BASE_REST_API_URl + '/' + studentId)
  }

  updateStudent(studentId,student){
    return axios.put(STUDENT_BASE_REST_API_URl + '/' + studentId,student)
  }

  deleteStudent(studentId){
    return axios.delete(STUDENT_BASE_REST_API_URl + '/' + studentId)
  }
}

export default new StudentService();
