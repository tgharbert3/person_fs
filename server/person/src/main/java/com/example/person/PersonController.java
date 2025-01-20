package com.example.person;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;



@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @PostMapping("/person")
    public Person createPerson(@RequestBody Person person) {
        Person savedPerson = personRepository.save(person);
        return savedPerson;
    }
    
    @GetMapping("person")
    public List<Person> getPerson() {
        return personRepository.findAll();
    }
}
