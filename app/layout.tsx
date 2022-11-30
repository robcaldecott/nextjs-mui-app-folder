import EmotionRootStyleRegistry from "./EmotionRootStyleRegistry";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <body>
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
