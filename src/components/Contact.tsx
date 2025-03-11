import { useContext, useState } from "react";
import { BackgroundColorContext, TextColorContext } from "../App";

const Contact = () => {
  const textColor = useContext(TextColorContext);
  const backgroundColor = useContext(BackgroundColorContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="w-full min-h-[75vh]"
        style={{
          color: textColor,
        }}
      >
        <form method="POST" className="flex flex-col p-10 gap-4">
          <div className="w-full flex gap-5">
            <div className="flex flex-col flex-1/2">
              <label htmlFor="fname">First name</label>
              <input
                id="fname"
                className="outline-none px-4 py-2 rounded"
                type="text"
                style={{
                  backgroundColor:
                    backgroundColor === "white" ? "#dedede" : "#4d4d4d",
                }}
              />
            </div>
            <div className="flex flex-col flex-1/2 ">
              <label htmlFor="sname">Second name</label>
              <input
                id="sname"
                className="outline-none px-4 py-2 rounded"
                type="text"
                style={{
                  backgroundColor:
                    backgroundColor === "white" ? "#dedede" : "#4d4d4d",
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full outline-none px-4 py-2 rounded"
              type="text"
              style={{
                backgroundColor:
                  backgroundColor === "white" ? "#dedede" : "#4d4d4d",
              }}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              className="resize-none w-full outline-none px-4 py-2 rounded"
              rows={7}
              style={{
                backgroundColor:
                  backgroundColor === "white" ? "#dedede" : "#4d4d4d",
              }}
            ></textarea>
            <div className="w-full flex justify-center py-4">
              <button
                type="submit"
                className="border px-2 rounded duration-150"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  color: isHovered
                    ? backgroundColor === "white"
                      ? "white"
                      : "black"
                    : backgroundColor === "white"
                    ? "black"
                    : "white",
                  borderColor: textColor,
                  backgroundColor: isHovered
                    ? backgroundColor === "white"
                      ? "black"
                      : "white"
                    : "transparent",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
