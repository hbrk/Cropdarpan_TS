import React from 'react';
import './header.scss'


const download = () => {
  return (
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            About Crop Darpan
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                Normally, it is difficult for a typical farmer to identify the field problem. A typical farmer has to depend on agricultural expert to identify the crop problem.

                </p>
                <p>
                The Crop Darpan tool is built to enable the typical farmer to identify the crop  problem. It considers that farmer possesses the smart phone (or a note book/laptop) with the internet connection and visits the field.  The Crop Darpan tool guides the farmer to identify the field problem. After identifying the field problem, the farmer can take corrective steps by understanding the  diagnostic advice  provided by the system or contact the agricultural expert.
                </p>
                <p>
                The protocol is as follows.
Visit the crop filed with the smart phone.
Download and Install "Crop Darpan" app from playstore(for android devices only). or,
Visit the “Crop Darpan (www.cropdarpan.in) ” Web site.
Select the crop and language.
Repeat the following steps, till the system reports the crop problem based on your input and displays the advice.
Read each symptom related question carefully
Observe  the crop carefully
Click “YES” by confirming  the existence of the symptom
Give feedback regarding your experience at cropdarpan@gmail.com. Rate and Review our app in the playstore .

Thank you!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default download;
