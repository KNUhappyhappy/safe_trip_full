package com.springboot.godwebsite.entity;

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


    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))


    private List<Role> roles = new ArrayList<>();


}
