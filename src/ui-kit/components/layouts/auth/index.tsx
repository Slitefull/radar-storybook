import { FC, memo, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CHANGE_PASSWORD_PAGE, RESET_PASSWORD_PAGE } from "@/constants/routes";
import LogoExpanded from "@/ui-kit/customized-icons/logo-expanded";
import BorderedLayout from "@/ui-kit/components/layouts/bordered";
import PublicRoute from "@/router/public-route";

import { Column } from '@/global.css';


const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const BackTextRecord: Record<string, string> = {
  [RESET_PASSWORD_PAGE]: "back",
  [CHANGE_PASSWORD_PAGE]: "back_to_login",
}

const PAGES_WITH_HANDLERS = [RESET_PASSWORD_PAGE, CHANGE_PASSWORD_PAGE];

const AuthLayout: FC = memo((): JSX.Element => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onBackHandler = useCallback(() => navigate(-1), [navigate]);

  return (
    <PublicRoute>
      <Column
        align={"center"}
        width={"100%"}
        padding={"32px 0"}
        gap={80}
      >
        <LogoExpanded width={180}/>
        <AnimatePresence exitBeforeEnter>
          <motion.div {...AnimationSettings}>
            <BorderedLayout
              width={"900px"}
              padding={"40px 0"}
              minHeight={"500px"}
              shadow={"5px 5px 25px rgba(0, 0, 0, 0.14)"}
              backText={BackTextRecord[pathname]}
              onBack={PAGES_WITH_HANDLERS.includes(pathname) ? onBackHandler : undefined}
            >
              <Outlet/>
            </BorderedLayout>
          </motion.div>
        </AnimatePresence>
      </Column>
    </PublicRoute>
  );
});

export default AuthLayout;