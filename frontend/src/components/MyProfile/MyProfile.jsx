import React, { useState, useEffect } from 'react';
import './MyProfile.css';

const MyProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    location: '',
    country: '',
    gender: 'Woman',
    language: 'English',
    dateOfBirth: { day: '', month: '', year: '' },
    relationshipStatus: 'Single',
    insurance: '',
    bonuses: { promoCode: '', giftCertificates: '', requestFriend: '' },
    business: '',
    balance: '', // added balance field
  });

  useEffect(() => {
    const storedName = localStorage.getItem("user_name");
    if (storedName) {
      const [firstName, lastName] = storedName.split(" ");
      setProfile((prevProfile) => ({
        ...prevProfile,
        firstName: firstName || '',
        lastName: lastName || '',
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const saveChanges = () => {
    const fullName = `${profile.firstName} ${profile.lastName}`.trim();
    localStorage.setItem("user_name", fullName);
    console.log('Profile saved:', profile);
  };

  const generateAvatar = () => {
    const initials = `${profile.firstName[0] || ''}${profile.lastName[0] || ''}`.toUpperCase();
    return <div className="avatar large-avatar">{initials}</div>;
  };

  // Функция для вычисления процента заполненных полей
  const calculateCompletion = () => {
    const filledFields = Object.values(profile).reduce((acc, value) => {
      if (typeof value === 'object') {
        return acc + Object.values(value).filter(v => v !== '').length;
      }
      return acc + (value !== '' ? 1 : 0);
    }, 0);

    const totalFields = Object.keys(profile).reduce((acc, key) => {
      if (typeof profile[key] === 'object') {
        return acc + Object.values(profile[key]).length;
      }
      return acc + 1;
    }, 0);

    return (filledFields / totalFields) * 100;
  };

  const completionPercentage = calculateCompletion();

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="side-menu">
          <ul>
            <li className="active">User Profile</li>
            <li>Chats</li>
            <li>My specialists</li>
            <li>Messages</li>
            <li>Settings</li>
            <li>Support service</li>
            <li className="logout">Log Out</li>
          </ul>
        </div>
        <div className="profile-form">
          <div className="header-with-progress">
            <h1>My Profile</h1>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${completionPercentage}%` }}></div>
              <span className="progress-percent">{Math.round(completionPercentage)}%</span>
            </div>
          </div>
          <div className="form-grid">
            <div className="left-section">
              <div className="profile-picture">
                {generateAvatar()}
                <button className="edit-avatar">✏️</button>
              </div>
              <div className="form-row inline">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Region, Settlement</label>
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Country</label>
                <select
                  name="country"
                  value={profile.country}
                  onChange={handleChange}
                >
                  <option value="USA">USA</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>
            </div>

            <div className="right-section">
              <div className="form-row inline">
                <div>
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="gender-select"
                  >
                    <option value="Woman">Woman</option>
                    <option value="Man">Man</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label>Language</label>
                  <select
                    name="language"
                    value={profile.language}
                    onChange={handleChange}
                    className="language-select"
                  >
                    <option value="English">English</option>
                    <option value="Russian">Russian</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <label>Date of Birth</label>
                <div className="dob">
                  <select
                    name="day"
                    value={profile.dateOfBirth.day}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        dateOfBirth: { ...profile.dateOfBirth, day: e.target.value },
                      })
                    }
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>

                  <select
                    name="month"
                    value={profile.dateOfBirth.month}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        dateOfBirth: { ...profile.dateOfBirth, month: e.target.value },
                      })
                    }
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>

                  <select
                    name="year"
                    value={profile.dateOfBirth.year}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        dateOfBirth: { ...profile.dateOfBirth, year: e.target.value },
                      })
                    }
                  >
                    {Array.from({ length: 24 }, (_, i) => 2023 - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <label>Relationship Status</label>
                <select
                  name="relationshipStatus"
                  value={profile.relationshipStatus}
                  onChange={handleChange}
                >
                  <option value="Single">Single</option>
                  <option value="In a relationship">In a relationship</option>
                </select>
              </div>
              <div className="form-row">
                <label>Insurance</label>
                <input
                  type="text"
                  name="insurance"
                  value={profile.insurance}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <label>Bonuses</label>
                <input
                  type="text"
                  name="promoCode"
                  placeholder="Promocode"
                  value={profile.bonuses.promoCode}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      bonuses: { ...profile.bonuses, promoCode: e.target.value },
                    })
                  }
                />
                <input
                  type="text"
                  name="giftCertificates"
                  placeholder="Gift Certificates"
                  value={profile.bonuses.giftCertificates}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      bonuses: { ...profile.bonuses, giftCertificates: e.target.value },
                    })
                  }
                />
                <input
                  type="text"
                  name="requestFriend"
                  placeholder="Request Friend"
                  value={profile.bonuses.requestFriend}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      bonuses: { ...profile.bonuses, requestFriend: e.target.value },
                    })
                  }
                />
              </div>

              {/* New Business section */}
              <div className="form-row">
                <label>Business</label>
                <div className="business-field">
                  <input
                    type="text"
                    name="business"
                    value={profile.business}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Save button */}
              <button className="save-button" onClick={saveChanges}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
