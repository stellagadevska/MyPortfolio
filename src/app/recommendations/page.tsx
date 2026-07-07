import RecommendWidget from "@/components/RecommendWidget";

export default function RecommendationsPage() {
  return (
    <section
      className='recommendations active section padd-15'
      id='recommendations'
    >
      <div className='container'>
        <div className='row padd-15'>
          <div className='section-title padd-15'>
            <h2>Recommendations</h2>
            <div className='wrapper padd-15'>
              <RecommendWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
