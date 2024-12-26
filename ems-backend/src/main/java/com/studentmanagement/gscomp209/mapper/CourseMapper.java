package com.studentmanagement.gscomp209.mapper;

import com.studentmanagement.gscomp209.dto.CourseDto;
import com.studentmanagement.gscomp209.entity.Course;

public class CourseMapper {

    // Method to map Course entity to CourseDto
    public static CourseDto mapToCourseDto(Course course) {
        return new CourseDto(
                course.getId(),
                course.getCourseName(),
                course.getCourseDescription()
        );
    }

    // Method to map CourseDto to Course entity
    public static Course mapToCourse(CourseDto courseDto) {
        return new Course(
                courseDto.getId(),
                courseDto.getCourseName(),
                courseDto.getCourseDescription()
        );
    }
}
