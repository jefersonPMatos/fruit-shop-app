import AppNavigation from "./app-navigation";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <AppNavigation />;
}
