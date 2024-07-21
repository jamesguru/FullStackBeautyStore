import { Typewriter } from "react-simple-typewriter";
const Announcements = () => {
  return (
    <div className="bg-[#e9cfe2] text-white text-[18px] h-[30px] flex items-center justify-center">
      <Typewriter
        words={["Beauty", "Bliss", "Everything", "on", "Discount", "20%!"]}
        loop={1000}
        cursor
        cursorStyle=""
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcements;
