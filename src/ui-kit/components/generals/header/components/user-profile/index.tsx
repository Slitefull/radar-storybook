import { FC, memo, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { Username } from "@/ui-kit/components/generals/header/styled";


const UserProfile: FC = memo((): JSX.Element => {
  const navigate = useNavigate();

  const onClickUserHandler = useCallback(
    () => navigate("/"),
    [navigate]
  );

  return <Username onClick={onClickUserHandler}>Angie Smith</Username>
});

export default UserProfile;