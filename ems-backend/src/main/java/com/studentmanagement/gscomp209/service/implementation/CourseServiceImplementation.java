package com.studentmanagement.gscomp209.service.implementation;

import com.studentmanagement.gscomp209.entity.Course;
import com.studentmanagement.gscomp209.exception.ResourceNotFoundException;
import com.studentmanagement.gscomp209.repository.CourseRepository;
import lombok.AllArgsConstructor;
import com.studentmanagement.gscomp209.dto.CourseDto;
import com.studentmanagement.gscomp209.mapper.CourseMapper;
import com.studentmanagement.gscomp209.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CourseServiceImplementation implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        Course course = CourseMapper.mapToCourse(courseDto);
        Course savedCourse = courseRepository.save(course);
        return CourseMapper.mapToCourseDto(savedCourse);
    }

    @Override
    public CourseDto getCourseById(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course was not found with id: " + courseId));
        return CourseMapper.mapToCourseDto(course);
    }

    @Override
    public List<CourseDto> getAllCourses() {
        return courseRepository.findAll()
                .stream().map(CourseMapper::mapToCourseDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto updateCourse(Long courseId, CourseDto courseDto) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course was not found with id: " + courseId));
        course.setCourseName(courseDto.getCourseName());
        course.setCourseDescription(courseDto.getCourseDescription());
        Course updatedCourse = courseRepository.save(course);
        return CourseMapper.mapToCourseDto(updatedCourse);
    }

    @Override
    public void deleteCourse(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course was not found with id: " + courseId));
        courseRepository.deleteById(courseId);
    }
}

