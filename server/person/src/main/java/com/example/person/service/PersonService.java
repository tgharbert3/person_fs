package com.example.person.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.person.entity.Person;
import com.example.person.repo.PersonRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import java.util.List;

@Service
public class PersonService {

    @Autowired 
    PersonRepository personRepository;

    public Person savePerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

    public List<Person> findAllPeople() { 
        return personRepository.findAll(); 
    }    

    public Page<Person> findByPage(int offset, int size) {
        return personRepository.findAll(PageRequest.of(offset, size));
    }

    public ResponseEntity<?> deletePerson(Person person) {
         personRepository.delete(person);
         return ResponseEntity.ok().build();
    }
}
