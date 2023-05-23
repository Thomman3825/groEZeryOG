package com.springboot.groceryStore.Services;

import com.springboot.groceryStore.Dao.UserDao;
import com.springboot.groceryStore.Schemas.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class UserServiceImp implements UserService{
    @Autowired
    private UserDao userDao;
    @Override
    public String addUser(List<User> user) {
        userDao.saveAll(user);
        return "User added successfully";
    }

    @Override
    public List<User> getUser() {
        return userDao.findAll();
    }
}
