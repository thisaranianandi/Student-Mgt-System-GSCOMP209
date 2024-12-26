package com.studentmanagement.gscomp209.controller;
import com.studentmanagement.gscomp209.dto.StudentDto;
import lombok.AllArgsConstructor;
import com.studentmanagement.gscomp209.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/students")
@AllArgsConstructor
public class StudentController {
    @Autowired
    private StudentService studentService;
    @PostMapping
    public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto) {
       StudentDto savedStudent =  studentService.createStudent(studentDto);
       return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId) {
       StudentDto studentDto = studentService.getStudentById(studentId);
       return new ResponseEntity<>(studentDto, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<StudentDto>> getAllStudents() {
       List<StudentDto> studentDtoList =  studentService.getAllStudents();
       return new ResponseEntity<>(studentDtoList, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") Long studentId,
                                                    @RequestBody StudentDto studentDto) {
       StudentDto newStudentDto =  studentService.updateStudent(studentId, studentDto);
       return new ResponseEntity<>(newStudentDto, HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId) {
        studentService.deleteStudent(studentId);
        return new ResponseEntity<>("Student was successfully deleted", HttpStatus.OK);
    }
}
