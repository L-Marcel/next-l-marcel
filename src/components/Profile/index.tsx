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
    <article className="mx-16 mb-8 mt-[4.43rem] flex flex-row">
      <div className="flex h-[11.875rem] w-[11.875rem] rounded-full">
        <Image
          width={190}
          height={190}
          alt=""
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/62476762?v=4"
        />
      </div>
      <div className="flex flex-col p-8">
        <h1>l<span>-</span>marcel</h1>
        <p className="text-[1.5rem]">
          <span className="text-[1.5rem]">L</span>ucas <span className="text-[1.5rem]">Marcel</span> Silva de Brito
        </p>
        <Tooltip label={format(updatedAtDate, "yyyy LLL'.' dd -> HH:mm:ss")}>
          <div className="mt-4 flex flex-row items-center gap-2 text-gray-500 dark:text-white-600">
            <Icon withoutTooltip name="clock" className="h-[1.7rem] w-[1.7rem]"/>
            <time dateTime={format(updatedAtDate, "yyyy-MM-dd HH:mm")}>
              last update: {formatDistance(updatedAtDate, currentDate, { addSuffix: true })}
            </time>
          </div>
        </Tooltip>
      </div>
    </article>
  );
}