import React from "react";

function PostDetails() {
  return (
    <div className="flex bg-white rounded-lg shadow-lg w-full h-100 px-2 m-auto">
      <img
        className=" my-4 w-1/2 object-contain mx-2 bg-gray1D2226 rounded-lg px-4"
        src={
          "https://www.freelancevideocollective.com/wp-content/uploads/2020/07/Aspect-ratios-comparison-chart_1.jpg"
        }
      />
      <div
        className="flex flex-col px-2 my-4 overflow-y-scroll"
        id="journal-scroll"
      >
        <div className="font-bold text-lg text-center my-1 ">
          Code Rush X, NSCC BPIT's
        </div>
        <div className="text-justify">
          Hello there 👋 It's 2023 folks and what else could be the best way to
          get started this year than by participating in a major Coding Contest
          ☺😇😇 Well the TIME has finally arrived for the 3rd Edition of Code
          Rush X , NSCC BPIT's flagship grand coding contest 📣🥳 Important ⚠⚠
          All those who want to join NSCC BPIT are required to take part in this
          contest as we'll be shortlisting the candidates on the basis of their
          score in this contest. 😊😊𝗣.𝗦. This event happens only twice a year
          and you are invited to be a part of the best Global Coding Contest. ✨
          Team NSCC BPIT code your way to success 💻 Team NSCC BPIT code your
          way to success 💻 Team NSCC BPIT code your way to success 💻 Team NSCC
          BPIT code your way to success 💻 Team NSCC BPIT code your way to
          success 💻 Team NSCC BPIT code your way to success 💻 Team NSCC BPIT
          code your way to success 💻 Team NSCC BPIT code your way to success 💻
          Team NSCC BPIT code your way to success 💻 Team NSCC BPIT code your
          way to success 💻 Team NSCC BPIT code your way to success 💻 Team NSCC
          BPIT code your way to success 💻 Team NSCC BPIT code your way to
          success 💻 Team NSCC BPIT code your way to success 💻 Team NSCC BPIT
          code your way to success 💻 Team NSCC BPIT code your way to success 💻
          Team NSCC BPIT code your way to success 💻 Team NSCC BPIT code your
          way to success 💻 Team NSCC BPIT code your way to success 💻 Team NSCC
          BPIT code your way to success 💻 Team NSCC BPIT code your way to
          success 💻 Team NSCC BPIT code your way to success 💻 Team NSCC BPIT
          code your way to success 💻 Team NSCC BPIT code your way to success 💻
          Team NSCC BPIT code your way to success 💻 Team NSCC BPIT code your
          way to success 💻 Team NSCC BPIT code your way to success 💻
        </div>
        <div className="flex flex-row items-center">
          <div className="font-semibold mr-2">Organizer:</div>
          <div>Tushar jain</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="font-semibold mr-2">Date:</div>
          <div>21 JAN</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="font-semibold mr-2">Time:</div>
          <div>03:00 PM</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="font-semibold mr-2">Venue:</div>
          <div>6A, conference room, BPIT</div>
        </div>
        {/* author details */}
        <div className="flex flex-row my-4 items-center">
          <img
            className="w-8 h-8 mr-4 rounded-full shadow-lg"
            src={
              "https://media.licdn.com/dms/image/C5103AQHExyLqyBIe8w/profile-displayphoto-shrink_400_400/0/1567182680271?e=1688601600&v=beta&t=8_sbN0uH3zO4oK3qk9tNYtOjmMwOqlxxoURPGQd2BSc"
            }
          />
          <div>
            <div className="text-xss font-bold">Tushar Jain</div>
            <div className="text-xss font-semibold text-gray-500">Author</div>
          </div>
        </div>
        {/* group details */}
        <div className="flex flex-row items-center mb-4">
          <img
            className="w-8 h-8 mr-4 rounded-full shadow-lg"
            src={
              "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
            }
          />
          <div>
            <div className="text-xss font-bold">NodeJs</div>
            <div className="text-xss font-semibold text-gray-500">Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
