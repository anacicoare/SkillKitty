package com.example.demo.Service;

import com.example.demo.Model.Users;
import com.example.demo.Repository.UsersRepository;
import com.example.demo.Shared.Response.UsersResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class  UsersService {

    @Autowired
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    public Users saveUsers(Users users) {
        return usersRepository.save(users);
    }

    public Users getUsersById(BigDecimal usersId) {
        Optional<Users> usersOptional = usersRepository.findById(usersId);
        System.out.println(usersOptional);
        return usersOptional.orElse(null); // Returns null if users not found, handle as needed
    }

//    public UsersResponse validateLogin(String mail, String password) throws Exception {
//        Optional<Users> user = usersRepository.findByMailAndPassword();
//        if(user.isEmpty()) {
//            throw new Exception("Mail or password is wrong.");
//        }
//        else {
//            UsersResponse usersResponse = new UsersResponse(user.get().getName(), user.get().getSurname());
//            return usersResponse;
//        }
//    }
}

