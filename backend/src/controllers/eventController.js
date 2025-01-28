const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
  const image = req.file.buffer;
  const eventName = req.body.eventName;
  const description = req.body.description;
  const rollno = req.body.rollno;
  const name = req.body.name;
  const department = req.body.department;
  const venue = req.body.venue;
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const formLink = req.body.formLink;
  const whatsappLink = req.body.whatsappLink;

  try {
    const event = new Event({
      image: image,
      eventName: eventName,
      description: description,
      rollno: rollno,
      name: name,
      department: department,
      venue: venue,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      formLink: formLink,
      whatsappLink: whatsappLink,
    });
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event: event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}); 
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};