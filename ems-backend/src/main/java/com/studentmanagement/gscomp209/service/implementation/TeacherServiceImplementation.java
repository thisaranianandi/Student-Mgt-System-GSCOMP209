package com.studentmanagement.gscomp209.service.implementation;

import com.studentmanagement.gscomp209.dto.TeacherDto;
import com.studentmanagement.gscomp209.mapper.TeacherMapper;
import com.studentmanagement.gscomp209.repository.TeacherRepository;
import com.studentmanagement.gscomp209.service.TeacherService;
import com.studentmanagement.gscomp209.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeacherServiceImplementation implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final TeacherMapper teacherMapper;

    @Autowired
    public TeacherServiceImplementation(TeacherRepository teacherRepository, TeacherMapper teacherMapper) {
        this.teacherRepository = teacherRepository;
        this.teacherMapper = teacherMapper;
    }

    @Override
    public TeacherDto createTeacher(TeacherDto teacherDto) {
        Teacher teacher = teacherMapper.toEntity(teacherDto);  // Convert DTO to Entity
        Teacher savedTeacher = teacherRepository.save(teacher);  // Save the teacher in DB
        return teacherMapper.toDTO(savedTeacher);  // Return saved teacher as DTO
    }

    @Override
    public TeacherDto getTeacherById(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(() -> new RuntimeException("Teacher not found with id " + teacherId));  // Handle exception if teacher is not found
        return teacherMapper.toDTO(teacher);  // Convert Entity to DTO and return
    }

    @Override
    public List<TeacherDto> getAllTeachers() {
        List<Teacher> teachers = teacherRepository.findAll();  // Fetch all teachers
        return teachers.stream()  // Convert List of Teachers to List of TeacherDto
                .map(teacherMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TeacherDto updateTeacher(Long teacherId, TeacherDto teacherDto) {
        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(() -> new RuntimeException("Teacher not found with id " + teacherId));  // Handle exception if teacher is not found
        teacher.setName(teacherDto.getName());
        teacher.setEmail(teacherDto.getEmail());
        // Update other fields as needed
        Teacher updatedTeacher = teacherRepository.save(teacher);  // Save updated teacher
        return teacherMapper.toDTO(updatedTeacher);  // Return updated teacher as DTO
    }

    @Override
    public void deleteTeacher(Long teacherId) {
        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(() -> new RuntimeException("Teacher not found with id " + teacherId));  // Handle exception if teacher is not found
        teacherRepository.delete(teacher);  // Delete teacher from DB
    }
}
