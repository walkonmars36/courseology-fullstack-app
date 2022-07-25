package com.marklawson.courseology.courseology;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursesRepository extends JpaRepository<Course, String> {
}
