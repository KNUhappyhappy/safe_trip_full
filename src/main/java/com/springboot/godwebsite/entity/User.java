package com.springboot.godwebsite.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@ApiModel(description = "Entity representing a user in the system")
@Data

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(value = "Unique identifier of the user", example = "1")
    private Long id;

    @ApiModelProperty(value = "Username of the user", example = "john_doe")
    private String username;
    @ApiModelProperty(value = "Password of the user", hidden = true)
    private String password;
    @ApiModelProperty(value = "Flag indicating if the user is active", example = "true")
    private Boolean enabled;
    @ApiModelProperty(value = "First name of the user", example = "John")
    private String firstname;

    @ApiModelProperty(value = "Last name of the user", example = "Doe")
    private String lastname;

    @ApiModelProperty(value = "Email address of the user", example = "john.doe@example.com")
    private String email;

    @ApiModelProperty(value = "Password check", example = "password123")
    private String password_check;



    @ApiModelProperty(name = "userRoles", hidden = true)
    @OneToMany(mappedBy = "user")
    private List<UserRole> userRoles = new ArrayList<>();

}
