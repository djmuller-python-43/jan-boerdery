import { NextResponse } from "next/server";
import db from '@/lib/db'
import Contact from '@/models/Contact'


export async function POST(request: Request) {
  try {

    await db.connect()
    const { fullname, email, message } = await request.json()

    const isExisting = await Contact.findOne({ email })

    if(isExisting) {
      throw new Error('User already exists!')
    }

    await Contact.create({ fullname, email, message })
    
    return NextResponse.json({ message: "Email sent successfully", success: true });

  } catch (err) {

    console.log(err);

    return NextResponse.json({ message: err, success: false });

  }
}