import { promises as fs } from 'fs';
import {NextResponse} from "next/server";

type Params = {
    name: string
}

type Project = {
    name: string,
    description: string,
    skillNames: string[]
}

export async function GET(request: Request, context: { params: Params }) {
    const name = context.params.name
    console.log(`Received request for project ${name}`);
    const data = await fs.readFile(process.cwd() + '/src/app/projects/data.json', 'utf8');
    let dataJSON: Project[] = JSON.parse(data);
    dataJSON = dataJSON.filter((value, idx)=> value.name === name);
    return NextResponse.json(dataJSON);
}