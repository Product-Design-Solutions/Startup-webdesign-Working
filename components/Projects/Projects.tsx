import { useEffect, useRef, useState } from "react";

interface ProjectsProps {
  description: string;
  title: string;
  source: string;
}

export default function Projects({
  description,
  title,
  source,
}: ProjectsProps) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="group relative overflow-hidden rounded-lg"
      onClick={() => setShowPopup(true)}
    >
      <div className="relative w-full h-full">
        <video
          src={source}
          width={400}
          height={400}
          className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-90 object-cover"
          style={{ aspectRatio: "1 / 1" }} // aspect ratio for 400x400
          muted
          loop
          preload="metadata"
          onLoadedMetadata={(e) => (e.target as HTMLVideoElement).play()}
          onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
          onMouseLeave={(e) => {
            const video = e.target as HTMLVideoElement;
            video.pause();
            video.currentTime = 0;
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 p-6 z-50 transition-opacity duration-500 ease-in-out opacity-100">
          <div
            ref={popupRef}
            className="bg-background p-8 rounded-lg shadow-2xl text-black max-w-5xl w-full relative h-[80vh] overflow-auto transition-transform duration-500 ease-in-out transform scale-100 animate-popup popup-content"
          >
            <h3 className="text-4xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-xl mb-4 text-gray-800">{description}</p>
            <p className="text-xl mb-6 text-gray-800">
              Source:{" "}
              <a
                href={source}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Video
              </a>
            </p>

            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Technologies</h1>
              {/* Add content for Technologies here */}
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                cumque soluta veniam eligendi, aut, repellendus, deserunt
                cupiditate repudiandae voluptate veritatis dolor a iste eaque
                neque dicta nemo modi vel officia? Ad eos labore autem enim
                laborum voluptatibus? Dolorem eligendi, aliquam vitae rem
                recusandae, magni eius fuga, ea iste iure quae.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Landscape 1"
                className="rounded-md object-cover aspect-[3/2] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Landscape 2"
                className="rounded-md object-cover aspect-[3/2] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Landscape 3"
                className="rounded-md object-cover aspect-[3/2] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Landscape 4"
                className="rounded-md object-cover aspect-[3/2] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Landscape 5"
                className="rounded-md object-cover aspect-[3/2] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Landscape 6"
                className="rounded-md object-cover aspect-[3/2] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes popupIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes popupOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        .animate-popup {
          animation: popupIn 0.5s ease-out;
        }

        .animate-popup-exit {
          animation: popupOut 0.5s ease-in;
        }

        /* Hide scrollbar but keep the content scrollable */
        .popup-content {
          overflow: auto; /* Ensure content is scrollable */
        }

        .popup-content::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
        }

        .popup-content {
          scrollbar-width: none; /* Hide scrollbar for Firefox */
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
        }
      `}</style>
    </div>
  );
}
