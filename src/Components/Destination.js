import Mountain1 from "../assests/1.jpg";
import Mountain2 from "../assests/2.jpg";
import Mountain3 from "../assests/5.jpg";
import Mountain4 from "../assests/8.jpg";
import DataDestination from "./DataDestination";

import "./DestinationStyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DataDestination
        heading="Taal Valcano, Batangas"
        text="Taal Volcano is a small active volcano located in the province of Batangas in the Philippines. It is known for its unique feature of having a lake within its crater, making it one of the most picturesque and popular tourist destinations in the country. Taal Volcano is classified as a complex volcano, characterized by its steep and conical shape.The volcano has a long history of eruptions, with recorded eruptions dating back to the 16th century. Its eruptions are often characterized by the emission of ash, steam, and gases, and sometimes accompanied by volcanic earthquakes. Despite its relatively small size, Taal Volcano is considered one of the most active volcanoes in the Philippines."
        img1={Mountain1}
        img2={Mountain2}
        className="first-des"
      />
      <DataDestination
        heading="Maldives"
        text="The Maldives, officially known as the Republic of Maldives, is a tropical paradise located in the Indian Ocean. Comprising a chain of 26 atolls, the Maldives is renowned for its breathtaking natural beauty, pristine white sandy beaches, turquoise waters, and vibrant coral reefs. It is one of the world's most sought-after destinations for beach lovers, honeymooners, and those seeking a luxurious and tranquil escape.The Maldives is located southwest of Sri Lanka and consists of a collection of islands, with only about 200 of them inhabited. The capital city is Malé, which is located on the island of the same name. The islands are known for their idyllic and secluded resorts, each typically occupying its own private island."
        img1={Mountain3}
        img2={Mountain4}
        className="first-des-reverse"
      />
    </div>
  );
};

export default Destination;
