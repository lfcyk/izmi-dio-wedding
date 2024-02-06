import clientPromise from "../../../lib/mongodb";

export async function POST(req, { params }) {
    const client = await clientPromise;
    const db = client.db("wishes");

    const body = await req.json();

    let toInsert = {
        "name": body.name,
        "wish": body.wish,
        "date": new Date(),
    }
    let myPost = await db.collection("posts").insertOne(toInsert);

    return new Response(JSON.stringify("allPosts", null, 2), {status: 200})
}