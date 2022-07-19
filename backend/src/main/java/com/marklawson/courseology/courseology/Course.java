package com.marklawson.courseology.courseology;

public class Course {

    private String id;
    private String title;
    private String category;
    private String location;
    private String price;
    private String duration;
    private String summary;

    public Course(String id, String title, String category, String location, String price, String duration, String summary) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.location = location;
        this.price = price;
        this.duration = duration;
        this.summary = summary;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}
