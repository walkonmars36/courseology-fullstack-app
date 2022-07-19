package com.marklawson.courseology.courseology;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class CourseologyApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseologyApplication.class, args);
	}

}
