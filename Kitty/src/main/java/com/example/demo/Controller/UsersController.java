package com.example.demo.Controller;

import com.example.demo.Shared.Request.UsersRequest;
import com.example.demo.Model.Users;
import com.example.demo.Service.UsersService;
import com.example.demo.Shared.Response.UsersResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import java.math.BigDecimal;

@RestController
@RequestMapping(path ="/api/users")
public class UsersController {

    @Autowired
    private final UsersService usersService;

    private UsersRequest usersRequest;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/register")
    public Users createUsers(@RequestBody UsersRequest usersDTO) {
        Users user = new Users(usersDTO.getName(), usersDTO.getSurname(), usersDTO.getMail(), usersDTO.getPassword(), "premium", 0);
        return usersService.saveUsers(user);
    }

//    @GetMapping("/login/{mail}/{password}")
//    public UsersResponse validateLogin(@PathVariable String mail, @PathVariable String password) throws Exception {
//        return usersService.validateLogin(mail, password);
//    }

    @GetMapping("get/{usersId}")
    public Users getUsersById(@PathVariable Integer usersId) {
        return usersService.getUsersById(BigDecimal.valueOf(0));
    }

}

