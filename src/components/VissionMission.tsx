

export default function VissionMission() {
  return (
    <div>
      <section className="imgTextSec">
        <div className="lg:max-w-110 2xl:max-w-3xl">
          <h2 className="gradHeading mb-8 2xl:mb-14">Vision</h2>
          <div className="contentPara space-y-6">
            <p>
              To be the leading Saudi holding company that bridges global
              innovation with regional opportunity — shaping sustainable growth
              and driving transformative partnerships that define the future of
              the Kingdom’s economy.
            </p>
            <p>
              We aspire to set a benchmark for strategic collaboration and
              value-driven investment by empowering industries, enabling
              technology transfer, and creating enduring impact across key
              economic sectors.
            </p>
          </div>
        </div>
        <img
          src="plane-img.webp"
          alt="an image of a plane with building"
          className="w-full max-w-110 h-auto rounded-4xl overflow-hidden"
        />
      </section>

      <section className="imgTextSec">
        <div className="lg:max-w-110 2xl:max-w-3xl lg:order-2">
          <h2 className="gradHeading mb-8 2xl:mb-14">Mission</h2>
          <div className="contentPara space-y-6">
            <p>
              At DALA Holding, our mission is to create long-term value through
              strategic partnerships and responsible investment. We are
              committed to building a diversified portfolio that supports Saudi
              Arabia’s Vision 2030 and contributes to the Kingdom’s
              transformation into a globally competitive economy.
            </p>
            <p>
              We focus on fostering knowledge exchange, local manufacturing, and
              innovation by aligning with world-class partners and emerging
              opportunities. Through disciplined governance, operational
              excellence, and a commitment to sustainability, we aim to deliver
              growth that benefits our shareholders, partners, and the wider
              community.
            </p>
          </div>
        </div>
        <img
          src="mission.webp"
          alt="Two men shaking hands over a contract."
          className="w-full max-w-110 h-auto rounded-4xl overflow-hidden lg:order-1"
        />
      </section>
    </div>
  );
}
