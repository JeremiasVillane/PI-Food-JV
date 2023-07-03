import { PlaceholderDiets, PlaceholderFrame, PlaceholderInfo, PlaceholderRecipe, PlaceholderTitle } from "../../styles/placeholders/StyledPlaceholderCard.styled";

const PlaceholderCard = () => (
  <PlaceholderRecipe>
    <PlaceholderFrame />
    <PlaceholderInfo>
      <PlaceholderTitle>
        <h3></h3>
        <span></span>
      </PlaceholderTitle>
      <PlaceholderDiets />
    </PlaceholderInfo>
  </PlaceholderRecipe>
);

export default PlaceholderCard;