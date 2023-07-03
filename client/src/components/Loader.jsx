import { useSelector } from "react-redux";
import { PlaceholderCardContainer, PlaceholderPagination } from "../styles/placeholders/StyledPlaceholderCard.styled";
import PlaceholderCard from "./placeholders/PlaceholderCard";
import PlaceholderDetail from "./placeholders/PlaceholderDetail";

const Loader = ({type}) => {
  if (type === "detail") {
    return <PlaceholderDetail />
  }
  
  const { elementsPerPage } = useSelector((state) => state.pagination);
  const cards = Array.from({ length: elementsPerPage }, (_, index) => (
    <PlaceholderCard key={index} />
  ));
  
  return <PlaceholderCardContainer><PlaceholderPagination />{cards}</PlaceholderCardContainer>;
};

export default Loader;










// import { SpinnerOverlay, LdsRing, LdsRingDiv } from "../styles/StyledLoader.styled";

// const Loader = () => (
//   <SpinnerOverlay>
//     <LdsRing>
//       <LdsRingDiv></LdsRingDiv>
//       <LdsRingDiv></LdsRingDiv>
//       <LdsRingDiv></LdsRingDiv>
//       <LdsRingDiv></LdsRingDiv>
//     </LdsRing>
//   </SpinnerOverlay>
// );

// export default Loader;
