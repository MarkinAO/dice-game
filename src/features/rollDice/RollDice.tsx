import Dice from "../../widgets/dice/Dice";
import { diceImages } from "../../shared/consts/consts";
import { useEffect, useState } from "react";

export default function RollDice() {
    const [skin, setSkin] = useState(diceImages[0]);
    const roll = (count: number) => {
        const newCount = count + 1;
        if(newCount < 6) {
            const random = Math.round(Math.random() * 5);
            setSkin(diceImages[random])
            setTimeout(() => {
                roll(newCount)
            }, 300);
        }        
    }

    useEffect(() => {
        roll(0)
    }, [])
    return(
        <Dice skin={skin}/>
    )
}