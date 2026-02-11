import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="cont-px">
      <section className="mt-16">
        <h1 className="gradHeading">Get in touch with us</h1>
        <div className="mt-10 flex flex-col md:flex-row gap-x-20">
          <div>
            <p className="contentPara mb-10 md:mb-16">
              For strategic partnerships, investment opportunities, or corporate
              inquiries, please contact DALA Holding using the form below. Our
              team will respond at the earliest opportunity.
            </p>
            <div className="flex gap-x-4 mt-4 md:mt-8 mb-8 md:mb-0">
              <img src="./icons/email.svg" alt="email icon" className="size-6" />
              <div>
                <p className="font-bold text-xl leading-[150%]">Email Address</p>
                <p>info@dala.sa</p>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </section>
    </div>
  );
}
