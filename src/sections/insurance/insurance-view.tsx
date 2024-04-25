import MainSection from './components/main-section'
import SearchSection from './components/search-section'

export default function InsuranceView() {
  return (
    <div className="min-h-screen">
      <SearchSection />
      <MainSection />
    </div>
  )
}
