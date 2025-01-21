package com.example.person.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.person.entity.Person;

import java.util.List;


public interface PersonRepository extends JpaRepository<Person, Integer> {

    List<Person> findByFirstName(String firstName);

}
