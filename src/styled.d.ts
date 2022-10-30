import 'styled-components';
import { header } from "@/ui-kit/components/header/theme/light";
import { notifications } from "@/ui-kit/components/notifications/theme";
import { link } from "@/ui-kit/components/buttons/link/theme/light";
import { button } from "@/ui-kit/components/buttons/button/theme/light";
import { roundedArrow } from "@/ui-kit/components/buttons/rounded-arrow/theme/light";
import { switcher } from "@/ui-kit/components/inputs/switcher/theme/light";
import { colored } from "@/ui-kit/components/text/colored/theme/light";
import { withBackground } from "@/ui-kit/components/text/with-background/theme/light";
import { sidebar } from "@/ui-kit/components/sidebar/theme/light";
import { checkbox } from "@/ui-kit/components/inputs/checkbox/theme/light";
import { bell } from "@/ui-kit/customized-icons/bell/theme/light";
import { monitorChanges } from "@/pages/monitor-changes/theme/light";
import { table } from "@/ui-kit/components/table/theme/light";
import { footer } from "@/ui-kit/components/footer/theme/light";
import { pagination } from "@/ui-kit/components/pagination/theme/light";
import { textarea } from "@/ui-kit/components/inputs/textarea/theme/light";
import { dropdown } from "@/ui-kit/components/dropdowns/dropdown/theme/light";
import { radio } from "@/ui-kit/components/inputs/radio/theme/light";
import { radioGroup } from "@/ui-kit/components/inputs/radio-group/theme/light";
import { tab } from "@/ui-kit/components/tabs/tab/theme/light";
import { tabs } from "@/ui-kit/components/tabs/tabs/theme/light";
import { tabPanel } from "@/ui-kit/components/tabs/tab-panel/theme/light";
import { range } from "@/ui-kit/components/datepickers/range/theme/light";
import { text } from "@/ui-kit/components/sliders/theme/light";
import { collapsible } from "@/ui-kit/components/cards/collapsible/theme/light";
import { stepper } from "@/ui-kit/components/stepper/theme/light";
import { favorite } from "@/ui-kit/components/ratings/favorite/theme/light";
import { hot } from "@/ui-kit/components/ratings/hot/theme/light";
import { fresh } from "@/ui-kit/components/ratings/fresh/theme/light";
import { day } from "@/ui-kit/components/inputs/day/theme/light";
import { ranking } from "@/ui-kit/components/ranking/theme/light";
import { modalPage } from "@/ui-kit/components/page-container/modal/theme/light";
import { addDomain } from "@/pages/add-domain/theme/light";
import { label } from "@/ui-kit/components/label/theme/light";
import { radar } from "@/ui-kit/components/loaders/radar/theme/light";
import { withTypes } from "@/ui-kit/components/dropdowns/with-types/theme/light";
import { tooltip } from "@/ui-kit/components/tooltips/tooltip/theme/light";
import { line } from "@/ui-kit/components/separators/line/theme/light";
import { meridian } from "@/ui-kit/components/inputs/meridian/theme/light";
import { simplePage } from "@/ui-kit/components/page-container/simple/theme/light";
import { checkboxGroup } from "@/ui-kit/components/inputs/checkbox-group/theme/light";
import { formCreator } from "@/ui-kit/components/form-creator/theme/light";
import { radioCollapsible } from "@/ui-kit/components/cards/radio-collapsible/theme/light";


type GComponent<Elements> = { [E in Elements]: ReturnType<typeof E> }

export interface Components {
  bullets: GComponent<ranking>
  buttons: GComponent<button, roundedArrow, link>
  cards: GComponent<monitorChanges, collapsible, radioCollapsible>
  containers: GComponent<simplePage, modalPage>
  controls: GComponent<text, radio, radioGroup, checkboxGroup, textarea, switcher, checkbox, dropdown, withTypes, meridian, day, formCreator>
  datePickers: GComponent<range>
  generals: GComponent<header, footer, sidebar, pagination, notifications, stepper, table, tooltip>
  icons: GComponent<bell>
  loaders: GComponent<radar>
  pages: GComponent<monitorChanges, addDomain>
  ratings: GComponent<favorite, hot, fresh>
  separators: GComponent<line>
  sliders: GComponent<text>
  tabs: GComponent<tab, tabs, tabPanel>
  text: GComponent<label, colored, withBackground>
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: "light" | "dark";
    components: Components;
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
  }
}
