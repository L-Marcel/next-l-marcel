import { ImageResponse } from "@vercel/og";
import { colors } from "../../../constants/colors";
import { technologies } from "../../../constants/technologies";

export const config = {
  runtime: "experimental-edge",
};

export default async function GetResumeTecnologies() {
  return new ImageResponse(
    (
      <div
        style={{
          height: 3508,
          width: 2480,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "white",
          padding: "12% 12%"
        }}
      >
        <div tw="flex flex-row flex-wrap items-start justify-start">
          {
            technologies.levels.map(tech => {
              const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

              return (
                <div key={tech.name} tw="mb-20 flex flex-col mr-40">
                  <h1 tw="text-8xl">{tech.name}</h1>
                  <div tw="flex flex-row w-full mt-10">
                    {
                      levels.map(level => {
                        return (
                          <div key={level} tw={`flex w-[50px] mr-5 h-[130px] bg-[${level <= tech.level? level <= 2? colors.primary[600]:colors.primary[500]:colors.white[600]}]`}/>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    ),
    {
      width: 2480,
      height: 3508
    },
  );
}