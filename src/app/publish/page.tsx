"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useRouter } from "next/navigation"; // Import useRouter

export default function PublishPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [numPassengers, setNumOfPassengers] = useState(0);
  const [fromAutocomplete, setFromAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [toAutocomplete, setToAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const router = useRouter(); // Initialize useRouter

  // Handle "From" location selection
  const handleFromPlaceSelect = () => {
    const place = fromAutocomplete?.getPlace();
    if (place) {
      setFrom(place.formatted_address || "");
    }
  };

  // Handle "To" location selection
  const handleToPlaceSelect = () => {
    const place = toAutocomplete?.getPlace();
    if (place) {
      setTo(place.formatted_address || "");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to login page
    router.push("/auth/signin");
  };

  return (
    <DefaultLayout>
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-8xl mx-auto bg-customYellow rounded-lg shadow-lg p-4 sm:p-8">
        <h1 className="text-black text-xl sm:text-2xl font-bold mb-6">Publish a Ride</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column: Form */}
          <div className="p-4 border rounded-lg shadow-md bg-gray-50">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* From Location */}
              <div>
                <label
                  htmlFor="from"
                  className="block text-gray-600 font-medium mb-2"
                >
                  From
                </label>
                <LoadScript
                    googleMapsApiKey={
                      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
                    }
                    libraries={["places"]}
                  >
                    <Autocomplete
                      onLoad={(auto) => setFromAutocomplete(auto)}
                      onPlaceChanged={handleFromPlaceSelect}
                    >
                      <input
                        id="from"
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        placeholder="Melbourne, Victoria, Australia"
                        className="input-field"
                      />
                    </Autocomplete>
                  </LoadScript>
              </div>

              {/* To Location */}
              <div>
                <label
                  htmlFor="to"
                  className="block text-gray-600 font-medium mb-2"
                >
                  To
                </label>

                <LoadScript
                    googleMapsApiKey={
                      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
                    }
                    libraries={["places"]}
                  >
                    <Autocomplete
                      onLoad={(auto) => setToAutocomplete(auto)}
                      onPlaceChanged={handleToPlaceSelect}
                    >
                      <input
                        id="to"
                        type="text"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        placeholder="Sydney, New South Wales, Australia"
                        className="input-field"
                      />
                    </Autocomplete>
                  </LoadScript>
               
              </div>

              {/* Passengers */}
              <div className="flex items-center space-x-4">
                <label className="text-gray-600 font-medium">Passengers</label>
        
                <input
                  type="number"
                  defaultValue={2}
                  value={numPassengers}
                  onChange={(e) => setNumOfPassengers(e.target.valueAsNumber)}
                  className=" text-black w-12 text-center border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all"
                >
                  Publish a Ride
                </button>
              </div>
            </form>
          </div>

          {/* Second Column: Placeholder */}
          <div className="p-4 border rounded-lg shadow-md bg-gray-50">
            <h2 className="text-black text-lg sm:text-xl font-semibold mb-4">
              Additional Information
            </h2>
            <p className="text-gray-600">
              You can provide additional details about your ride here. For
              example, specify ride conditions, luggage allowance, or any
              preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}
