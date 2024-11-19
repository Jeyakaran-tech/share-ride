"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export default function PublishPage() {
  return (
    <DefaultLayout>
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Publish a Ride</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column: Form */}
          <div className="p-4 border rounded-lg shadow-md bg-gray-50">
            <form className="space-y-4">
              {/* From Location */}
              <div>
                <label
                  htmlFor="from"
                  className="block text-gray-600 font-medium mb-2"
                >
                  From
                </label>
                <input
                  id="from"
                  type="text"
                  placeholder="Melbourne, Victoria, Australia"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              {/* To Location */}
              <div>
                <label
                  htmlFor="to"
                  className="block text-gray-600 font-medium mb-2"
                >
                  To
                </label>
                <input
                  id="to"
                  type="text"
                  placeholder="Sydney, New South Wales, Australia"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              {/* Passengers */}
              <div className="flex items-center space-x-4">
                <label className="text-gray-600 font-medium">Passengers</label>
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  defaultValue={2}
                  className="w-12 text-center border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-200"
                >
                  +
                </button>
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
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
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
