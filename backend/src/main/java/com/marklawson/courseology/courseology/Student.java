package com.marklawson.courseology.courseology;

public class Student {

private String id;
private String name;
private String email;
private String password;
private String courseId;

    public Student(String id, String name, String email, String password, String courseId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.courseId = courseId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }
}
