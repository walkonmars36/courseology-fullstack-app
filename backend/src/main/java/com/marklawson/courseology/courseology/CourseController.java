package com.marklawson.courseology.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    CourseRepository courseRepository;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

//    Create course
    @GetMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course) {
        courseRepository.createCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created new course with ID: " + course.getId());
    }


//    Get course by ID
    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id) {
        Course course = courseRepository.getCourseById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(course);
    }


//    Get all courses
    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseRepository.getAllCourses();
        return ResponseEntity.status(HttpStatus.FOUND).body(courses);
    }

//    Update course
    @GetMapping("/course/update/{id}")
    public ResponseEntity<String> updateCourse(@RequestBody Course newCourse, @PathVariable String id) {
        courseRepository.updateCourse(newCourse, id);
        return ResponseEntity.status(HttpStatus.OK).body("Course updated with ID: " + newCourse.getId());
    }

// Delete course
    @DeleteMapping("/course/delete/{id}")
    public ResponseEntity<String> deleteCourseById(@PathVariable String id) {
        courseRepository.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Course deleted");
    }





}
