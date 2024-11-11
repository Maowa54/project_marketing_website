import { useState, useEffect } from "react";

const Testimonials = () => {
  const sentence = "What Our Client Say On Google Reviews";
  const words = sentence.split(" "); // Split sentence into individual words
  const cards = [
    {
      id: 1,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img1.png",
      reviewer: "John Doe",
    },
    {
      id: 2,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img2.png",
      reviewer: "Jane Doe",
    },
    {
      id: 3,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img3.png",
      reviewer: "John Smith",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the carousel index update
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only update the index after the card has fully centered
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length; // Use the length of the original cards
        return nextIndex;
      });
    }, 2000); // Delay for 2 seconds to allow the card to be centered

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentIndex]);

  // Handle indicator click manually
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div className="relative text-center max-w-screen-md py-20 mx-auto px-4 sm:px-8">
        <div>
          <p
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
            style={{ lineHeight: "1.3" }}
          >
              {words.map((word, index) => (
              <span
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100} // Delay each word slightly more than the previous
                className="inline-block mr-2" // Ensure words are inline with space between
              >
                {word}
              </span>
            ))}
          </p>
          <p
            data-aos="fade-up"
            className="text-gray-500 text-xs md:text-sm "
            style={{ lineHeight: "1.6" }}
          >
            Don't just take our word for it. Hear what our satisfied clients
            have to say about their experience partnering with SEOC
          </p>
        </div>

        {/* Top Right Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
          className="absolute top-2 right-2 md:top-8 md:right-8  lg:-right-28  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
          alt="Slowly Spinning Star"
        />

        {/* Bottom Left Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
          className="absolute bottom- left-2 md:bottom-8 md:left-8  lg:-left-28 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
          alt="Slowly Spinning Star"
        />
      </div>

      <div className="w-full mt-6 overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex * 100) / 2.5}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="md:w-[60%] w-full flex-shrink-0 flex border-2 border-blue-500 rounded-lg overflow-hidden md:flex-row flex-col justify-between"
            >
              <div className="w-full flex flex-col md:w-1/2 p-2 md:p-4 bg-white space-x-2">
                {/* Topmost Text */}
                <p className="text-gray-700  mt-2 text-xs md:text-sm">
                  {card.text}
                </p>

                {/* Bottom Section: Stars, Reviewer, and Google Icon */}
                <div className="flex justify-between items-center w-full md:mt-auto mt-3">
                  <div className="flex flex-col items-start space-y-1 ">
                    {/* Five Star Review Icons */}
                    <div className="flex text-blue-800 space-x-1">
                      <i className="fas fa-star text-xs md:text-sm"></i>
                      <i className="fas fa-star text-xs md:text-sm"></i>
                      <i className="fas fa-star text-xs md:text-sm"></i>
                      <i className="fas fa-star text-xs md:text-sm"></i>
                      <i className="fas fa-star text-xs md:text-sm"></i>
                    </div>
                    {/* Reviewer Name */}
                    <p className="text-gray-800 text-sm md:text-base font-semibold">
                      {card.reviewer}
                    </p>
                  </div>

                  {/* Google Icon */}
                  <div>
                    <img
                      src="/assets/images/download.png"
                      alt="Google Icon"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 ">
                <img
                  src={card.image}
                  alt="Card Image"
                  className=" h-60 md:h-80 w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="relative w-6 h-6"
            >
              {currentIndex === index && (
                <div className="absolute w-6 h-6 rounded-full bg-gray-300 top-3 left-3 -translate-x-1/2 -translate-y-1/2"></div>
              )}
              <span
                className={`w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  currentIndex === index ? "bg-blue-800" : "bg-gray-400"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
