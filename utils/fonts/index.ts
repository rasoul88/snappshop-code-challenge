import localFont from "next/font/local";

export const Yekan = localFont({
  src: [
    {
      path: "./yekanBakh/woff2/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./yekanBakh/woff2/YekanBakh-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./yekanBakh/woff2/YekanBakh-ExtraBlack.woff2",
      weight: "950",
      style: "normal",
    },
  ],
});
