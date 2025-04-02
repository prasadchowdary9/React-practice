package com.example.venue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Availability;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
}