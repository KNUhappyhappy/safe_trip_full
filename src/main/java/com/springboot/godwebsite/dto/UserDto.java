package com.springboot.godwebsite.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(description = "Data Transfer Object representing a user for registration")
public class UserDto {

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword_check() {
        return password_check;
    }

    public void setPassword_check(String password_check) {
        this.password_check = password_check;
    }

    @ApiModelProperty(value = "Password check", example = "password123")
    private String password_check;
}
