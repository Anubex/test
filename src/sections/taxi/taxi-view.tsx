import MainSection from './components/main-section'
import SearchSection from './components/search-section'
import SummarySection from './components/summary-section'

export default function DoctorAppointmentView() {
  return (
    <div className="min-h-screen">
      <SearchSection />
      <MainSection />
      <SummarySection />
    </div>
  )
}
