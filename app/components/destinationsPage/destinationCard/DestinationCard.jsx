"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DestinationCard = () => {
  const [destinationCard, setDestinationCard] = useState([]);

  useEffect(() => {
    async function fetchDestinationData() {
      try {
        const response = await fetch("/places.json");
        if (!response.ok) {
          throw new Error("Failed to fetch destination data");
        }
        const data = await response.json();
        setDestinationCard(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDestinationData();
  }, []);

  return (
    <div>
      {destinationCard.length === 0 ? (
        <p>Loading destinations...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {destinationCard.map((destination, index) => (
            <div key={index} className="card bg-base-100 shadow-sm">
              <figure
                className="relative w-full h-0"
                style={{ paddingBottom: "56.25%" }}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{destination.name}</h2>
                <p>{destination.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
