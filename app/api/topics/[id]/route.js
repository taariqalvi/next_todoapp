import connectMongoDB from "@/database/mongodb"
import Topic from "@/models/topics"
import { NextResponse } from "next/server"

// update topic
export async function PUT(request, { params }) {
    const { id } = params
    const { newTitle: title, newDescription: description } = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ message: "Topic Updated" }, { status: 200 })
}

// select single topic
export async function GET(request, { params }) {
    await connectMongoDB()
    const { id } = params
    const topic = await Topic.findOne({ _id: id })
    return NextResponse.json({ topic }, { status: 200 })
}