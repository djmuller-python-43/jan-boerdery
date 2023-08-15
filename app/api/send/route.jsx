import { EmailTemplate } from '@/app/(contact)/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json()

    const { fullname, email, message } = body

    const data = await resend.emails.send({
      from: "Info <info@duanemullerwebdesign.co.za>",
      to: email,
      subject: 'Duane Muller Web Design',
      react: EmailTemplate({ firstName: fullname })
    })
    if(data.status === 'success'){
      return NextResponse.json({ message: 'Email was sent successfully' })
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}