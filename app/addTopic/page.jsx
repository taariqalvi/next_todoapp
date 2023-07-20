'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const AddTopic = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!title || !description) {
            alert("Title and Description are required")
            return
        }
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, description })
            })

            if (res.ok) {
                router.push("/")
            } else {
                throw new Error("Failed to create the topic")
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" placeholder="Topic Title" className="bg-slate-300 px-8 py-2" value={title} onChange={(event) => setTitle(event.target.value)} />

                <input type="text" placeholder="Topic Description" className="bg-slate-300 px-8 py-2" value={description} onChange={(event) => setDescription(event.target.value)} />

                <button type="submit" className="bg-green-800 font-bold text-white py-3 px-6 w-fit rounded-full">Add Topic</button>
            </form>
        </div>
    )
}

export default AddTopic