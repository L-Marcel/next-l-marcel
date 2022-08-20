import { format } from "date-fns";
import { useRouter } from "next/router";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Achievement } from "../../pages/achievements";
import { Icon, IconType } from "../Icon";

import dateLocaleEnUs from "date-fns/locale/en-US";
import dateLocalePtBr from "date-fns/locale/pt-BR";

export interface TimelineProps {
  achievements: Achievement[];
}

export function Timeline({ achievements }: TimelineProps) {
  const route = useRouter();
  const isNotPtBr = route.locale !== "pt_BR";

  const dateConfig = {
    locale: isNotPtBr? dateLocaleEnUs:dateLocalePtBr
  };
  
  return (
    <VerticalTimeline
      className="timeline"
    >
      {achievements && achievements.length > 0 && achievements?.map(({ 
        id, 
        title,
        subtitle,
        description, 
        registered_in,
        expires_in,
        icon,
        code,
        url
      }) => {
        return (
          <VerticalTimelineElement
            key={id}
            iconClassName={`vertical-timeline-element-icon ${icon === "rocketseat"? "small-icon":""}`}
            className="vertical-timeline-element--work"
            date={format(new Date(registered_in), "yyyy -> MMM. dd", dateConfig)}
            icon={<Icon withoutTooltip name={getAchievementIcon(icon)}/>}
          >
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export function getAchievementIcon(icon: IconType | "default"): IconType {
  if(icon === "default") {
    return "cube";
  } else if(icon.includes("_")) {
    return icon.replace("_", ".") as IconType;
  } else {
    return icon;
  }
}