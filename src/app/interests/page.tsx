import InterestCard from "@/components/InterestCard";
import { interests } from "@/data/interests";

export default function InterestsPage() {
  return (
    <section className='interests active section' id='interests'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>Interests</h2>
          </div>
        </div>

        <div className='row'>
          {interests.map((interest) => (
            <InterestCard key={interest.name} {...interest} />
          ))}
        </div>
      </div>
    </section>
  );
}
