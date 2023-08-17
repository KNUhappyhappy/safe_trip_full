package com.springboot.godwebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Controller
@Api(description = "홈 페이지 관련 기능")
public class HomeController {
    @GetMapping()
    @ApiOperation(value = "홈 페이지 조회")
    public String index(){
        return "index";
    }

}
