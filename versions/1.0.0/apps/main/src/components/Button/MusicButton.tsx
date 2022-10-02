import { IconButtonProps, IconButton, useBreakpointValue, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useToast, Box  } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Icon from "../Icon";

import style from "../../theme/scss/button.module.scss";
import { customToast } from "../CustomToast";
import { getMusic } from "../../utils/getMusic";

function MusicButton({ ...rest }: IconButtonProps) {
  const toast = useToast();
  const isWideOrNormalVersion = useBreakpointValue({
    lg: true,
    base: false
  });
  const [music] = useState(new Audio(getMusic()));
  const [volume, setVolume] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const [haveStarted, setHaveStart] = useState(false);

  useEffect(() => {
    if(isPlaying) {
      music.play();
      setHaveStart(true);
    } else {
      music.pause();
    };
  }, [music, isPlaying]);

  useEffect(() => {
    music.volume = volume/100;
  }, [volume]);

  useEffect(() => {
    if(haveStarted) {
      toast(customToast("music", "Espero que a música te agrade!"));
      music.onended = () => isPlaying? music.play():music.pause();
    };
  }, [haveStarted]);

  return (
    <>
      <IconButton 
        aria-label="music-button"
        size={isWideOrNormalVersion? "md":"sm"}
        icon={<Icon name={isPlaying? "sound-on":"sound-off"}/>} 
        onClick={() => setIsPlaying(i => !i)}
        bg="primary.500"
        color="white"
        {...rest}
        className={style.button}
      />
      { 
        isPlaying && <Slider
          position={"absolute !important" as any}
          bottom={-19}
          w="90%"
          ml="5%"
          justifySelf="center"
          colorScheme="primary"
          defaultValue={20}
          max={100}
          min={0}
          value={volume}
          onChange={v => setVolume(v)}
        >
          <SliderTrack bg="primary.350">
            <SliderFilledTrack/>
          </SliderTrack>
          <SliderThumb/>
        </Slider>
      }
    </>
  );
};

export default MusicButton;