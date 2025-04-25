import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import DoctorCard from "./DoctorCard";
import "./styles.css";

const API_URL = "https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json";
function App() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [sortOption, setSortOption] = useState("");
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setFilteredDoctors(data);
      });
  }, []);
  useEffect(() => {
    let result = [...doctors];
    if (searchTerm) {
      result = result.filter((doc) =>
        doc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (mode) {
      result = result.filter((doc) =>
        mode === "Video Consultation" ? doc.videoConsultation : !doc.videoConsultation
      );
    }
    if (selectedSpecialties.length > 0) {
      result = result.filter((doc) =>
        selectedSpecialties.every((spec) => doc.specialities.includes(spec))
      );
    }
    if (sortOption === "fees") {
      result.sort((a, b) => a.fees - b.fees);
    } else if (sortOption === "experience") {
      result.sort((a, b) => b.experience - a.experience);
    }
    setFilteredDoctors(result);
  }, [searchTerm, mode, selectedSpecialties, sortOption, doctors]);
  return (
    <div className="container">
      <SearchBar doctors={doctors} onSearch={setSearchTerm} />
      <div className="main">
        <FilterPanel
          mode={mode}
          setMode={setMode}
          selectedSpecialties={selectedSpecialties}
          setSelectedSpecialties={setSelectedSpecialties}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <div className="doctor-list">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
