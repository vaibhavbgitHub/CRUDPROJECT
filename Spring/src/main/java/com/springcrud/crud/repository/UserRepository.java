package com.springcrud.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrud.crud.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
