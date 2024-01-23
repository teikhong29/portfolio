import Experience from './components/experience'
import EduCert from './components/eduCert'
import TechnicalSkills from './components/technicalSkills'

export default function Home() {
  return (
    <main id="main">
      {/* ======= Experience Section ======= */}
      <Experience />

      <EduCert />

      <TechnicalSkills />
    </main>
  )
}
