package com.springcrud.crud.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.springcrud.crud.entity.User;
import com.springcrud.crud.services.UserService;


@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.getUsers();
	}
	
	@GetMapping("/user/{userId}")
	public User getUser(@PathVariable Long userId) {
		return userService.getUser((userId));
	}
	
	@PutMapping("/user/{id}")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/user/{userId}")
	public User deleteUser(@PathVariable Long userId){
		return userService.deleteUser((userId));
	}
	
}