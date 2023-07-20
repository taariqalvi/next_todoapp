'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const EditTopicForm = ({ id, title, description }) => {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription })
            })

            if (!res.ok) {
                throw new Error("Failed to update topic")
            }

            router.push("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" placeholder="Topic Title" className="bg-slate-300 px-8 py-2" />

                <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" placeholder="Topic Description" className="bg-slate-300 px-8 py-2" />

                <button className="bg-purple-800 font-bold text-white py-3 px-6 w-fit rounded-full">Edit Topic</button>
            </form>
        </div>
    )
}

export default EditTopicForm
