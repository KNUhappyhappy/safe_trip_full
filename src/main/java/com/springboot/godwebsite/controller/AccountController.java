package com.springboot.godwebsite.controller;

import com.springboot.godwebsite.UserDTO;
import com.springboot.godwebsite.entity.User;
import com.springboot.godwebsite.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/account")
@Api(description = "계정 관련 기능")
public class AccountController {
    @Autowired
    private UserService userService;
    @GetMapping("/login")
    @ApiOperation(value = "로그인 페이지 조회")
    public String login(){
        return "account/login";
    }

    @GetMapping("register")
    public String register(){

        return "account/register";
    }
    private User convertToEntity(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setEnabled(userDTO.getEnabled());
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setEmail(userDTO.getEmail());
        user.setPassword_check(userDTO.getPassword_check());
        return user;
    }
    @PostMapping("/register")
    @ApiOperation(value = "회원 가입 처리")
    public String register(UserDTO userDTO){
        User user = convertToEntity(userDTO);  // DTO를 실제 엔터티로 변환하는 메서드
        userService.save(user);
        return "redirect:/";
    }


}
