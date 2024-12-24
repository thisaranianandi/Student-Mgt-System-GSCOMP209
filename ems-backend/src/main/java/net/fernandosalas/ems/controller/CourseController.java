package net.fernandosalas.ems.controller;

import lombok.AllArgsConstructor;
import net.fernandosalas.ems.dto.CourseDto;
import net.fernandosalas.ems.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    @Autowired
    private CourseService courseService;

    // Create a new course
    @PostMapping
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
        CourseDto newCourse = courseService.createCourse(courseDto);
        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
    }

    // Get a course by its ID
    @GetMapping("/{id}")
    public ResponseEntity<CourseDto> getCourseById(@PathVariable("id") Long courseId) {
        CourseDto courseDto = courseService.getCourseById(courseId);
        return new ResponseEntity<>(courseDto, HttpStatus.OK);
    }

    // Get all courses
    @GetMapping
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        List<CourseDto> courseDtoList = courseService.getAllCourses();
        return new ResponseEntity<>(courseDtoList, HttpStatus.OK);
    }

    // Update an existing course
    @PutMapping("/{id}")
    public ResponseEntity<CourseDto> updateCourse(@PathVariable("id") Long courseId,
                                                  @RequestBody CourseDto courseDto) {
        CourseDto updatedCourse = courseService.updateCourse(courseId, courseDto);
        return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
    }

    // Delete a course by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable("id") Long courseId) {
        courseService.deleteCourse(courseId);
        return new ResponseEntity<>("Course deleted successfully", HttpStatus.OK);
    }
}

