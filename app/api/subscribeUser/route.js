// This is server
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { email } = body;
  // console.log("MAILCHIMP_AUDIENCE_ID route.js",process.env.MAILCHIMP_AUDIENCE_ID );
  
  if (!email) {
    console.log('Email is required route.js');
    return new NextResponse(
      JSON.stringify({ error: 'Email is required' }),
      { status: 400 } 
    );
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
    };
    
    // TODO: When the user unsubscribes, or gets permanently deleted, his email must be sent to Mailchimp API with resubscribe status

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if(response.status === 200){
      return new NextResponse(
        JSON.stringify({ message: 'Email subscription successful' }),
        { status: 200 }
      );
    }

    if(response.status === 400){
      const data = await response.json();
      return new NextResponse(
        JSON.stringify({
          message: data.detail,
        }),
        { status: 400 }
      )
    };
    

    if (response.status > 400) {
      return new NextResponse(
        JSON.stringify({
          error: `There was an error subscribing to the newsletter. 
          Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
        }), 
        { status: 500 }
      );
    }
   
  } catch ( error ) {
    console.log("route.js error.message || error.toString()", error.message || error.toString());

    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to subscribe the user',
      }),
      { status: 500 }
    );
  }
};