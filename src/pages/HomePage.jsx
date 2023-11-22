import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "redux/auth/authSelectors";
import Container from "components/Container/Container";
import { HomePageStyle } from "./pageStyles/HomePageStyle";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);

  return (
    <HomePageStyle>
      <Container>
        <h1>Contacts book</h1>
        {isLoggedIn ? (
          <h2>
            Hello <span className="name">{userName} </span>, enter to your{" "}
            <Link className="link" to="/contacts">
              contacts{" "}
            </Link>
            to find or create your contacts
          </h2>
        ) : (
          <h2>
            Please{" "}
            <Link className="link" to="register">
              register{" "}
            </Link>{" "}
            or{" "}
            <Link className="link" to="/login">
              login{" "}
            </Link>{" "}
            to see your contacts
          </h2>
        )}
      </Container>
    </HomePageStyle>
  );
};

export default HomePage;