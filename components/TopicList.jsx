import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"

const getTopics = async () => {
    try {
        const result = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store"
        })

        if (!result.ok) {
            throw new Error("Failed to fetch topics")
        }
        return result.json()

    } catch (error) {
        console.log("Error loding topics", error)
    }
}

const TopicList = async () => {

    const { topics } = await getTopics()

    return (
        <>
            {topics.map((t, index) => (
                <div key={index} className="bg-slate-300 p-4 my-3 flex justify-between gap-5 items-end">
                    <div>
                        <h2 className="font-bold text-xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`} className="text-purple-800" title="Edit Topic"><HiPencilAlt size={24} /></Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TopicList