import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_xxxxxxxxx'); // Replace 're_xxxxxxxxx' with your real API key if not using .env

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        // 1. Insert into Supabase
        const { data: dbData, error: dbError } = await supabase
            .from('waitlist')
            .insert([{ email }])
            .select();

        if (dbError) {
            console.error('Supabase error:', dbError);
            // Waitlist specific error handling: might be a duplicate
            if (dbError.code === '23505') { // Postgres unique constraint violation
                return NextResponse.json({ error: 'Email already on the waitlist!' }, { status: 409 });
            }
            throw new Error('Failed to save to database');
        }

        // 2. Send confirmation email with Resend
        try {
            const { data: emailData, error: emailError } = await resend.emails.send({
                from: 'Ilan from Nudge <onboarding@resend.dev>',
                to: email,
                replyTo: 'ilanusman03@gmail.com',
                subject: 'You probably didn\'t expect this.',
                html: `
                  <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a; line-height: 1.7; font-size: 16px;">
                    <p>Hey,</p>

                    <p>You probably didn't expect a real email from the people building the app you just signed up for.</p>

                    <p>But Nudge isn't a big company with a support desk and marketing department. Right now it's just two people trying to build a product people genuinely enjoy using.</p>

                    <p>Most focus apps are good at blocking distractions, but they don't always make the experience feel engaging. Our goal with Nudge is to experiment with that — trying to make a productivity app that actually feels a bit fun to use while still helping you stay focused.</p>

                    <p>We're still early. Still refining things. Still figuring out what works and what doesn't.</p>

                    <p>You signed up before the launch, before the polish, before anyone is talking about it.</p>

                    <p><strong>That means something to us.</strong></p>

                    <p>When your invite arrives, we really want to know what you think — the good, the bad, and the brutally honest.</p>

                    <p>Early users shape products more than founders do.</p>

                    <p>Thanks for being here this early.</p>

                    <p>— Ilan<br/>
                    <span style="color: #555; font-size: 14px;">building Nudge</span></p>

                    <p style="color: #888; font-size: 13px; border-top: 1px solid #eee; padding-top: 16px; margin-top: 32px;">
                      (currently: two people and too much coffee)<br/><br/>
                      PS: If you ever reply to this email, it goes straight to us. No ticket system, no bots.
                    </p>
                  </div>
                `
            });

            if (emailError) {
                console.error('Resend error:', emailError);
                // We still successfully registered them, so don't fail completely
            }
        } catch (e) {
            console.error('Email send failed', e);
        }

        return NextResponse.json({ success: true, message: 'Joined waitlist successfully!' });
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}
