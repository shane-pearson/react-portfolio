import React from 'react';

const styles = {
  h1: {
    padding: 20,
  }, 
  h3: {
    textAlign: 'center',
  }, 
  h4: {
    textAlign: 'center',
  }, 
  p: {
    textAlign: 'center',
  }
};

export default function Contact() {
  return (
    <div>
      <h1 style={styles.h1}>Resume</h1>
      <h3 style={styles.h3}>Lake Washington School District</h3>
      <h4 style={styles.h4}>Tech Support Specialist</h4>
      <p style={styles.p}>
      At Lake Washington School District I effectively manage technology at multiple schools. I communicate district updates<br/> 
      to staff, support teachers in using their technology, and repair or facilitate repairs of district devices. This roles<br/>
      requires me to successfully organized and prioritize my personal schedule, so I can work most effectively. It requires <br/>
      me to be extremely detailed in documenting issues with technology, and how solutions resolved the issues. Finally it<br/>
      requires me to provide quick and personable customer service to all district staff.
      </p>
    </div>
  );
}