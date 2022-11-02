import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  //   const { searchParams } = req.nextUrl;
    const username = "sofilay";
  //   if (!username) {
  //     return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
  //       width: 1200,
  //       height: 630,
  //     });
  //   }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="256"
          height="256"
          src={`https://assets.website-files.com/5e3dcab63f5462821f6fc673/60d0e5d330d846273e494605_Mask%20Group-1.png`}
          style={{
            borderRadius: 128,
          }}
        />
        <p>This is a test from the frontend team</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
