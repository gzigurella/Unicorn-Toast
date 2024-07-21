import { promises as fs } from 'fs';
import {NextResponse} from "next/server";

type Params = {
    name: string
}

export async function GET(request: Request) {
    console.log(`Received request to fetch all Projects`);
    const data = await fs.readFile(process.cwd() + '/src/app/projects/data.json', 'utf8');
    return NextResponse.json(JSON.parse(data));
}