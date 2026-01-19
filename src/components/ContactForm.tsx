import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      inquiry: formData.get("inquiry"),
    };

    try {
      
      const web3FormData = new FormData();
      web3FormData.append("access_key", "ed1b511e-415d-4a9a-896d-ceffa2a0c722");
      web3FormData.append("name", data.name as string);
      web3FormData.append("email", data.email as string);
      web3FormData.append("message", data.inquiry as string);

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const web3Data = await web3Response.json();

    
      const backendRes = await fetch(
        "https://dala-backend.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!backendRes.ok) {
        setResult("Failed to save to database");
        throw new Error(`Server error: ${backendRes.status}`);
      }

      await backendRes.json();
      
      if (web3Data.success) {
        setResult("Message sent successfully!");
        alert('Message sent successfully');
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Failed to send email");
        alert('Failed to send message');
      }
    } catch (err) {
      setResult("Failed to send message");
      alert('Failed to send message');
      console.error("Failed to send message:", err);
    }

  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col w-full min-w-75"
    >
      <input type="text" name="name" placeholder="Name" required />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="my-2"
        required
      />
      <textarea
        name="inquiry"
        placeholder="Write message"
        className="h-42.75 resize-none"
        required
      />
      <div className="gradButton mt-6 group">
        <button type="submit" className="w-full buttonStyle">
          <img src="./icons/send.svg" alt="send icon" className="size-6" />
          <span>Send Inquiry</span>
        </button>
      </div>
      {result && <p className="mt-4 text-center">{result}</p>}
    </form>
  );
}
