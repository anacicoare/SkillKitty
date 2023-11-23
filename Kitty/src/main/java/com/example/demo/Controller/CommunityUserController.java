//package com.example.demo.Controller;
//
//import com.example.demo.Service.UsersService;
//import com.example.demo.Shared.Response.UsersResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping(path ="/api/")
//public class CommunityUserController {
//
//    @Autowired
//    private final UsersService usersService;
//
//    public CommunityUserController(UsersService usersService) {
//        this.usersService = usersService;
//    }
//
////    @GetMapping("get-community-members/{communityId}")
////    public List<UsersResponse> getCommunityMembers(@PathVariable String communityId) {
////        return usersService.getCommunityMembers(communityId);
////    }
//}
