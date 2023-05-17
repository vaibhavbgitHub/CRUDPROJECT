package com.springcrud.crud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springcrud.crud.repository.UserRepository;
import com.springcrud.crud.entity.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUser(long userId) {
		return userRepository.findById(userId).get();
	}

	@Override
	public User addUser(User user) {
		userRepository.save(user);
		return user;
	}

	@Override
	public User updateUser(User user) {
		userRepository.save(user);
		return user;
	}

	@Override
	public User deleteUser(long userId) {
		User user = userRepository.findById(userId).get();
		userRepository.delete(user);
		return user;
	}
	
}