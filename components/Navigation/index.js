import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <StyledNavigation>
        <StyledNavigationListItem>
          <StyledNavigationLinks href={"/"}>Spotlight</StyledNavigationLinks>
        </StyledNavigationListItem>
        <StyledNavigationListItem>
          <StyledNavigationLinks href={"/art-pieces"}>
            Pieces
          </StyledNavigationLinks>
        </StyledNavigationListItem>
      </StyledNavigation>
    </nav>
  );
}

const StyledNavigation = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  background-color: gray;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-bottom: 0;
`;

const StyledNavigationListItem = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const StyledNavigationLinks = styled(Link)`
  display: block;
  padding: 30px;
  width: 100%;
  text-align: center;
`;
