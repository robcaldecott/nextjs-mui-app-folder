import { ReactNode } from "react";
import EmotionRootStyleRegistry from "./EmotionRootStyleRegistry";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
