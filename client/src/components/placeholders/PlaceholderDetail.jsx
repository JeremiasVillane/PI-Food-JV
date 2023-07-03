import {
  PlaceholderContainer,
  PlaceholderDiets,
  PlaceholderHealthScore,
  PlaceholderImage,
  PlaceholderInfo,
  PlaceholderMain,
  PlaceholderOverlay,
  PlaceholderStepList,
  PlaceholderSteps,
  PlaceholderSummary,
  PlaceholderSummaryLabel,
  PlaceholderTitle,
} from "../../styles/placeholders/StyledPlaceholderDetail.styled";

const PlaceholderDetail = () => (
  <>
    <PlaceholderOverlay />
    <PlaceholderContainer>
      <PlaceholderTitle></PlaceholderTitle>
      <PlaceholderInfo>
        <PlaceholderMain>
          <PlaceholderImage></PlaceholderImage>
          <PlaceholderHealthScore></PlaceholderHealthScore>
          <PlaceholderDiets>
            <button></button>
            <button></button>
            <button></button>
          </PlaceholderDiets>
        </PlaceholderMain>
        <div>
          <PlaceholderSummaryLabel></PlaceholderSummaryLabel>
          <PlaceholderSummary>
            <span></span>
            <span></span>
            <span></span>
          </PlaceholderSummary>
        </div>
      </PlaceholderInfo>
      <div>
        <PlaceholderSteps></PlaceholderSteps>
        <PlaceholderStepList>
          <li></li>
          <li></li>
          <li></li>
        </PlaceholderStepList>
      </div>
    </PlaceholderContainer>
  </>
);

export default PlaceholderDetail;
