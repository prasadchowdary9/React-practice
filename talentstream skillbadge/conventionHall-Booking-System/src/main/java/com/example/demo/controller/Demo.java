package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Demo {
	
	@GetMapping("/demo")
	public String demo() {
		System.out.println("test method executed");
		return "this is demo method";
	}

}
