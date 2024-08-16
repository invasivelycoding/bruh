import React from 'react';
import ListCard from '../theme/listCard';
import json from '../../content/whyJoin.json';
export default () => {
  return (
    <div id="cta-section">
      <h2 className="text-center my-4">Why Join Us?</h2>
      <div className="row m-0">
        {json.map((edge, i) => (
          <div id="why-join" className="col-md-6 col-xl-3 p-2" key={edge.id}>
            <ListCard
              key={edge.id}
              title={edge.Reason}
              tagline={edge.Explanation}
              icon={edge.Icon}
            />
          </div>
        ))}
      </div>
      <div id="join-invitation" className="row">
        <div className="col-sm-8 col-lg-9 col-xl-10">
          <div className="d-flex align-items-center mb-2">
            <h6 className="bg-white text-dark p-2 rounded heading-font card">
              INVITING STUDENTS
            </h6>
          </div>
          <p>
            Tired of just learning about tech? Want to do tech? Iowa Tech Education is your answer. 
            Surround yourself with students of the same interest to learn and prepare for the future.
            Don't just dream about your tech career – build it. Join us today!
          </p>
        </div>
        <div className="col-sm-4 col-lg-3 col-xl-2 px-0 justify-content-center d-flex align-items-center">
          <a
            className="btn btn-lg button heading-font bg-light"
            role="button"
            href="https://join.amfoss.in/"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};
