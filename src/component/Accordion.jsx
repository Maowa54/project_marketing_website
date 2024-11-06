import  { useState } from 'react';

const Accordion = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setExpandedIndex(index);
    };

    const handleMouseLeave = () => {
        // Optional: You can decide whether to reset the index here
    };

    const titles = [
        "Innovate relentlessly. Stagnation is the enemy of progress.",
        "Embrace failure as a stepping stone to success.",
        "Dream big, start small, but most importantly, start.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Your limitation—it's only your imagination."
    ];

    const images = [
        "/public/assets/images/Content-marketing-tools-1.jpg",
        "/public/assets/images/anh-1-17163656272611758241397.jpeg",
        "/public/assets/images/istockphoto-1388913352-612x612.jpg",
        "/public/assets/images/IT-Consulting-1-scaled.webp",
        "/public/assets/images/ask-your-consultant.webp",
        "/public/assets/images/man-operating-laptop-on-top-of-table.jpg",
        "/public/assets/images/portrait-black-woman-smile-arms-600nw-2329488115.webp"
    ];

    return (
        <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center gap-2">
            {images.map((src, index) => (
                <article
                    key={src} // Use the image source as the key
                    className={`group relative w-full rounded-xl overflow-hidden transition-all duration-300
                        ${expandedIndex === index ? 'md:w-1/2' : 'md:w-1/5'}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a className="absolute inset-0 text-white z-10 flex items-end p-4">
                        <span className={`absolute bottom-0 text-lg font-medium p-4 transition-opacity duration-200 ${expandedIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                            {titles[index]}
                        </span>
                    </a>
                    <img className="object-cover h-96   transition-none" src={src} alt={`Image ${index + 1}`} />
                </article>
            ))}
        </div>
    );
};

export default Accordion;
