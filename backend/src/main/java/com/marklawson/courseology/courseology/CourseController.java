package com.marklawson.courseology.courseology;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class CourseController {

        @GetMapping("/hello")
        public String hello() {
        return "Hello, this is a test";
    }







}
