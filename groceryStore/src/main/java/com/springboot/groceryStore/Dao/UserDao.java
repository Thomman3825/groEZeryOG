package com.springboot.groceryStore.Dao;

import com.springboot.groceryStore.Schemas.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {
}
