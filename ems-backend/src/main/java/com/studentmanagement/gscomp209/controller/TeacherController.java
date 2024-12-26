package com.studentmanagement.gscomp209.controller;

import com.studentmanagement.gscomp209.dto.TeacherDto;
import org.springframework.http.ResponseEntity;
import com.studentmanagement.gscomp209.service.TeacherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/teachers")
@CrossOrigin(origins = "http://localhost:3000") // Allows requests from the React app running on localhost:3000
public class TeacherController {

    private final TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping
    public ResponseEntity<List<TeacherDto>> getAllTeachers() {
        List<TeacherDto> teachers = teacherService.getAllTeachers();
        return ResponseEntity.ok(teachers);
    }

    @PostMapping
    public ResponseEntity<TeacherDto> createTeacher(@RequestBody TeacherDto teacherDto) {
        TeacherDto createdTeacher = teacherService.createTeacher(teacherDto);
        return ResponseEntity.ok(createdTeacher);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeacherDto> updateTeacher(@PathVariable Long id, @RequestBody TeacherDto teacherDto) {
        TeacherDto updatedTeacher = teacherService.updateTeacher(id, teacherDto);
        return ResponseEntity.ok(updatedTeacher);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeacher(@PathVariable Long id) {
        teacherService.deleteTeacher(id);
        return ResponseEntity.noContent().build();
    }
}
