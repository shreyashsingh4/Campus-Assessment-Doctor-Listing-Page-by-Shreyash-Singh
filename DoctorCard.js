// src/components/DoctorCard.js
import React from "react";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card" data-testid="doctor-card">
      <div className="doctor-info">
        <div className="doctor-photo">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div>
          <h3 data-testid="doctor-name">{doctor.name}</h3>
          <p data-testid="doctor-specialty">{doctor.specialities.join(", ")}</p>
          <p data-testid="doctor-experience">{doctor.experience} yrs exp.</p>
          <p>{doctor.hospital}</p>
          <p>{doctor.area}</p>
        </div>
      </div>
      <div className="doctor-action">
        <p data-testid="doctor-fee">₹ {doctor.fees}</p>
        <button>Book Appointment</button>
      </div>
    </div>
  );
}

export default DoctorCard;
