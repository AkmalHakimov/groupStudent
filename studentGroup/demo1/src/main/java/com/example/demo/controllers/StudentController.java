package com.example.demo.controllers;

import com.example.demo.Db;
import com.example.demo.entity.Student;
import com.example.demo.payload.StudentReq;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class StudentController {

    @RequestMapping(path = "/student", method = RequestMethod.GET)
    public List<Student> getStudents(@RequestParam(defaultValue = "") Integer groupId){
        if(groupId==null){
            return Db.students;
        }else {
            List<Student> students = new ArrayList<>();
            for (Student student : Db.students) {
                if(student.getGroupId().equals(groupId)){
                  students.add(student);
                }
            }
            return students;
        }
    }

    @RequestMapping(path = "/student", method = RequestMethod.POST)
    public void postStudents(@RequestBody StudentReq studentReq){
        Student student = new Student();
        student.setId(++Student.lastId);
        student.setFirstName(studentReq.getFirstName());
        student.setLastName(studentReq.getLastName());
        student.setGroupId(studentReq.getGroupId());
        Db.students.add(student);
    }

    @RequestMapping(path = "/student/{studentId}", method = RequestMethod.PUT)
    public void editStudent(@RequestBody StudentReq studentReq,@PathVariable Integer studentId){
        for (Student student : Db.students) {
            if(student.getId().equals(studentId)){
                student.setGroupId(studentReq.getGroupId());
                student.setFirstName(studentReq.getFirstName());
                student.setLastName(studentReq.getLastName());
                return;
            }
        }
    }


}
