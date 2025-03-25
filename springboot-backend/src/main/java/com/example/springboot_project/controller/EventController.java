package com.example.demo.controller;

import com.example.demo.model.Event;
import com.example.demo.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/event-form")
    public String eventForm() {
        return "event-form";
    }

    @PostMapping("/submit-event")
    public String submitEvent(@ModelAttribute Event event) {
        eventService.saveEvent(event);
        return "redirect:/event-form";
    }
}
