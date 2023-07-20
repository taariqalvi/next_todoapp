import connectMongoDB from "@/database/mongodb"
import Topic from "@/models/topics"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    await connectMongoDB()
    const { title, description } = await request.json()
    await Topic.create({ title, description })
    return NextResponse.json({ message: "Title created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({ topics })
}

export async function DELETE(request) {
    await connectMongoDB()
    const id = request.nextUrl.searchParams.get("id")
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}






