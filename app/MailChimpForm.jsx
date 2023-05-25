// 'use client';
// import { useRef } from 'react';
// import axios from 'axios';

// export default function MailChimpForm() {
//   const inputRef = useRef(null);

//   const subscribeUser = async (e) => {
//     e.preventDefault();

//     // this is where your mailchimp request is made
//     try {
//       const res = await axios.post('/api/subscribeUser', {
//         email: inputRef.current.value
//       });
//       console.log("res is ",res);
//       console.log("email is ",inputRef.current.value);
//     } catch (error) {
//       console.error("error while subscribing user", error);
//     }
//   };
  

//   //   const res = await fetch('/api/subscribeUser', {
//   //     body: JSON.stringify({
//   //       email: inputRef.current.value,
//   //     }),

//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },

//   //     method: 'POST',
//   //   });
//   //   console.log("Should be an email" ,inputRef.current.value); // good
//   // };

//   return (
//     <form onSubmit={subscribeUser}>
//       <label htmlFor="email-input" className="form__label">
//         Your Best Email
//       </label>

//       <input
//         type="email"
//         id="email-input"
//         name="email"
//         placeholder="your best email"
//         ref={inputRef}
//         required
//         autoCapitalize="off"
//         autoCorrect="off"
//       />

//       <button type="submit" value="" name="subscribe">
//         Subscribe
//       </button>
//     </form>
//   );
// }