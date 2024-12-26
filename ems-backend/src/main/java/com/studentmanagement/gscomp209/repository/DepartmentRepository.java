package com.studentmanagement.gscomp209.repository;

import com.studentmanagement.gscomp209.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
