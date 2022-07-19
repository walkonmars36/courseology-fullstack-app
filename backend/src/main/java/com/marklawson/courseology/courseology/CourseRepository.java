package com.marklawson.courseology.courseology;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CourseRepository {

    private final List<Course> courses = new ArrayList<>();

//    Create -> course
    public void createCourse(Course course) {
        courses.add(course);
    }

//    Read -> get course by id
    public Course getCourseById(String id) {
        for (Course course: courses) {
            if(course.getId().equals(id)) {
                return course;
            }
        }

       throw new CourseNotFoundException();
    }


//    Read -> get all courses
    public List<Course> getAllCourses() {
        return courses;
    }

//    Update -> course
    public void updateCourse(Course newCourse, String id) {
        for (int i = 0; i < courses.size(); i++) {
            if(courses.get(i).getId().equals(id)) {
                courses.set(i, newCourse);
                break;
            }
        }
        throw new CourseNotFoundException();
    }


//    Delete -> course
    public void deleteCourseById(String id) {
        for (int i = 0; i < courses.size(); i++) {
            if(courses.get(i).getId().equals(id)) {
                courses.remove(i);
                break;
            }
        }
        throw new CourseNotFoundException();
    }



}
