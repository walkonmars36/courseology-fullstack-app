package com.marklawson.courseology.courseology;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
    Course findByid(String id);

    String deleteByid(String id);
}
