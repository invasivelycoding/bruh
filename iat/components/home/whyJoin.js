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
            Are you a person who thinks out of the box? Are you looking forward to
            take your technical skills to the next level? Looking for a
            like-passioned community that cares for you? The Opportunity is here,
            India's Leading Computer Science Club is inviting the best from
            Amritapuri to join the family, taking up the challenge. #BeTheNext
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
