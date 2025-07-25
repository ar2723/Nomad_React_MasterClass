import {useRecoilState} from "recoil";
import {hoursSelector, minutesState} from "../interface/todoInterface";

const Minutes = () => {
    const [minutes, setMinutes] = useRecoilState(minutesState);
    const [hours, setHours] = useRecoilState(hoursSelector);
    const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    };
    const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    }
    return (
        <>
            <input value={ minutes } onChange={ onMinutesChange } type="number" placeholder="Minutes"/>
            <input value={ hours } onChange={ onHoursChange } type="number" placeholder="Hours"/>
        </>
    )
}