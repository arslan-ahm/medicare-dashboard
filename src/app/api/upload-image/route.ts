import { uploadImage } from "@/lib/cloudinary";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";



export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    if (!file) {
        return NextResponse.json({ error: 'No file found' }, { status: 400 });
    }

    try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const res = await uploadImage(buffer, 'uploads') as {
            public_id: string;
            secure_url: string;
            format: string;
        }
        return NextResponse.json({
            public_id: res.public_id,
            url: res.secure_url,
            format: res.format
        }, { status: 200 }
        );
    } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) {
            return NextResponse.json({ error: error.message || "Failed to upload file." }, { status: 500 });
        }
    }
}