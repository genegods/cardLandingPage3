import React from "react";

const TitlePage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="w-full space-y-5 text-white px-10 md:px-5 md:pl-10">
          <p className="text-6xl capitalize font-bold "> Gooddo consult</p>
          <p>
            hosting solutions content and manage our Christmas to show you
            personalized content and manage our show you personalized content
            and manage our with benefites hosting solutions with benefites
            hosting solutions with benefites hosting solutions with benefites
          </p>
          <button
              type="button"
              className="px-10 py-3.5 text-white bg-blue-500 font-bold rounded-lg inline-flex"
            >
              Get Started
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TitlePage;
