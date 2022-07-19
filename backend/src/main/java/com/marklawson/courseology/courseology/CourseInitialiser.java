package com.marklawson.courseology.courseology;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileReader;


@Component
public class CourseInitialiser {

    private final CourseRepository courseRepository;

    @Value("classpath:courses.json")
    private Resource resourceFile;


    @Autowired
    public CourseInitialiser(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @PostConstruct
    public void init() {
        JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader(resourceFile.getFile())) {
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for(Object course : jsonArray) {
                JSONObject courseJSON = (JSONObject) course;

                String id = (String) courseJSON.get("id");
                String title = (String) courseJSON.get("title");
                String category = (String) courseJSON.get("category");
                String location = (String) courseJSON.get("location");
                String price = (String) courseJSON.get("price");
                String duration = (String) courseJSON.get("duration");
                String summary = (String) courseJSON.get("summary");

                courseRepository.createCourse(new Course(id, title, category, location, price, duration, summary));

            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }










}
