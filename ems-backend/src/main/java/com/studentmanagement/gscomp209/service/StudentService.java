package com.studentmanagement.gscomp209.service;
import com.studentmanagement.gscomp209.dto.StudentDto;

import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto getStudentById(Long studentId);
    List<StudentDto> getAllStudents();
    StudentDto updateStudent(Long studentId, StudentDto studentDto);
    void deleteStudent(Long studentId);
}
