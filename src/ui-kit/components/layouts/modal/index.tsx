import { FC, Fragment, memo } from 'react';
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import loadable from "@loadable/component";
import SidebarFallback from "@/ui-kit/components/sidebar/fallback/fallback";

import { Column } from '@/global.css';


const Sidebar = loadable(() => import("@/ui-kit/components/sidebar/sidebar"), { fallback: <SidebarFallback/> });

const AnimationSettings = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const ModalLayout: FC = memo((): JSX.Element => {
  return (
    <Fragment>
      <Sidebar/>
      <Column
        padding={"30px 0 40px 0"}
        width={"100%"}
        display={"block"}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div {...AnimationSettings}>
            <Outlet/>
          </motion.div>
        </AnimatePresence>
      </Column>
    </Fragment>
  );
});

export default ModalLayout;