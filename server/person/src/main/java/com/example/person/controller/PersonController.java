package com.example.person.controller;

import com.example.person.entity.Person;
import com.example.person.service.PersonService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin
@RestController
@RequestMapping("/person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping("")
    public Person createPerson(@RequestBody Person person) {
        return personService.savePerson(person);
    }

    @GetMapping("/all")
    public List<Person> getPerson() {
        return personService.findAllPeople();
    }

    @GetMapping("")
    public Page<Person> getPage(@RequestParam(name = "offset", required = true, defaultValue = "0") int start, 
                                @RequestParam(name = "size", required = true) int limit) {
        return personService.findByPage(start, limit);
    }

    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable int id, @RequestBody Person person) { 
        person.setId(id);
        return personService.savePerson(person);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePerson(@PathVariable int id, @RequestBody Person person) {
        person.setId(id);
        personService.deletePerson(person);
        return ResponseEntity.ok().build();
    }
}
