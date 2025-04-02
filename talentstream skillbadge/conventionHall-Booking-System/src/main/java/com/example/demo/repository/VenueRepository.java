package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Venue;

public interface VenueRepository extends JpaRepository<Venue, Long>{
	 List<Venue> findByCity(String city);

}
