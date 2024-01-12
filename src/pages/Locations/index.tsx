import React from "react";

import LocationList from "../../components/LocationList";

const Location: React.FC = () => {
  return (
    <>
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="container">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Locations
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <LocationList />
        </div>
      </section>
    </>
  );
};

export default Location;
