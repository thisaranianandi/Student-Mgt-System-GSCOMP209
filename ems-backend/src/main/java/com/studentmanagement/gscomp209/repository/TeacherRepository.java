package net.fernandosalas.ems.repository;
import  net.fernandosalas.ems.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends  JpaRepository <Teacher, Long>{
}

