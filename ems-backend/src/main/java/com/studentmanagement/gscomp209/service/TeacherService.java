package com.studentmanagement.gscomp209.service;
import com.studentmanagement.gscomp209.dto.TeacherDto;

import java.util.List;

public interface TeacherService {
    TeacherDto createTeacher(TeacherDto teacherDto);
    TeacherDto getTeacherById(Long teacherId);
    List<TeacherDto> getAllTeachers();
    TeacherDto updateTeacher(Long teacherId, TeacherDto teacherDto);
    void deleteTeacher(Long teacherId);
}
