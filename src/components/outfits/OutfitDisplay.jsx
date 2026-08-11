import BridesmaidBlush from "./BridesmaidBlush";
import BridesmaidSage from "./BridesmaidSage";
import Fathers from "./Fathers";
import Groomsmen from "./Groomsmen";
import MotherOfBride from "./MotherOfBride";
import MotherOfGroom from "./MotherOfGroom";
import SageSuit from "./SageSuit";
import BlushSuit from "./BlushSuit";

const outfitComponents = {
  "bridesmaid-sage": BridesmaidSage,
  "bridesmaid-blush": BridesmaidBlush,
  "groomsman":Groomsmen,
  "dad": Fathers,
  "mother-bride": MotherOfBride,
  "mother-groom": MotherOfGroom,
  "sage-suit": SageSuit,
  "blush-suit": BlushSuit,
};

function OutfitDisplay({ outfitId }) {
  const OutfitComponent = outfitComponents[outfitId];

  if (!OutfitComponent) {
    return <p>Outfit information has not been added yet.</p>;
  }

  return <OutfitComponent />;
}

export default OutfitDisplay;