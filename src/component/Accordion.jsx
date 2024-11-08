import { useState } from 'react';

const Accordion = () => {
    const [expandedIndex, setExpandedIndex] = useState(2);

    const handleMouseEnter = (index) => {
        setExpandedIndex(index);
    };

    const handleMouseLeave = () => {
        setExpandedIndex(2);
    };

    const titles = [
        "Website Design & Development",
        "SEO",
        "PPC Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
    ];

    // Function to reverse words
    const reverseWords = (title) => {
        return title.split(" ").reverse().join(" ");
    };

    const images = [
        "/public/assets/images/case-img1.png",
        "/public/assets/images/case-img2.png",
        "/public/assets/images/case-img3.png",
        "/public/assets/images/case-img4.png",
        "/public/assets/images/case-img5.png",
        "/public/assets/images/case-img6.png",
        "/public/assets/images/case-img7.png",
    ];

    return (
        <div className="flex flex-col lg:flex-row lg:px-40 mt-4 py-2 mx-auto justify-center gap-3">
            {images.map((src, index) => (
                <article
                    key={src}
                    className={`group relative rounded-md overflow-hidden transition-all duration-300 
                        ${expandedIndex === index ? 'w-full' : 'lg:w-1/2 w-full'}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10">
                        {/* Title */}
                        <span
                            className={`text-lg font-medium text-white transition-all duration-300 transform 
                                ${expandedIndex === index ? 'translate-x-0 opacity-100' : 'opacity-100'}
                                group-hover:translate-x-0 group-hover:opacity-100`}
                            style={{
                                whiteSpace: expandedIndex === index ? 'normal' : 'nowrap',
                                writingMode: expandedIndex === index ? 'horizontal-tb' : 'vertical-lr',
                                transformOrigin: 'left',
                                textAlign: expandedIndex === index ? 'left' : 'right',
                            }}
                        >
                            {/* Show reversed text only if not hovered */}
                            {expandedIndex === index 
                                ? titles[index] 
                                : reverseWords(titles[index])}
                        </span>
                        {/* Description */}
                        {expandedIndex === index && (
                            <p className={`text-sm text-white mt-2 transition-all duration-500 transform 
                                ${expandedIndex === index ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                                We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence and driving business success.
                            </p>
                        )}
                    </div>
                    <img className="object-cover w-full h-[450px]" src={src} alt={`Image ${index + 1}`} />
                </article>
            ))}
        </div>
    );
};

export default Accordion;
