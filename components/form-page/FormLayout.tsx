import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RoutesEnum, StepRouteList } from "../../domain/value-objects/Routes";
import { useStateMachine } from "little-state-machine";

export const FormLayout: React.FC = ({ children }) => {
    const [isRender, setRender] = useState<boolean>(false);

    const { state } = useStateMachine();
    const router = useRouter();

    const pathString = router.asPath as RoutesEnum;
    const routeIndex = StepRouteList.indexOf(pathString);
    const currentStepIndex = StepRouteList.indexOf(state.maxStep || StepRouteList[0]);

    useEffect(() => {
        if (routeIndex > currentStepIndex) {
            router.push(StepRouteList[currentStepIndex]);
        } else {
            setRender(true);
        }
    }, []);

    return <>{isRender && children}</>;
};
