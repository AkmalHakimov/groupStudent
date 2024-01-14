package com.example.demo;

import com.example.demo.entity.Group;
import com.example.demo.entity.Student;

import java.util.ArrayList;
import java.util.List;

public class Db {

    public static List<Group> groups = new ArrayList<>();
    public static List<Student> students = new ArrayList<>();

    public static void init(){
        generateGroup();
        generateStudent();
    }

    private static void generateGroup(){
        Group group = new Group(1,"G23");
        Group group1 = new Group(2,"G24");
        Group group2 = new Group(3,"G25");
        groups.addAll(List.of(group,group1,group2));
        Group.lastId = 3;
    }
    private static void generateStudent(){
        Student student = new Student(1,1,"Akmal","Khakimov");
        Student student1 = new Student(2,1,"Beki","Khakimov");
        Student student2 = new Student(3,2,"Samo","Khakimov");
        Student student3 = new Student(4,2,"Sunik","Khakimov");
        Student student4 = new Student(5,3,"Akow","Khakimov");
        Student student5 = new Student(6,3,"Vali","Khakimov");
        students.addAll(List.of(student,student3,student4,student5,student1,student2));
        Group.lastId =6;
    }
}
