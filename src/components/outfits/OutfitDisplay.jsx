import BridesmaidBlush from "./BridesmaidBlush";
import BridesmaidSage from "./BridesmaidSage";
import Fathers from "./Fathers";
import GroomsmenSage from "./GroomsmenSage";
import GroomsmenBlush from "./GroomsmenBlush";
import MotherOfBride from "./MotherOfBride";
import MotherOfGroom from "./MotherOfGroom";

const outfitComponents = {
  "bridesmaid-sage": BridesmaidSage,
  "bridesmaid-blush": BridesmaidBlush,
  "groomsman-sage":GroomsmenSage,
  "groomsman-blush": GroomsmenBlush,
  "father": Fathers,
  "mother-bride": MotherOfBride,
  "mother-groom": MotherOfGroom,
};

function OutfitDisplay({ outfitId }) {
  const OutfitComponent = outfitComponents[outfitId];

  if (!OutfitComponent) {
    return <p>Outfit information has not been added yet.</p>;
  }

  return <OutfitComponent />;
}

export default OutfitDisplay;