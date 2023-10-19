import HomeButton from "@/components/HomeButton";
import {getForecastWeather} from "@/utils/getForecastWeather";

type Props = {
    params: {
        location: string
    }
    searchParams: {
        name: string
    }
}

export function generateMetadata({searchParams}: Props) {
    return {
        title: `${searchParams.name} weather`,
        description: `show ${searchParams.name} weather`
    }
}


export default async function Detail({params}: Props) {
    const location = params.location === 'new-york' ? 'new york' : params.location
    const res = await getForecastWeather(location)

    return (
        <>
            <h1>3 days {location} weather</h1>
            <ul>
                {res.forecast.forecastday.map(day => {
                    return (
                        <li key={day.date}>
                            <span>{day.date} / {day.day.condition.text}</span>
                        </li>
                    )
                })}
            </ul>
            <HomeButton/>
        </>
    )
}