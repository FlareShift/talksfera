import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import ImageSrc from '../../assets/images/RegistrationSection/registerImg.svg';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      setProgress(progress + 33);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress(progress - 33);
    }
  };

  const generateDayOptions = () => {
    let days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  const generateMonthOptions = () => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    return months;
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 100;
    let years = [];
    for (let i = currentYear; i >= minYear; i--) {
      years.push(i);
    }
    return years;
  };

  return (
    <div className={styles.registrationWrapper}>
      <div className={styles.registrationContainer}>
        <aside className={styles.registrationSidebar}>
          <h2>Create account</h2>
          <ul>
            <li className={step === 1 ? styles.active : ''}>User Profile</li>
            <li className={step === 2 ? styles.active : ''}>Residential Address</li>
            <li className={step === 3 ? styles.active : ''}>Services</li>
            <li className={step === 4 ? styles.active : ''}>Finish</li>
          </ul>
        </aside>
        <main className={styles.registrationFormSection}>
          <div className={styles.registrationProgressBar}>
            <div className={styles.registrationProgress} style={{ width: `${progress}%` }}></div>
          </div>
          {step === 1 && (
            <div className={styles.registrationFormStep}>
              <h3>User Profile</h3>
              <form>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />

                <label>Email</label>
                <input type="email" placeholder="Enter your email" />

                <label>Phone Number</label>
                <input type="text" placeholder="Enter your phone number" />

                <label>Date of Birth</label>
                <div className={styles.dobInputs}>
                  <select>
                    <option value="">Day</option>
                    {generateDayOptions().map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select>
                    <option value="">Month</option>
                    {generateMonthOptions().map((month, index) => (
                      <option key={index} value={index + 1}>{month}</option>
                    ))}
                  </select>
                  <select>
                    <option value="">Year</option>
                    {generateYearOptions().map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          )}
          {step === 2 && (
            <div className={styles.registrationFormStep}>
              <h3>Residential Address</h3>
              <form>
                <label>Country</label>
                <input type="text" placeholder="Enter your country" />

                <label>Region</label>
                <input type="text" placeholder="Enter your region" />

                <label>Settlement</label>
                <input type="text" placeholder="Enter your settlement" />
              </form>
              <button className={styles.skipButton}>Skip this part</button>
            </div>
          )}
          {step === 3 && (
            <div className={styles.registrationFormStep}>
              <h3>Services</h3>
              <form>
                <label>Therapy Type</label>
                <input type="text" placeholder="Enter therapy type" />

                <label>Insurance</label>
                <input type="text" placeholder="Enter insurance" />

                <label>Gender</label>
                <input type="text" placeholder="Enter gender" />

                <label>Relationship Status</label>
                <input type="text" placeholder="Enter relationship status" />
              </form>
            </div>
          )}
          {step === 4 && (
            <div className={styles.registrationFormStep}>
              <h3>Finish</h3>
              <p>Thank you for completing the registration!</p>
            </div>
          )}
          <div className={styles.registrationFormNavigation}>
            {step > 1 && <button onClick={handleBack}>Back</button>}
            {step < 4 && <button onClick={handleNext}>Next</button>}
          </div>
        </main>
        <div className={styles.registrationImageSection} style={{ backgroundImage: `url(${ImageSrc})` }}></div>
      </div>
    </div>
  );
};

export default Registration;
