package com.example.demo.controllers;

import com.example.demo.Db;
import com.example.demo.entity.Group;
import com.example.demo.payload.GroupReq;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class GroupController {
   @RequestMapping(path = "/group",method = RequestMethod.GET)
   public List<Group> getGroup(@RequestParam(defaultValue = "") Integer groupId){
       List<Group> tempGroups = new ArrayList<>();
       if(groupId==null){
           return Db.groups;
       }else {
           for (Group group : Db.groups) {
               if(group.getId().equals(groupId)){
                   tempGroups.add(group);
               }
           }
           return tempGroups;
       }
   }

   @RequestMapping(path = "/group", method = RequestMethod.POST)
    public void saveGroup(@RequestBody GroupReq groupReq){
       Group group = new Group(++Group.lastId,groupReq.getName());
       Db.groups.add(group);
   }

   @RequestMapping(path = "/group/{groupId}", method = RequestMethod.DELETE)
    public void delGroup(@PathVariable Integer groupId){
       Group tempGroup = null;
       for (Group group : Db.groups) {
           if(group.getId().equals(groupId)){
                Db.groups.remove(group);
               return;
           }
       }
   }

   @RequestMapping(path = "/group/{groupId}", method = RequestMethod.PUT)
    public void editGroup(@RequestBody GroupReq groupReq,@PathVariable Integer groupId){
       for (Group group : Db.groups) {
           if(group.getId().equals(groupId)){
               group.setName(groupReq.getName());
               return;
           }
       }

   }
}
