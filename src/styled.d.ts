import 'styled-components';
import { checkboxInput } from "./ui-kit/components/inputs/checkbox/theme/light/checkbox";
import { textInput } from "./ui-kit/components/inputs/text/theme/light/text-input";
import { switcherInput } from "./ui-kit/components/inputs/switcher/theme/light/switcher";
import { coloredText } from "./ui-kit/components/text/colored/theme/light/colored";
import { withBackgroundText } from "./ui-kit/components/text/with-background/theme/light/with-background";
import { roundedArrowButton } from "./ui-kit/components/buttons/rounded-arrow/theme/light/rounded-arrow";
import { button } from "./ui-kit/components/buttons/button/theme/light/button";
import { sidebar } from "./ui-kit/components/sidebar/theme/light/light";
import { link } from "./ui-kit/components/links/link/theme/light/link";
import { header } from "./ui-kit/components/header/theme/light/header";
import { footer } from "./ui-kit/components/footer/theme/light/footer";
import { dropdown } from "./ui-kit/components/dropdowns/dropdown/theme/light/dropdown";
import { notifications } from "./ui-kit/components/notifications/theme/notifications";
import { bellIcon } from "./ui-kit/customized-icons/bell/theme/light/bell";
import { monitorChangesCard } from "./ui-kit/components/cards/monitor-changes/theme/light/monitor-changes";
import { monitorChangesPage } from "./pages/monitor-changes/theme/light/monitor-changes";
import { table } from "@/ui-kit/components/table/theme/light/light";


export interface Components {
  header: ReturnType<typeof header>;
  footer: ReturnType<typeof footer>;
  sidebar: ReturnType<typeof sidebar>;
  notifications: ReturnType<typeof notifications>;
  button: ReturnType<typeof button>;
  roundedArrowButton: ReturnType<typeof roundedArrowButton>;
  link: ReturnType<typeof link>;
  coloredText: ReturnType<typeof coloredText>;
  withBackgroundText: ReturnType<typeof withBackgroundText>;
  textInput: ReturnType<typeof textInput>;
  switcherInput: ReturnType<typeof switcherInput>;
  checkboxInput: ReturnType<typeof checkboxInput>;
  dropdown: ReturnType<typeof dropdown>;
  bellIcon: ReturnType<typeof bellIcon>;
  monitorChangesCard: ReturnType<typeof monitorChangesCard>;
  table: ReturnType<typeof table>;

  monitorChangesPage: ReturnType<typeof monitorChangesPage>;
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
