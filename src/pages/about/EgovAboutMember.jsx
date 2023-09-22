import React from "react";
import { useState } from "react";
function EgovAboutMember() {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = [
    {
      fullName: "John Doe",
      date: "1990-05-15",
      gender: "Male",
      place: "New York, USA",
      address: "123 Main St",
      phone: "123-4567",
      pesonality: "Friendly and outgoing",
      email: "john.doe@email.com",
      id: "1234567890",
      nationality: "American",
      marital: "Single",
      career: "Software Engineer",
      health: "Excellent",
      academic: "Master's Degree",
      experience: "5 years",
      hobbies: "Reading, Hiking",
      social: "@johndoe",
      bank: "123-456-7890",
      family: "Parents and 2 siblings",
      vehicle: "Toyota Camry",
    },
    {
      fullName: "Alice Smith",
      date: "1985-12-20",
      gender: "Female",
      place: "Los Angeles, USA",
      address: "456 Elm St",
      phone: "555-1234",
      pesonality: "Kind and empathetic",
      email: "alice.smith@email.com",
      id: "9876543210",
      nationality: "American",
      marital: "Married",
      career: "Teacher",
      health: "Good",
      academic: "Bachelor's Degree",
      experience: "10 years",
      hobbies: "Painting, Cooking",
      social: "@alicesmith",
      bank: "987-654-3210",
      family: "Husband and 3 children",
      vehicle: "Honda Civic",
    },

    {
      fullName: "David Johnson",
      date: "1982-09-25",
      gender: "Male",
      place: "Chicago, USA",
      address: "789 Oak St",
      phone: "555-5678",
      pesonality: "Analytical and focused",
      email: "david.johnson@email.com",
      id: "2468135790",
      nationality: "American",
      marital: "Divorced",
      career: "Financial Analyst",
      health: "Very good",
      academic: "Bachelor's Degree",
      experience: "12 years",
      hobbies: "Golfing, Traveling",
      social: "@davidjohnson",
      bank: "246-813-5790",
      family: "Two children",
      vehicle: "Ford Explorer",
    },

    {
      fullName: "Emily Davis",
      date: "1995-03-10",
      gender: "Female",
      place: "San Francisco, USA",
      address: "567 Pine St",
      phone: "555-9876",
      pesonality: "Energetic and adventurous",
      email: "emily.davis@email.com",
      id: "1357924680",
      nationality: "American",
      marital: "Single",
      career: "Marketing Specialist",
      health: "Excellent",
      academic: "Bachelor's Degree",
      experience: "7 years",
      hobbies: "Skiing, Photography",
      social: "@emilydavis",
      bank: "135-792-4680",
      family: "No siblings",
      vehicle: "Tesla Model 3",
    },
    {
      fullName: "Michael Wilson",
      date: "1988-07-05",
      gender: "Male",
      place: "Houston, USA",
      address: "678 Cedar St",
      phone: "555-2345",
      pesonality: "Calm and reliable",
      email: "michael.wilson@email.com",
      id: "8642097531",
      nationality: "American",
      marital: "Married",
      career: "Doctor",
      health: "Excellent",
      academic: "Doctor of Medicine",
      experience: "15 years",
      hobbies: "Fishing, Gardening",
      social: "@michaelwilson",
      bank: "864-209-7531",
      family: "Wife and 2 children",
      vehicle: "Chevrolet Silverado",
    },
    {
      fullName: "Sophia Brown",
      date: "1993-11-15",
      gender: "Female",
      place: "Miami, USA",
      address: "890 Maple St",
      phone: "555-3456",
      pesonality: "Creative and artistic",
      email: "sophia.brown@email.com",
      id: "3692581470",
      nationality: "American",
      marital: "Single",
      career: "Graphic Designer",
      health: "Good",
      academic: "Bachelor's Degree",
      experience: "8 years",
      hobbies: "Painting, Dancing",
      social: "@sophiabrown",
      bank: "369-258-1470",
      family: "One sibling",
      vehicle: "Volkswagen Jetta",
    },
    {
      fullName: "Daniel Lee",
      date: "1980-04-02",
      gender: "Male",
      place: "Seattle, USA",
      address: "123 Cedar St",
      phone: "555-4321",
      pesonality: "Ambitious and determined",
      email: "daniel.lee@email.com",
      id: "7418529630",
      nationality: "American",
      marital: "Married",
      career: "Business Owner",
      health: "Very good",
      academic: "Bachelor's Degree",
      experience: "20 years",
      hobbies: "Playing Guitar, Traveling",
      social: "@daniellee",
      bank: "741-852-9630",
      family: "Wife and 3 children",
      vehicle: "BMW 5 Series",
    },
    {
      fullName: "Olivia Martinez",
      date: "1991-08-12",
      gender: "Female",
      place: "Dallas, USA",
      address: "345 Birch St",
      phone: "555-8765",
      pesonality: "Friendly and sociable",
      email: "olivia.martinez@email.com",
      id: "2581473690",
      nationality: "American",
      marital: "Single",
      career: "Sales Manager",
      health: "Good",
      academic: "Bachelor's Degree",
      experience: "9 years",
      hobbies: "Dancing, Cooking",
      social: "@oliviamartinez",
      bank: "258-147-3690",
      family: "No siblings",
      vehicle: "Toyota RAV4",
    },
    {
      fullName: "William Taylor",
      date: "1987-06-30",
      gender: "Male",
      place: "Phoenix, USA",
      address: "234 Birch St",
      phone: "555-6789",
      pesonality: "Logical and systematic",
      email: "william.taylor@email.com",
      id: "9638529630",
      nationality: "American",
      marital: "Married",
      career: "Engineer",
      health: "Very good",
      academic: "Master's Degree",
      experience: "14 years",
      hobbies: "Reading, Tennis",
      social: "@williamtaylor",
      bank: "963-852-9630",
      family: "Wife and 2 children",
      vehicle: "Toyota Camry",
    },
  ];

  const handleRowClick = (rowIndex) => {
    setSelectedRow(rowIndex);
  };

  const handleClosePopup = () => {
    setSelectedRow(null);
  };

  return (
    <div className="container">
      <div className="c_wrap">
        <div class="table-container">
          <table>
            <tr className="trTitle">
              <th>Full name</th>
              <th>Date</th>
              <th>Gender</th>
              <th>Place</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Personality</th>
              <th>Email</th>
              <th>ID</th>
              <th>Nationality</th>
              <th>Marital status</th>
              <th>Career</th>
              <th>Health</th>
              <th>Academic level</th>
              <th>Experience</th>
              <th>Hobbies</th>
              <th>Social media</th>
              <th>Bank account</th>
              <th>Family</th>
              <th>Vehicle</th>
            </tr>
            <tbody className="tbdata">
              {data.map((row, index) => (
                <tr key={index} onClick={() => handleRowClick(index)}>
                  <th>{row.fullName}</th>
                  <th>{row.date}</th>
                  <th>{row.gender}</th>
                  <th>{row.place}</th>
                  <th>{row.address}</th>
                  <th>{row.phone}</th>
                  <th>{row.pesonality}</th>
                  <th>{row.email}</th>
                  <th>{row.id}</th>
                  <th>{row.nationality}</th>
                  <th>{row.marital}</th>
                  <th>{row.career}</th>
                  <th>{row.health}</th>
                  <th>{row.academic}</th>
                  <th>{row.experience}</th>
                  <th>{row.hobbies}</th>
                  <th>{row.social}</th>
                  <th>{row.bank}</th>
                  <th>{row.family}</th>
                  <th>{row.vehicle}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="detail">
        {selectedRow !== null && (
          <div className="overlay" onClick={handleClosePopup}>
            <div className="popup">
              <h2>Details</h2>
              <p>
                <strong>Full Name:</strong> {data[selectedRow].fullName}
              </p>
              <p>
                <strong>Date:</strong> {data[selectedRow].date}
              </p>
              <p>
                <strong>Gender:</strong> {data[selectedRow].gender}
              </p>
              <p>
                <strong>Place:</strong> {data[selectedRow].place}
              </p>
              <p>
                <strong>Address:</strong> {data[selectedRow].address}
              </p>
              <p>
                <strong>Phone:</strong> {data[selectedRow].phone}
              </p>
              <p>
                <strong>Personality:</strong> {data[selectedRow].pesonality}
              </p>
              <p>
                <strong>Email:</strong> {data[selectedRow].email}
              </p>
              <p>
                <strong>ID:</strong> {data[selectedRow].id}
              </p>
              <p>
                <strong>Nationality:</strong> {data[selectedRow].nationality}
              </p>
              <p>
                <strong>Marital status:</strong> {data[selectedRow].marital}
              </p>
              <p>
                <strong>Career:</strong> {data[selectedRow].career}
              </p>
              <p>
                <strong>Health:</strong> {data[selectedRow].health}
              </p>
              <p>
                <strong>Academic level:</strong> {data[selectedRow].academic}
              </p>
              <p>
                <strong>Experience:</strong> {data[selectedRow].experience}
              </p>
              <p>
                <strong>Hobbies:</strong> {data[selectedRow].hobbies}
              </p>
              <p>
                <strong>Social media:</strong> {data[selectedRow].social}
              </p>
              <p>
                <strong>Bank account:</strong> {data[selectedRow].bank}
              </p>
              <p>
                <strong>Family:</strong> {data[selectedRow].family}
              </p>
              <p>
                <strong>Vehicle:</strong> {data[selectedRow].vehicle}
              </p>
              <div className="bt">
                <button onClick={handleClosePopup} className="btClose">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default EgovAboutMember;
