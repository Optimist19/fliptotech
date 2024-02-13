import { PiCaretRightBold } from "react-icons/pi";

export default function AddToBag() {
  return (
    <div className="bag-learn">
      <button>Add to bag</button>
      <div className="learn-more">
        <PiCaretRightBold className="icon" />
      </div>
      <p>Learn more</p>
    </div>
  );
}
