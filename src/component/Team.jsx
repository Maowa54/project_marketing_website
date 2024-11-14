import SocialLinks from "../component/SocialLinks";


const Team = () => {
    const sentence2 = " Meet With Our Expert Team";
  const words2 = sentence2.split(" "); // Split sentence into individual words
  return (
    <div className="">
       <div className="bg-white text-center  py-12 ">
        <div className="flex flex-col items-center">
          <div className="w-5 h-[2px] bg-[#4E2FDA] mr-12 mb-1"></div>
          <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">Our Team</p>
          <p className="text-xl md:text-3xl font-semibold">
            {words2.map((word, index) => (
              <span
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100} // Delay each word slightly more than the previous
                className="inline-block mr-2" // Ensure words are inline with space between
              >
                {word}
              </span>
            ))}
          </p>{" "}
        </div>
      </div>

      <div className="bg-white md:px-8 lg:px-40  mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {/* Card 1 */}
        <div
          data-aos="fade-right"
          className="rounded shadow overflow-hidden flex flex-col "
        >
          <div className="relative overflow-hidden group">
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/all-images/team-img1.png"
              alt="Card Image"
              className="w-full image  object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
            />
            <div className="mx-2 rounded absolute bottom-4 left-0 right-0 bg-[#4E2FDA] px-4 py-2 transition-transform duration-300 transform translate-y-full opacity-0 group-hover:translate-y-1 group-hover:opacity-90">
              <SocialLinks />
            </div>{" "}
          </div>
          <div className="pt-4 px-6 pb-2 flex flex-col   rounded shadow">
            <p className="md:text-lg text-center font-semibold">John Doe</p>
            <p className="text-sm text-gray-600 text-center">CEO & Founder</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          className="rounded shadow overflow-hidden flex flex-col "
        >
          <div className="relative overflow-hidden group">
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/all-images/team-img2.png"
              alt="Card Image"
              className="w-full image  object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
            />
            <div className="mx-2 rounded absolute bottom-4 left-0 right-0 bg-[#4E2FDA] px-4 py-2 transition-transform duration-300 transform translate-y-full opacity-0 group-hover:translate-y-1 group-hover:opacity-90">
              <SocialLinks />
            </div>{" "}
          </div>
          <div className="pt-4 px-6 pb-2 flex flex-col  bg-white rounded shadow">
            <p className="md:text-lg text-center font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-600 text-center">
              Digital Marketing Officerr
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          className="rounded shadow overflow-hidden flex flex-col "
        >
          <div className="relative overflow-hidden group">
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/all-images/team-img3.png"
              alt="Card Image"
              className="w-full image  object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
            />
            <div className="mx-2 rounded absolute bottom-4 left-0 right-0 bg-[#4E2FDA] px-4 py-2 transition-transform duration-300 transform translate-y-full opacity-0 group-hover:translate-y-1 group-hover:opacity-90">
              <SocialLinks />
            </div>{" "}
          </div>
          <div className="pt-4 px-6 pb-2 flex flex-col  bg-white rounded shadow">
            <p className="md:text-lg text-center font-semibold">
              Sarah Thompson
            </p>
            <p className="text-sm text-gray-600 text-center">Web Designer</p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          data-aos="fade-left"
          className="rounded shadow overflow-hidden flex flex-col "
        >
          <div className="relative overflow-hidden group">
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/all-images/team-img4.png"
              alt="Card Image"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
            />
            <div className="mx-2 rounded absolute bottom-4 left-0 right-0 bg-[#4E2FDA] px-4 py-2 transition-transform duration-300 transform translate-y-full opacity-0 group-hover:translate-y-1 group-hover:opacity-90">
              <SocialLinks />
            </div>
          </div>

          <div className="pt-4 px-6 pb-2 flex flex-col  bg-white rounded shadow">
            <p className="md:text-lg text-center font-semibold">David Garcia</p>
            <p className="text-sm text-gray-600 text-center">Content Writer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
