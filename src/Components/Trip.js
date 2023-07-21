import TripData from "./TripData";
import "./TripStyles.css";
import React from "react";
import Trip1 from "../assests/4.jpg";
import Trip2 from "../assests/9.jpg";
import Trip3 from "../assests/10.jpg";

export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia is a vast archipelago country located in Southeast Asia. It is known for its stunning natural landscapes, including lush rainforests, beautiful beaches, and active volcanoes. The country's diverse culture, with hundreds of ethnic groups, is reflected in its arts, music, and cuisine."
        />
        <TripData
          image={Trip2}
          heading="Trip in France"
          text="Malaysia is a multicultural country located in Southeast Asia, known for its diverse blend of cultures, including Malay, Chinese, and Indian influences. The country offers a mix of modern cities, stunning islands, and UNESCO World Heritage Sites. "
        />
        <TripData
          image={Trip3}
          heading="Trip in Malaysia"
          text="France is a country located in Western Europe and is known for its rich history, art, culture, and exquisite cuisine. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Palace of Versailles."
        />
      </div>
    </div>
  );
}
