package com.studentmanagement.gscomp209.repository;

import com.studentmanagement.gscomp209.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can add custom queries here if needed
}
