import { format, formatDistance } from "date-fns";
import Image from "next/future/image";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

export interface ProfileProps {
  updatedAt: string;
}

export function Profile({
  updatedAt
}: ProfileProps) {  
  const updatedAtDate = new Date(updatedAt);
  const currentDate = new Date();

  return (
    <article className="mx-12 mb-6 mt-[2.43rem] flex flex-row items-center md:mx-16 md:mb-8 md:mt-[4.43rem]">
      <div className="mr-8 hidden h-[11.875rem] w-[11.875rem] rounded-full md:flex">
        <Image
          width={190}
          height={190}
          alt=""
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/62476762?v=4"
        />
      </div>
      <div className="mr-8 hidden h-24 w-24 rounded-full sm:flex md:hidden">
        <Image
          width={72}
          height={72}
          alt=""
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/62476762?v=4"
        />
      </div>
      <div className="flex flex-col py-4 md:py-8 md:pr-8">
        <h1>l<span>-</span>marcel</h1>
        <p className="text-base md:text-[1.5rem]">
          <span className="text-lg md:text-[1.5rem]">L</span>ucas <span className="text-lg md:text-[1.5rem]">Marcel</span> Silva de Brito
        </p>
        <Tooltip label={format(updatedAtDate, "yyyy LLL'.' dd -> HH:mm:ss")}>
          <div className="mt-2 flex flex-row items-center gap-2 text-gray-500 dark:text-white-600 md:mt-4">
            <Icon withoutTooltip name="clock" className="h-5 w-5 md:h-[1.7rem] md:w-[1.7rem]"/>
            <time dateTime={format(updatedAtDate, "yyyy-MM-dd HH:mm")}>
              last update: {formatDistance(updatedAtDate, currentDate, { addSuffix: true })}
            </time>
          </div>
        </Tooltip>
      </div>
    </article>
  );
}