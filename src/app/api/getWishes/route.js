import clientPromise from "../../../lib/mongodb";
export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
    const client = await clientPromise;
    const db = client.db("wishes");
    const allPosts = await db.collection("posts").find({}).toArray();
    return new Response(JSON.stringify({allPosts}, null, 2), {status: 200})
}