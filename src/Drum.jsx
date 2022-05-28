import React from "react";
import { Button } from "antd";
import useSound from "use-sound";
import testSound from "./sounds/testSound.mp3";
import styled from "styled-components";

import t1 from "./sounds/1t.mp3";
import t2 from "./sounds/2t.mp3";
import crash from "./sounds/crash.mp3";
import floor from "./sounds/floor.mp3";
import hihat from "./sounds/hihat.mp3";
import ride from "./sounds/ride.mp3";
import snare from "./sounds/snare.mp3";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;
`;

const CustomButton = styled(Button)`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: 170px;
    height: 60px;

    border-radius: 80%;
`;

const Drum  = () => {

    const [testPlay] = useSound(testSound);

    const [t1Play] = useSound(t1);
    const [t2Play] = useSound(t2);
    const [crashPlay] = useSound(crash);
    const [floorPlay] = useSound(floor);
    const [hihatPlay] = useSound(hihat);
    const [ridePlay] = useSound(ride);
    const [snarePlay] = useSound(snare);


    return (
        <Wrapper>
            <CustomButton top="20%" left="30%" type="primary" onClick={t1Play}>t1</CustomButton>
            <CustomButton top="20%" left="55%" type="primary" onClick={t2Play}>t2</CustomButton>
            <CustomButton top="5%" left="0px" type="primary" onClick={crashPlay}>crash</CustomButton>
            <CustomButton top="60%" left="75%" type="primary" onClick={floorPlay}>floor</CustomButton>
            <CustomButton top="20%" left="0px"  type="primary" onClick={hihatPlay}>hihat</CustomButton>
            <CustomButton top="20%" left="78%"  type="primary" onClick={ridePlay}>ride</CustomButton>
            <CustomButton top="55%" left="15%" type="primary" onClick={snarePlay}>snare</CustomButton>
        </Wrapper>
    );
};

export default Drum;