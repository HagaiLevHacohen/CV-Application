import "../styles/GeneralInfo.css";

function GeneralInfo({ cvData, onChange }) {
  return (
    <section className="general-info">
      <h2>General Information</h2>

      <label htmlFor="input-name">Name:</label>
      <input
        id="input-name"
        name="name"
        type="text"
        value={cvData.name}
        onChange={onChange}
      />

      <label htmlFor="input-email">Email:</label>
      <input
        id="input-email"
        name="email"
        type="email"
        value={cvData.email}
        onChange={onChange}
      />

      <label htmlFor="input-phone">Phone Number:</label>
      <input
        id="input-phone"
        name="phone"
        type="tel"
        value={cvData.phone}
        onChange={onChange}
      />

      <label htmlFor="input-address">Address:</label>
      <input
        id="input-address"
        name="address"
        type="text"
        value={cvData.address}
        onChange={onChange}
      />
    </section>
  );
}

export default GeneralInfo;
