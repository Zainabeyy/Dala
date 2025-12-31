export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData)

    // const data = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   inquiry: formData.get("inquiry"),
    // };

    // const res = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // console.log("message sent");

    // if (res.ok) {
    //   alert("Message sent!");
    //   event.currentTarget.reset();
    // } else {
    //   alert("Failed to send message");
    // }
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
    </form>
  );
}
