import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

export async function POST(req: NextRequest) {
    const tag = req.nextUrl.searchParams.get('tag')
    if (!tag) throw new Error('No tag');

    revalidateTag(tag);
    return NextResponse.json({message: 'revalidate success', tag})
}