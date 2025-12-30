// import emailjs from "@emailjs/browser";

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    console.log(formEl)

    // emailjs
    //   .sendForm(
    //     "service_jc0d6qd",
    //     "template_39r9uap",
    //     formEl,
    //     "b-wzbRGsVs8-zx1pc"
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       formEl.reset(); // reset the form
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="contactForm flex flex-col w-full min-w-75"
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
          name="Inquiry"
          placeholder="Write message"
          className="h-42.75 resize-none"
          required
        />
        <button type="submit" className=" buttonStyle mt-6">
          <img src="./icons/send.svg" alt="send icon" className="size-6" />
          <span>Send Inquiry</span>
        </button>
      </form>
    </div>
  );
}
