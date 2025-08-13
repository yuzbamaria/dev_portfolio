import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

export default function Technologies() {
  return (
    <>
      <hr className="border-gray-200 w-full" />
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-5 text-5xl flex-row items-center font-medium whitespace-nowrap p-10 text-gray-300"
          id="scrolling-container"
        >
          <div id="text-container" className="flex items-center gap-5">
            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Pixel-Perfect UI Development</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>API Integration</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Cross-Browser Compatibility</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Performance Optimization</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Responsive Web Design</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Component-Based Design</div>
          </div>
          {/* Duplicate */}
          <div
            id="text-container-secondary"
            className="flex items-center gap-5"
          >
            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />

            <div>Pixel-Perfect UI Development</div>
            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />

            <div>API Integration</div>
            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />

            <div>Cross-Browser Compatibility</div>
            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />

            <div>Performance Optimization</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Responsive Web Design</div>

            <FontAwesomeIcon icon={faStarOfLife} className="text-xl" />
            <div>Component-Based Design</div>
          </div>
        </div>
      </div>

      <hr className="border-[#E2E8F0] w-full" />
    </>
  );
}
