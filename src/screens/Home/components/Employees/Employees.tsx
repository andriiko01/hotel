export const Employees: React.FC = () => {
  return (
    <form action="" method="post" className="employees__container">
      <div className="employees__item">
        <label htmlFor="firstName" className="employees__label">
          First name:
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          className="employees__input"
        />
      </div>
      <div className="employees__item">
        <label htmlFor="middleName" className="employees__label">
          Middle name:
        </label>
        <input
          type="text"
          name="middleName"
          id="middleName"
          placeholder="Middle name"
          className="employees__input"
        />
      </div>
      <div className="employees__item">
        <label htmlFor="lastName" className="employees__label">
          Last name:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last name"
          className="employees__input"
        />
      </div>
      <div className="employees__item">
        <label htmlFor="birthday" className="employees__label">
          Date of birth:
        </label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          placeholder="Date of birth"
          className="employees__input"
        />
      </div>
      <div className="employees__item">
        <label className="employees__label" />
        <input type="submit" className="employees__button" value="Create" />
      </div>
    </form>
  );
};
