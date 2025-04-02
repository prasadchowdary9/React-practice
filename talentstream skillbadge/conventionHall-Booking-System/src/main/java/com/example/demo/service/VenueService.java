package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Venue;
import com.example.demo.repository.VenueRepository;

@Service
public class VenueService {
	
    @Autowired
    private  VenueRepository venueRepository;

    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    public Optional<Venue> getVenueById(Long id) {
        return venueRepository.findById(id);
    }

    public List<Venue> getVenuesByCity(String city) {
        return venueRepository.findByCity(city);
    }

    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    public Venue updateVenue(Long id, Venue venueDetails) {
        return venueRepository.findById(id).map(venue -> {
            venue.setName(venueDetails.getName());
            venue.setLocation(venueDetails.getLocation());
            venue.setDescription(venueDetails.getDescription());
            venue.setImage(venueDetails.getImage());
            venue.setImages(venueDetails.getImages());
            venue.setPrice(venueDetails.getPrice());
            venue.setCapacity(venueDetails.getCapacity());
            venue.setAmenities(venueDetails.getAmenities());
            venue.setRating(venueDetails.getRating());
            venue.setReviewCount(venueDetails.getReviewCount());
            venue.setFeatured(venueDetails.isFeatured());
            venue.setCity(venueDetails.getCity());
            return venueRepository.save(venue);
        }).orElseThrow(() -> new RuntimeException("Venue not found"));
    }

    public void deleteVenue(Long id) {
        venueRepository.deleteById(id);
    }
}
