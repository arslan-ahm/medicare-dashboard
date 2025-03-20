import React from "react";
import Text from "../Text";
import { CONTACT_US_CARDS } from "@/constants/frontend";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 my-4 py-8 px-8">
      <div className="flex flex-col md:flex-row items-start gap-2 md:items-center justify-between">
        <div className="w-full md:w-[65%]">
          <Text
            text="Let Us Know What You Think"
            type="h2"
            className="text-xl sm:text-2xl md:text-3xl lg:text-6xl"
          />
        </div>
        <div className="w-[60%] md:w-[35%]">
          <Text
            text="We are always here to help you. If you have any query or feedback, feel free to contact us."
            type="p"
            className="text-sm sm:text-md lg:text-lg xl:text-xl text-md_gray"
          />
        </div>
      </div>

      <ul className="w-full flex items-center justify-center gap-4 flex-wrap">
        {CONTACT_US_CARDS.map((item, index) => (
          <li key={index} className="">
            <div
              className={`flex w-full ${item.color} p-8 rounded-lg shadow-md gap-9 flex-col items-start`}
            >
              <div className="flex flex-col items-start gap-2">
                <h6 className="text-xl font-semibold">{item.title}</h6>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl text-blue-500">{item.icon}</span>
                <p className="text-base text-gray-800">{item.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactUs;
