package net.fernandosalas.ems.mapper;

import net.fernandosalas.ems.entity.Teacher;
import net.fernandosalas.ems.dto.TeacherDto;
import org.springframework.stereotype.Component;

@Component
public class TeacherMapper {

    public TeacherDto toDto(Teacher teacher) {
        TeacherDto dto = new TeacherDto();
        dto.setId(teacher.getId());
        dto.setName(teacher.getName());
        dto.setEmail(teacher.getEmail());

        if (teacher.getCourse() != null) {
            dto.setCourseId(teacher.getCourse().getId());
            dto.setCourseName(teacher.getCourse().getCourseName());
        }

        return dto;
    }

    public Teacher toEntity(TeacherDto dto) {
        Teacher teacher = new Teacher();
        teacher.setId(dto.getId());
        teacher.setName(dto.getName());
        teacher.setEmail(dto.getEmail());

        // The course should be set explicitly in the service layer.
        return teacher;
    }

    public TeacherDto toDTO(Teacher teacher) {
        // This method now reuses the toDto logic for consistency
        return toDto(teacher);
    }
}
