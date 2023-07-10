import { Link } from "react-router-dom";
import { Button } from "../styles/common/Button";
import { NotFoundContainer } from "../styles/StyledNotFound.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src="/src/assets/notfound.png" alt="Error 404" />
      <span>Nothing to see here...</span>
      <Link to="/home">
        <Button kind="primary">GO HOME</Button>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
