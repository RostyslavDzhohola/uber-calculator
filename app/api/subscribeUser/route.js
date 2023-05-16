
// import fetch from 'isomorphic-unfetch';
import { NextRequest } from "next/server";


export async function POST(req, res) {
  // res = await NextRequest(req, res); // optional, but useful for features like `previewMode` or `previewData`
  // if (typeof res.status !== 'function') {
  //   console.error('res is not an Express.js response object', res);
  //   return;
  // }

  // debugger; // this will stop the code from running and allow you to inspect the req object
  const body = await req.json();
  console.log("body is ",body);
  const { email } = body;

  console.log("email is", { email });
  console.log("MAILCHIMP_AUDIENCE_ID",process.env.MAILCHIMP_AUDIENCE_ID );
  console.log("MAILCHIMP_API_KEY",process.env.MAILCHIMP_API_KEY );

  
  if (!email) {
    console.log('Email is required');
    res.statusCode = 400;
    return res.json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
    };

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

    if (response.status >= 400) {
      res.statusCode = 400;
      return res.json({
        error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
      });
    }

    console.log('success')
    res.statusCode = 201;
    return res.send({ error: '' });
  } catch (error) {
    console.log(error.message || error.toString());
    res.statusCode = 500;
    return res.send({ error: error.message || error.toString() });
  }
};