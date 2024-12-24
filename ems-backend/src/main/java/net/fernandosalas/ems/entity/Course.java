package net.fernandosalas.ems.entity;

        import jakarta.persistence.*;
        import lombok.AllArgsConstructor;
        import lombok.Getter;
        import lombok.NoArgsConstructor;
        import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "courses")  // Define the name of the table as "courses"
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // ID for the course entity

    @Column(name = "course_name")
    private String courseName;  // Name of the course

    @Column(name = "course_description")
    private String courseDescription;  // Description of the course
}
