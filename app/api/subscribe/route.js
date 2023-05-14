import { MailerLite } from '@mailerlite/mailerlite-nodejs';
const MAILERLITE_GROUP_ID = 88175631753283556;

export async function POST(req, res) {
  if(req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }
  const { email } = req.body; // Destructure email from the request body

  const params = {
    email: email,
    groups: [MAILERLITE_GROUP_ID]
  };

  if(!email) {
    return res.status(400).json({ error: "Email is required" }); // Bad Request
  }

  // Initialize the MailerLite client
  // const mailerlite = MailerLite(process.env.MAILERLITE_API_KEY);
  const mailerlite = new MailerLite({ api_key: process.env.MAILERLITE_API_KEY});
  // add the subscriber
  try {
    await mailerlite.subscribers.createOrUpdate(params);
    return res.status(201).json({ success: true, message: "You have successfully subscribed!" }); // Created
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred when trying to subscribe the user'  }); // Internal Server Error
  }
}