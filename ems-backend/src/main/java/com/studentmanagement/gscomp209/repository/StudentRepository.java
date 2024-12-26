package com.studentmanagement.gscomp209.repository;
import com.studentmanagement.gscomp209.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
