export default function ContactForm() {
  return (
    <form className="contactForm flex flex-col w-full">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" className="my-2" />
      <textarea placeholder="Write message" className="h-42.75 resize-none" />
      <button type="submit" className=" buttonStyle mt-6">
        <img src="./icons/send.svg" alt="send icon" className="size-6" />
        <span>Send Inquiry</span>
      </button>
    </form>
  );
}
