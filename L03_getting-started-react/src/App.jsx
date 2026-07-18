function App() {

  return (
    <>
      <div style={{
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        lineHeight: '1.6',
        color: '#333333',
        maxWidth: '700px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)'
      }}>
        <header>
          <h1 style={{ color: '#1a1a1a', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>
            Mel G. Magdaraog
          </h1>
          <p style={{ color: '#666666', fontSize: '1.2rem', fontWeight: '400', marginTop: '0', marginBottom: '1.5rem' }}>
            Bachelor of Science in Information Systems — Year 3
          </p>
        </header>

        <hr style={{ border: '0', height: '1px', backgroundColor: '#e0e0e0', margin: '2rem 0' }} />

        <section>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>
            Fun Fact
          </h2>
          <p style={{ color: '#4a4a4a', textAlign: 'justify', marginBottom: '1.5rem' }}>
            I highly enjoy the satisfaction of completing tasks quickly, especially when working ahead of a long deadline.
          </p>
        </section>

        <section>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>
            Course Reflection
          </h2>
          <p style={{ color: '#4a4a4a', textAlign: 'justify', marginBottom: '1.5rem' }}>
            What I have learned so far in this course is that you truly cannot rely solely on AI; it is essential to apply your own critical thinking to achieve real success. Much like our previous activities, truly understanding instructions down to the last letter is paramount, which has helped me develop a strong ability to follow detailed requirements precisely. Interestingly, I have found that once we tackle the hardest concepts first, the remaining material becomes significantly easier to grasp. However, version control remains a notable challenge for me, particularly when managing Git and executing repository commits purely through the terminal interface. Ultimately, these rigorous experiences connect directly to my future career aspirations in the Information Systems field, reinforcing the diligence required to consistently satisfy both project stakeholders and clients alike.
          </p>
        </section>

        <section>
          <h2 style={{ color: '#2c3e50', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>
            Current Skill Focus
          </h2>
          <ul style={{ paddingLeft: '20px', color: '#4a4a4a' }}>
            <li style={{ marginBottom: '0.5rem' }}>Meticulous adherence to technical project specifications</li>
            <li style={{ marginBottom: '0.5rem' }}>Critical problem-solving and AI-assisted workflow optimization</li>
            <li style={{ marginBottom: '0.5rem' }}>Developing hands-on familiarity with Command Line Interface (CLI) Git workflows</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App