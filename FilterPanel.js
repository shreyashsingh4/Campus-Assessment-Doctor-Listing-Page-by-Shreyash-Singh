// src/components/FilterPanel.js
import React from "react";

const specialtiesList = [
  "General Physician", "Dentist", "Dermatologist", "Paediatrician", "Gynaecologist",
  "ENT", "Diabetologist", "Cardiologist", "Physiotherapist", "Endocrinologist",
  "Orthopaedic", "Ophthalmologist", "Gastroenterologist", "Pulmonologist", "Psychiatrist",
  "Urologist", "Dietitian/Nutritionist", "Psychologist", "Sexologist", "Nephrologist",
  "Neurologist", "Oncologist", "Ayurveda", "Homeopath"
];

function FilterPanel({ mode, setMode, selectedSpecialties, setSelectedSpecialties, sortOption, setSortOption }) {
  const handleSpecialtyChange = (spec) => {
    if (selectedSpecialties.includes(spec)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== spec));
    } else {
      setSelectedSpecialties([...selectedSpecialties, spec]);
    }
  };

  return (
    <div className="filters">
      <h4 data-testid="filter-header-moc">Mode of consultation</h4>
      <label><input type="radio" name="mode" data-testid="filter-video-consult" onChange={() => setMode("Video Consultation")} checked={mode === "Video Consultation"} /> Video Consultation</label>
      <label><input type="radio" name="mode" data-testid="filter-in-clinic" onChange={() => setMode("In Clinic")} checked={mode === "In Clinic"} /> In-clinic Consultation</label>

      <h4 data-testid="filter-header-speciality">Specialities</h4>
      {specialtiesList.map((spec) => (
        <label key={spec}>
          <input
            type="checkbox"
            data-testid={`filter-specialty-${spec.replaceAll("/", "-").replaceAll(" ", "-")}`}
            checked={selectedSpecialties.includes(spec)}
            onChange={() => handleSpecialtyChange(spec)}
          />
          {spec}
        </label>
      ))}

      <h4 data-testid="filter-header-sort">Sort by</h4>
      <label><input type="radio" name="sort" data-testid="sort-fees" onChange={() => setSortOption("fees")} checked={sortOption === "fees"} /> Price: Low–High</label>
      <label><input type="radio" name="sort" data-testid="sort-experience" onChange={() => setSortOption("experience")} checked={sortOption === "experience"} /> Experience: High–Low</label>
    </div>
  );
}

export default FilterPanel;
