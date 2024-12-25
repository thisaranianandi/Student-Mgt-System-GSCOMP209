package net.fernandosalas.ems.mapper;

import net.fernandosalas.ems.dto.CourseDto;
import net.fernandosalas.ems.entity.Course;

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
