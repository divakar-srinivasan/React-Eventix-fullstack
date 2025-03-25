package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "events")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String image; // Base64 encoded or file path
    private String eventName;
    private String description;
    private String rollno;
    private String name;
    private String department;
    private String venue;
    private Date startDate;
    private Date endDate;
    private String startTime;
    private String endTime;
    private String formLink;
    private String whatsappLink;
}
