import { FC, memo, useEffect } from "react";
import { useRecoilState } from "recoil";
import { resetPassword } from "@/entity/atoms/auth/reset-password";
import loadable from "@loadable/component";
import CheckEmailLayout from "./layouts/check-email";
import ChangePasswordFallback from "./form/fallback";

import { Column } from "@/global.css";


const FormLayout = loadable(() => import("./layouts/form"), { fallback: <ChangePasswordFallback/> });

const ResetPasswordPage: FC = memo((): JSX.Element => {
  const [isReset, setIsReset] = useRecoilState(resetPassword);

  useEffect(() => {
    return () => {
      setIsReset(false);
    }
  }, []);

  return (
    <Column
      width={"375px"}
      align={"center"}
      gap={60}
    >
      {isReset ? <CheckEmailLayout/> : <FormLayout/>}
    </Column>
  )
});

export default ResetPasswordPage;
