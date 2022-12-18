import 'styled-components';
import { header } from "@/ui-kit/components/generals/header/theme/light";
import { notifications } from "@/ui-kit/components/generals/notifications/theme";
import { link } from "@/ui-kit/components/buttons/link/theme/light";
import { button } from "@/ui-kit/components/buttons/button/theme/light";
import { roundedArrow } from "@/ui-kit/components/buttons/rounded-arrow/theme/light";
import { switcher } from "@/ui-kit/components/controls/switcher/theme/light";
import { text as simpleText } from "@/ui-kit/components/text/text/theme/light";
import { sidebar } from "@/ui-kit/components/generals/sidebar/theme/light";
import { checkbox } from "@/ui-kit/components/controls/checkbox/theme/light";
import { bell } from "@/ui-kit/customized-icons/bell/theme/light";
import { table } from "@/ui-kit/components/generals/table/theme/light";
import { footer } from "@/ui-kit/components/generals/footer/theme/light";
import { pagination } from "@/ui-kit/components/generals/pagination/theme/light";
import { text as textInput } from "@/ui-kit/components/controls/text/theme/light";
import { textarea } from "@/ui-kit/components/controls/textarea/theme/light";
import { dropdown } from "@/ui-kit/components/controls/dropdown/theme/light";
import { radio } from "@/ui-kit/components/controls/radio/theme/light";
import { radioGroup } from "@/ui-kit/components/controls/radio-group/theme/light";
import { tab } from "@/ui-kit/components/tabs/tab/theme/light";
import { tabs } from "@/ui-kit/components/tabs/tabs/theme/light";
import { tabPanel } from "@/ui-kit/components/tabs/tab-panel/theme/light";
import { range } from "@/ui-kit/components/datepickers/range/theme/light";
import { text } from "@/ui-kit/components/sliders/theme/light";
import { collapsible } from "@/ui-kit/components/cards/collapsible/theme/light";
import { stepper } from "@/ui-kit/components/generals/stepper/theme/light";
import { favorite } from "@/ui-kit/components/ratings/favorite/theme/light";
import { hot } from "@/ui-kit/components/ratings/hot/theme/light";
import { fresh } from "@/ui-kit/components/ratings/fresh/theme/light";
import { day } from "@/ui-kit/components/controls/day/theme/light";
import { ranking } from "@/ui-kit/components/bullets/ranking/theme/light";
import { modalPage } from "@/ui-kit/components/containers/modal/theme/light";
import { addDomain } from "@/pages/add-domain/theme/light";
import { label } from "@/ui-kit/components/text/label/theme/light";
import { radar } from "@/ui-kit/components/loaders/radar/theme/light";
import { withTypes } from "@/ui-kit/components/controls/with-types/theme/light";
import { tooltip } from "@/ui-kit/components/generals/tooltip/theme/light";
import { line } from "@/ui-kit/components/separators/line/theme/light";
import { meridian } from "@/ui-kit/components/controls/meridian/theme/light";
import { simplePage } from "@/ui-kit/components/containers/simple/theme/light";
import { checkboxGroup } from "@/ui-kit/components/controls/checkbox-group/theme/light";
import { formCreator } from "@/ui-kit/components/controls/form-creator/theme/light";
import { radioCollapsible } from "@/ui-kit/components/cards/radio-collapsible/theme/light";
import { dropzone } from "@/ui-kit/components/controls/dropzone/theme/light";
import { rounded } from "@/ui-kit/components/banners/rounded/theme/light";
import { bordered } from "@/ui-kit/components/layouts/bordered/theme/light";
import { signIn } from "@/pages/sign-in/theme/light";
import { resetPassword } from "@/pages/reset-password/theme/light";
import { signUp } from "@/pages/sign-up/theme/light";
import { changePassword } from "@/pages/change-password/theme/light";
import { tag } from "@/ui-kit/components/bullets/tag/theme/light";
import { monitorChanges } from "@/ui-kit/components/cards/monitor-changes/theme/light";
import { monitoring } from "@/pages/monitoring/theme/light";
import { withArrow as withArrowBreadcrumb } from "@/ui-kit/components/breadcrumbs/with-arrow/theme/light";
import { listView } from "@/ui-kit/components/monitoring/list-view/theme/light";

type GComponent<Elements> = { [E in Elements]: ReturnType<typeof E> }

export interface Components {
  bullets: GComponent<ranking, tag>
  buttons: GComponent<button, roundedArrow, link>
  breadcrumbs: GComponent<withArrowBreadcrumb>
  banners: GComponent<rounded>
  layouts: GComponent<bordered>
  cards: GComponent<monitorChanges, collapsible, radioCollapsible>
  containers: GComponent<simplePage, modalPage>
  controls: GComponent<textInput, radio, radioGroup, checkboxGroup, textarea, switcher, checkbox, dropdown, withTypes, meridian, day, formCreator, dropzone>
  datePickers: GComponent<range>
  generals: GComponent<header, footer, sidebar, pagination, notifications, stepper, table, tooltip>
  icons: GComponent<bell>
  loaders: GComponent<radar>
  pages: GComponent<monitoring, signIn, signUp, resetPassword, changePassword, addDomain>
  ratings: GComponent<favorite, hot, fresh>
  separators: GComponent<line>
  sliders: GComponent<text>
  tabs: GComponent<tab, tabs, tabPanel>
  typography: GComponent<label, simpleText>
  monitoring: GComponent<listView>
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
