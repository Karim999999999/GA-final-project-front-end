import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createCoop,
  getCities,
  getCoopTags,
  getPurchaseOptions,
} from '../../../../api/coops';
import { Link } from 'react-router-dom';
const CreateCoopForm = (data) => {
  const [cities, setCities] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getCities();
      setCities(gottenData);
    };
    getData();
  }, []);
  const [purchaseOptions, setPurchaseOptions] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getPurchaseOptions();
      setPurchaseOptions(gottenData);
    };
    getData();
  }, []);
  const [coopTag, setCoopTags] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const gottenData = await getCoopTags();
      setCoopTags(gottenData);
    };
    getData();
  }, []);

  const navigate = useNavigate();
  const [form, setForm] = React.useState({});
  const handleChange = (event) => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [tagsArray] = React.useState([]);
  const addTag = (event) => {
    tagsArray.push(event.target.value);
    console.log(tagsArray);
    setForm({ ...form, coop_tag: tagsArray });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createCoop(form);
        console.log('COOP CREATED');
        navigate('/discover');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  return (
    <div className="page">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">New Coop.</h1>
          <div className="form-field">
            <label htmlFor="coop_name">Coop Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="coop_name"
              placeholder="Love North Southwark"
            />
          </div>
          <div className="form-field">
            <label htmlFor="coop_description">Coop Description</label>
            <input
              onChange={handleChange}
              type="text"
              name="coop_description"
              placeholder="Give us an idea of what this coop is for, what are it's objectives? who does it service?"
            />
          </div>
          <div className="form-field">
            <label htmlFor="address_1">House</label>
            <input
              onChange={handleChange}
              type="text"
              name="address_1"
              placeholder="40 Sarrows House"
            />
          </div>
          <div className="form-field">
            <label htmlFor="address_2">Street</label>
            <input
              onChange={handleChange}
              type="text"
              name="address_2"
              placeholder="Sarrows Way"
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">City</label>
            <select name="city" onChange={handleChange}>
              <option selected disabled hidden>
                Select Field
              </option>
              {cities.map((city) => (
                <option value={city.id} key={city.id}>
                  {' '}
                  {city.city_name}{' '}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="post_code">Post Code</label>
            <input
              onChange={handleChange}
              type="text"
              name="post_code"
              placeholder="SE16 5JH"
            />
          </div>
          <div className="form-field">
            <label htmlFor="management_fee">Management Fee (£)</label>
            <input
              onChange={handleChange}
              type="number"
              name="management_fee"
              placeholder="0"
            />
          </div>
          <div className="form-field">
            <label htmlFor="bring_your_own_bag">Bring your own bags?</label>
            <select name="bring_your_own_bag" onChange={handleChange}>
              <option selected disabled hidden>
                Select Field
              </option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
          <div className="form-field">
            {/* {form.coop_tag ? (
              form.coop_tag.map((tag) => {
                return <h1 key={tag}>{tag}</h1>;
              })
            ) : (
              <p>No Tags Yet</p>
            )} */}
          </div>
          <div className="form-field">
            <label htmlFor="coop_tag">Coop Tags</label>
            <select name="coop_tag" onChange={addTag}>
              <option selected disabled hidden>
                Select Field
              </option>
              {coopTag.map((tag) => (
                <option value={tag.id} key={tag.id}>
                  {' '}
                  {tag.tag_name}{' '}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="purchase_ferquency_option">
              Purchase Frequency
            </label>
            <select name="purchase_ferquency_option" onChange={handleChange}>
              <option selected disabled hidden>
                Select Field
              </option>
              {purchaseOptions.map((option) => (
                <option value={option.id} key={option.id}>
                  {' '}
                  {option.option_name}:{option.length_days} Days{' '}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <div className="form-button">
              <button type="submit">CREATE</button>
              <button>
                <Link to="">CANCEL</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCoopForm;
