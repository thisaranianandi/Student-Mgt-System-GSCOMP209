package net.fernandosalas.ems.repository;

import net.fernandosalas.ems.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // You can add custom queries here if needed
}
