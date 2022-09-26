//TODO naming
import 'styled-components';
import { checkboxInput } from "./ui-kit/components/inputs/checkbox/theme/light/checkbox";
import { textInput } from "./ui-kit/components/inputs/text/theme/light/text-input";
import { switcherInput } from "./ui-kit/components/inputs/switcher/theme/light/switcher";
import { coloredText } from "./ui-kit/components/text/colored/theme/light/colored";
import { withBackgroundText } from "./ui-kit/components/text/with-background/theme/light/with-background";
import { roundedArrowButton } from "./ui-kit/components/buttons/rounded-arrow/theme/light/rounded-arrow";
import { button } from "./ui-kit/components/buttons/button/theme/light/button";
import { sidebar } from "./ui-kit/components/sidebar/theme/light/light";
import { link } from "./ui-kit/components/buttons/link/theme/light/link";
import { header } from "./ui-kit/components/header/theme/light/header";
import { footer } from "./ui-kit/components/footer/theme/light/footer";
import { notifications } from "./ui-kit/components/notifications/theme/notifications";
import { bellIcon } from "./ui-kit/customized-icons/bell/theme/light/bell";
import { monitorChangesCard } from "./ui-kit/components/cards/monitor-changes/theme/light/monitor-changes";
import { monitorChangesPage } from "./pages/monitor-changes/theme/light/monitor-changes";
import { table } from "@/ui-kit/components/table/theme/light/light";
import { pagination } from "@/ui-kit/components/pagination/theme/light/light";
import { textarea } from "@/ui-kit/components/inputs/textarea/theme/light/textarea";
import { dropdown } from "@/ui-kit/components/dropdowns/dropdown/theme/light/dropdown";
import { radio } from "@/ui-kit/components/inputs/radio/theme/light/radio";
import { tab } from "@/ui-kit/components/tabs/tab/theme/light/light";
import { tabs } from "@/ui-kit/components/tabs/tabs/theme/light/light";
import { tabPanel } from "@/ui-kit/components/tabs/tab-panel/theme/light/light";
import { listGridView } from "@/ui-kit/components/buttons/list-grid-view/theme/light/list-grid-view";
import { singleDatepicker } from "@/ui-kit/components/datepickers/single/theme/light/single";
import { rangeDatepicker } from "@/ui-kit/components/datepickers/range/theme/light/range";
import { swiperText } from "@/ui-kit/components/sliders/theme/light/light";
import { collapsibleCard } from "@/ui-kit/components/cards/collapsible/theme/light/collapsible";


export interface Components {
  header: ReturnType<typeof header>;
  footer: ReturnType<typeof footer>;
  sidebar: ReturnType<typeof sidebar>;
  pagination: ReturnType<typeof pagination>;
  notifications: ReturnType<typeof notifications>;
  button: ReturnType<typeof button>;
  dropdown: ReturnType<typeof dropdown>;
  roundedArrowButton: ReturnType<typeof roundedArrowButton>;
  link: ReturnType<typeof link>;
  coloredText: ReturnType<typeof coloredText>;
  withBackgroundText: ReturnType<typeof withBackgroundText>;
  textInput: ReturnType<typeof textInput>;
  radio: ReturnType<typeof radio>;
  textarea: ReturnType<typeof textarea>;
  switcherInput: ReturnType<typeof switcherInput>;
  checkboxInput: ReturnType<typeof checkboxInput>;
  bellIcon: ReturnType<typeof bellIcon>;
  monitorChangesCard: ReturnType<typeof monitorChangesCard>;
  table: ReturnType<typeof table>;
  tab: ReturnType<typeof tab>;
  tabs: ReturnType<typeof tabs>;
  tabPanel: ReturnType<typeof tabPanel>;
  listGridView: ReturnType<typeof listGridView>;
  monitorChangesPage: ReturnType<typeof monitorChangesPage>;
  singleDatepicker: ReturnType<typeof singleDatepicker>;
  rangeDatepicker: ReturnType<typeof rangeDatepicker>;
  swiperText: ReturnType<typeof swiperText>;
  collapsibleCard: ReturnType<typeof collapsibleCard>;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    components: Components;
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
  }
}
