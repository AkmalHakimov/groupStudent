package com.example.demo.entity;


import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Group {
    private Integer id;
    private String name;
    public static Integer lastId=0;

    public Group(Integer id, String name) {
        this.id = id;
        this.name = name;
    }
}
