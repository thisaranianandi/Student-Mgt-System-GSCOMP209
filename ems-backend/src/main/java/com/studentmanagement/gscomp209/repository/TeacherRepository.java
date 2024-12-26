package com.studentmanagement.gscomp209.repository;
import com.studentmanagement.gscomp209.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends  JpaRepository <Teacher, Long>{
}

