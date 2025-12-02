import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.image} />
        <div>
          <h2>{user.basics.name}</h2>
          <p>{user.basics.label}</p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/yarapwnz/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight size={16} />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
