import Link from "next/link";

import style from './style.module.css'
import {getCurrentWeather} from "@/utils/getCurrentWeather";
import {getTime} from "@/utils/getTime";
import RevalidateButton from "@/components/RevalidateButton";

export default async function Home() {
    const res = await getCurrentWeather('seoul');
    const time = await getTime(res.location.tz_id);

    return (
        <>
            <h1>main</h1>
            <RevalidateButton tag={'time'}/>
            <h3>{time.dateTime}</h3>
            <ul className={style.list}>
                <li>
                    <Link href="/seoul?name=SEOUL">Seoul</Link>
                    <div>{res.current.condition.text}</div>
                </li>
                <li>
                    <Link href="/new-york?name=NEWYORK">New york</Link>
                </li>
                <li>
                    <Link href="/london?name=LONDON">London</Link>
                </li>
            </ul>
        </>
    )
}
