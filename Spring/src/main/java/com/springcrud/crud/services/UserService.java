package com.springcrud.crud.services;

import java.util.List;

import com.springcrud.crud.entity.User;

public interface UserService {
	
	public List<User> getUsers();

	public User addUser(User user);

	public User getUser(long userId);

	public User updateUser(User user);
	
	public User deleteUser(long userId);
}