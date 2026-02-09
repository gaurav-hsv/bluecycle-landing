'use client';

import { useState, useEffect, useRef } from 'react';

// Path Cards Component
function PathCards() {
  return (
    <>
      {/* Desktop: Arrow graphic */}
      <div className="relative hidden lg:block" style={{ marginBottom: '0px' }}>
        <div className="w-full flex items-center justify-center" style={{ height: '5rem' }}>
          <img
            src="/arrow-path.png"
            alt="Path progression arrow"
            className="max-w-5xl w-full h-auto object-contain"
            style={{ marginTop: '160px' }}
          />
        </div>
      </div>

      {/* Desktop Cards */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 lg:gap-10 pt-5 lg:pt-10">
        {/* Card 1 - No Control */}
        <div className="w-full lg:w-[290px]" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#F2F2F2', height: '328px', display: 'flex', flexDirection: 'column', flexShrink: 0, maxWidth: '400px' }}>
          <div style={{ backgroundColor: '#BEC3CF', padding: '26px 24px', flexShrink: 0 }}>
            <h3 className="font-clash font-medium" style={{ fontSize: '20px', lineHeight: '120%', letterSpacing: '0.37px', color: '#000000', textAlign: 'center' }}>
              No Control over<br />Sharing & Data
            </h3>
          </div>
          <div style={{ backgroundColor: '#F2F2F2', padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                <svg width="20" className='w-6' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_33055_2983)">
                    <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_33055_2983">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span>Run Bluecycle Assessment</span>
              </li>
              <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                <svg width="20" className='w-6' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_33055_2983)">
                    <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_33055_2983">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span>Identify Gaps</span>
              </li>
              <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                <svg width="20" className='w-6' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_33055_2983)">
                    <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_33055_2983">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className='w-fit'>Develop Copilot Implementation Recommendation & Strategy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 - Minimum Viable */}
        <div className="w-full lg:w-[290px]" style={{ position: 'relative', height: '368px', flexShrink: 0, maxWidth: '400px' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3184FF', borderRadius: '4px', zIndex: 10, whiteSpace: 'nowrap' }}>
            <span style={{ color: '#3184FF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase' }}>WITHIN 1 WEEK</span>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#76A4EB', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#538BE6', padding: '38px 24px 26px 24px', flexShrink: 0 }}>
              <h3 className="font-clash font-medium" style={{ fontSize: '20px', lineHeight: '120%', letterSpacing: '0.37px', color: '#FFFFFF', textAlign: 'center' }}>
                Minimum Viable Copilot Readiness
              </h3>
            </div>
            <div style={{ backgroundColor: '#76A4EB', padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <p style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                Get started quickly with essential security controls in place
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Identify high-risk data exposure</span>
                </li>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Baseline identity and access permissions</span>
                </li>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit' >Enable Copilot safely for limited users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 - Maturing */}
        <div className="w-full lg:w-[290px]" style={{ position: 'relative', height: '408px', flexShrink: 0, maxWidth: '400px' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3184FF', borderRadius: '4px', zIndex: 10, whiteSpace: 'nowrap' }}>
            <span style={{ color: '#3184FF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase' }}>WITHIN 2-4 WEEKS</span>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1E61C5', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#1950A3', padding: '38px 24px 26px 24px', flexShrink: 0 }}>
              <h3 className="font-clash font-medium" style={{ fontSize: '20px', lineHeight: '120%', letterSpacing: '0.37px', color: '#FFFFFF', textAlign: 'center' }}>
                Maturing Copilot Readiness
              </h3>
            </div>
            <div style={{ backgroundColor: '#1E61C5', padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <p style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                Expand capabilities with governance and deeper data protection
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Governance policies for Copilot usage</span>
                </li>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Data classification and sensitivity controls</span>
                </li>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Improved visibility into Copilot activity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 4 - Optimal */}
        <div className="w-full lg:w-[290px]" style={{ position: 'relative', height: '448px', flexShrink: 0, maxWidth: '400px' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3184FF', borderRadius: '4px', zIndex: 10, whiteSpace: 'nowrap' }}>
            <span style={{ color: '#3184FF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase' }}>WITHIN 2-4 MONTHS</span>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#0D3B7A', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#0D2E60', padding: '38px 24px 26px 24px', flexShrink: 0 }}>
              <h3 className="font-clash font-medium" style={{ fontSize: '20px', lineHeight: '120%', letterSpacing: '0.37px', color: '#FFFFFF', textAlign: 'center' }}>
                Optimal Copilot Readiness
              </h3>
            </div>
            <div style={{ backgroundColor: '#0D3B7A', padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Inter', fontWeight: '400', opacity: 0.95 }}>
                Achieve full automation and organization-wide confidence
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Automated policy enforcement</span>
                </li>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Continuous monitoring and improvement</span>
                </li>
                <li className='gap-2' style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='w-fit'>Confident organization-wide Copilot adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cards with Arrows */}
      <div className="lg:hidden flex flex-col items-center gap-0 pt-8">
        {/* Card 1 - Increasing Copilot Enabled */}
        <div className="w-full max-w-[400px] relative" style={{ marginBottom: '16px' }}>
          <div
            className="relative rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(69deg, #3183FF 0%, #0751BF 100%)'
            }}
          >
            <h3 className="font-clash font-medium text-white" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0.37px' }}>
              Increasing Copilot Enabled Performance and Value to the organisation
            </h3>
          </div>
          {/* Arrow */}
          <div className="flex flex-col items-center" style={{ marginTop: '-1px' }}>
            {/* Arrow shaft + head merged with continuous gradient */}
            <div
              style={{
                width: '100px',
                height: '45px',
                background: 'linear-gradient(69deg, #3183FF 0%, #0751BF 100%)',
                clipPath: 'polygon(30% 0%, 70% 0%, 70% 33.33%, 100% 33.33%, 50% 100%, 0% 33.33%, 30% 33.33%)'
              }}
            />
          </div>
        </div>

        {/* Card 2 - No Control */}
        <div className="w-full max-w-[400px] relative">
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#E8E8E8' }}>
            <div style={{ backgroundColor: '#BEC3CF', padding: '20px' }}>
              <h3 className="font-clash font-medium text-center" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0.37px', color: '#000000' }}>
                No Control over Sharing & Data
              </h3>
            </div>
            <div style={{ backgroundColor: '#E8E8E8', padding: '20px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Run Bluecycle Assessment</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Identify Gaps</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Develop Copilot Implementation Recommendation & Strategy</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex flex-col items-center" style={{ marginTop: '-1px' }}>
            {/* Arrow shaft */}
            <div style={{ width: '40px', height: '15px', backgroundColor: '#E8E8E8' }} />
            {/* Arrow head */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '50px solid transparent',
                borderRight: '50px solid transparent',
                borderTop: '30px solid #E8E8E8'
              }}
            />
          </div>
        </div>

        {/* Card 3 - Minimum Viable */}
        <div className="w-full max-w-[400px] relative">
          <div style={{ position: 'relative', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3184FF', borderRadius: '4px', zIndex: 10, whiteSpace: 'nowrap', width: 'fit-content', marginTop: '0px', marginBottom: '0px' }}>
            <span style={{ color: '#3184FF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase' }}>WITHIN 1 WEEK</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#76A4EB' }}>
            <div style={{ backgroundColor: '#538BE6', padding: '40px 20px 20px 20px' }}>
              <h3 className="font-clash font-medium text-center" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0.37px', color: '#FFFFFF' }}>
                Minimum Viable Copilot Readiness
              </h3>
            </div>
            <div style={{ backgroundColor: '#76A4EB', padding: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                Get started quickly with essential security controls in place
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Identify high-risk data exposure</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Baseline identity and access permissions</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Enable Copilot safely for limited users</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex flex-col items-center" style={{ marginTop: '-1px' }}>
            {/* Arrow shaft */}
            <div style={{ width: '40px', height: '15px', backgroundColor: '#76A4EB' }} />
            {/* Arrow head */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '50px solid transparent',
                borderRight: '50px solid transparent',
                borderTop: '30px solid #76A4EB'
              }}
            />
          </div>
        </div>

        {/* Card 4 - Maturing (2-4 weeks) */}
        <div className="w-full max-w-[400px] relative">
          <div style={{ position: 'relative', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3184FF', borderRadius: '4px', zIndex: 10, whiteSpace: 'nowrap', width: 'fit-content', marginTop: '0px', marginBottom: '0px' }}>
            <span style={{ color: '#3184FF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase' }}>WITHIN 2-4 WEEKS</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#1E61C5' }}>
            <div style={{ backgroundColor: '#1950A3', padding: '40px 20px 20px 20px' }}>
              <h3 className="font-clash font-medium text-center" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0.37px', color: '#FFFFFF' }}>
                Maturing Copilot Readiness
              </h3>
            </div>
            <div style={{ backgroundColor: '#1E61C5', padding: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                Expand capabilities with governance and deeper data protection
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Governance policies for Copilot usage</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Data classification and sensitivity controls</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Improved visibility into Copilot activity</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex flex-col items-center" style={{ marginTop: '-1px' }}>
            {/* Arrow shaft */}
            <div style={{ width: '40px', height: '15px', backgroundColor: '#1E61C5' }} />
            {/* Arrow head */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '50px solid transparent',
                borderRight: '50px solid transparent',
                borderTop: '30px solid #1E61C5'
              }}
            />
          </div>
        </div>

        {/* Card 5 - Optimal (2-4 months) - NO ARROW */}
        <div className="w-full max-w-[400px] relative">
          <div style={{ position: 'relative', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '8px', backgroundColor: '#FFFFFF', border: '1px solid #3184FF', borderRadius: '4px', zIndex: 10, whiteSpace: 'nowrap', width: 'fit-content', marginTop: '0px', marginBottom: '0px' }}>
            <span style={{ color: '#3184FF', fontSize: '14px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textTransform: 'uppercase' }}>WITHIN 2-4 MONTHS</span>
          </div>
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: '#0D3B7A' }}>
            <div style={{ backgroundColor: '#0D2E60', padding: '40px 20px 20px 20px' }}>
              <h3 className="font-clash font-medium text-center" style={{ fontSize: '20px', lineHeight: '24px', letterSpacing: '0.37px', color: '#FFFFFF' }}>
                Maturing Copilot Readiness
              </h3>
            </div>
            <div style={{ backgroundColor: '#0D3B7A', padding: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'Inter', fontWeight: '400' }}>
                Achieve full automation and organization-wide confidence
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Automated policy enforcement</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Continuous monitoring and improvement</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>

                  <svg className="w-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_33055_2999)">
                      <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_33055_2999">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Confident organization-wide Copilot adoption</span>
                </li>
              </ul>
            </div>
          </div>
          {/* NO ARROW for last card */}
        </div>
      </div>
    </>
  );
}

// FAQ Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Microsoft Copilot readiness and why does it matter?",
      answer: "Microsoft Copilot readiness ensures your Microsoft 365 environment is secure, governed, and structured before Copilot is enabled. Copilot works by amplifying existing access to data if permissions, data classification, or governance are weak. Copilot can unintentionally expose sensitive information. Readiness ensures Copilot delivers value without introducing security, compliance, or data risks."
    },
    {
      question: "How is Copilot readiness different from just enabling Copilot?",
      answer: "Enabling Copilot turns the feature on.\nCopilot readiness ensures it is safe to use at scale.\nReadiness focuses on identity access, data exposure, governance, compliance, and monitoring so Copilot doesn't surface data it shouldn't, create audit gaps, or introduce regulatory risk. Without readiness, Copilot can amplify existing security issues."
    },
    {
      question: "What does the BlueCycle Copilot Readiness Assessment include?",
      answer: "BlueCycle's Copilot Readiness Assessment evaluates whether your Microsoft 365 environment can safely support Copilot. It includes:\n• Data exposure and oversharing risk analysis\n• Identity and access permission review\n• Governance and policy gap assessment\n• Compliance and auditability review\n• A prioritized remediation roadmap aligned to your rollout goals\n\nThe outcome is a clear readiness score and an actionable path to safe Copilot adoption."
    },
    {
      question: "Is Copilot readiness the same as AI or LLM readiness?",
      answer: "No. Copilot readiness is more specific.\n\nAI or LLM readiness applies broadly to building or deploying large language models across platforms. Copilot readiness focuses specifically on Microsoft Copilot and the Microsoft 365 security, data, and governance controls it relies on. It is a practical, environment-focused readiness model rather than a theoretical AI framework."
    },
    {
      question: "How does this help prevent data oversharing and leakage?",
      answer: "The assessment identifies overly broad permissions, misclassified data, and unprotected files that Copilot could surface. BlueCycle helps tighten access, apply sensitivity labels, and enforce governance controls so Copilot only accesses appropriate data reducing accidental exposure and leakage."
    },
    {
      question: "What risks do unmanaged or unapproved AI tools create?",
      answer: "Unmanaged or \"shadow AI\" tools operate outside IT and security controls. This can lead to:\n• Sensitive data being shared with external AI systems\n• No audit trail or accountability\n• Compliance and regulatory exposure\n• Loss of control over how data is processed or stored\n\nBlueCycle helps identify and mitigate these risks by aligning AI usage with security and governance policies."
    },
    {
      question: "Can this support Copilot pilots and phased rollouts?",
      answer: "Yes. BlueCycle's approach is designed for phased adoption.\nOrganizations can start with pilot-scale readiness for limited users, then incrementally mature governance, monitoring, and controls as Copilot scales across teams or the enterprise without slowing down innovation."
    },
    {
      question: "Do you only work with Microsoft security tools?",
      answer: "No. While we have deep expertise in Microsoft's native security stack (Defender, Purview, Entra, Sentinel), BlueCycle also works with broader security ecosystems including existing SIEM platforms and third-party security and data protection tools. We design readiness around your current environment."
    },
    {
      question: "Does Copilot readiness require re-architecting our environment?",
      answer: "No. BlueCycle follows a no rip-and-replace approach.\nWe assess and optimize your existing Microsoft 365 and security investments, closing gaps where needed rather than redesigning your environment from scratch."
    },
    {
      question: "Why choose BlueCycle over other Copilot readiness providers?",
      answer: "Most partners focus on enabling Copilot.\nBlueCycle focuses on making it safe to scale.\nWe approach Copilot readiness as a governance challenge, not a feature rollout. Our advisory-led, risk-based approach ensures Copilot adoption is secure, compliant, and sustainable aligned to real-world enterprise environments, not theoretical best practices."
    }
  ];

  return (
    <div className="w-full mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              border: '1px solid #08162A',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#070B15'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left flex items-center justify-between hover:bg-[#0a0e1a] transition-colors px-4 md:px-12 py-4"
              aria-expanded={isOpen}
            >
              <span
                className="text-white pr-4"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.44px'
                }}
              >{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              style={{
                maxHeight: isOpen ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
                backgroundColor: '#1D2838'
              }}
            >
              <div
                className="px-4 md:px-12 py-4"
                style={{
                  whiteSpace: 'pre-line',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.44px',
                  color: '#FFFFFF'
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);

  // Refs for click-outside detection
  const solutionsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsOpen && solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
      if (partnersOpen && partnersRef.current && !partnersRef.current.contains(event.target as Node)) {
        setPartnersOpen(false);
      }
    };

    // Only add listener when a dropdown is open
    if (solutionsOpen || partnersOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [solutionsOpen, partnersOpen]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm shadow-lg z-[102] md:px-[44px] px-6 transition-all duration-300`}>
        <div className=" w-full max-w-[1440px] mx-auto md:py-[46px] py-6 flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-[70px]">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="BlueCycle"
                className="transition-all md:w-40 w-32 h-auto duration-300 hover:scale-[0.936] cursor-pointer"
                
              />
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-2 transition-all duration-500 ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              {/* Solutions Dropdown */}
              <div
                className="relative"
                ref={solutionsRef}
              >
                <button
                  onClick={() => {
                    setSolutionsOpen(!solutionsOpen);
                    setPartnersOpen(false);
                  }}
                  className="px-4 py-1 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal"
                >
                  Solutions
                </button>
                {solutionsOpen && (
                  <div
                    className="absolute left-0 bg-[#1d2838]  rounded-md shadow-xl min-w-[200px] z-[100] pointer-events-auto"
                    style={{ top: 'calc(100% + 18px)' }}
                  >
                    <a href="https://www.bluecycle.net/solutions/enterprise-secops" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white transition-all duration-200 text-[16px] cursor-pointer pointer-events-auto rounded-t-md">Enterprise</a>
                    <a href="https://www.bluecycle.net/solutions/mssps" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white transition-all duration-200 text-[16px] cursor-pointer pointer-events-auto">MSSP/MDR/XDR</a>
                    <a href="https://www.bluecycle.net/solutions/security-vendors" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white transition-all duration-200 text-[16px] cursor-pointer pointer-events-auto rounded-b-md">Security Vendors</a>
                  </div>
                )}
              </div>

              {/* Partners Dropdown */}
              <div
                className="relative"
                ref={partnersRef}
              >
                <button
                  onClick={() => {
                    setPartnersOpen(!partnersOpen);
                    setSolutionsOpen(false);
                  }}
                  className="px-4 py-1 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal"
                >
                  Partners
                </button>
                {partnersOpen && (
                  <div
                    className="absolute left-0 bg-[#1d2838] rounded-md shadow-xl min-w-[200px] z-[100] pointer-events-auto"
                    style={{ top: 'calc(100% + 18px)' }}
                  >
                    <a href="https://www.bluecycle.net/partners/cribl/cribl-overview" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white transition-all duration-200 text-[16px] cursor-pointer pointer-events-auto rounded-t-md">Cribl</a>
                    <a href="https://www.bluecycle.net/coming-soon" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white transition-all duration-200 text-[16px] cursor-pointer pointer-events-auto">AWS</a>
                    <a href="https://www.bluecycle.net/microsoft" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white transition-all duration-200 text-[16px] cursor-pointer pointer-events-auto rounded-b-md">Microsoft</a>
                  </div>
                )}
              </div>

              <a href="https://www.bluecycle.net/blog" target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal">Blog</a>
              <a href="https://www.bluecycle.net/about" target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-[#9ca1a9] hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal">About</a>
            </nav>
          </div>

          {/* Right side - Get Started Button (desktop only) and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Get Started Button - Hidden on mobile, visible on desktop */}
            <a href="https://www.bluecycle.net/contact" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex px-[30px] py-[13px] bg-[#1d2838] hover:bg-[#3183ff] text-white rounded-2xl text-[18px] leading-[20px] tracking-[-0.15px]  transition-all duration-300 hover:skew-x-[-2deg]">
              Get Started
            </a>

            {/* Mobile Menu Button - Only on mobile/tablet */}
            <button
              className="lg:hidden text-white p-4 bg-[#1d2838] rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-4 h-4 relative">
                {/* Hamburger lines / Cross icon with transition */}
                <span className={`absolute left-0 w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] rotate-45' : 'top-[2px] rotate-0'}`} />
                <span className={`absolute left-0 top-[7px] w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                <span className={`absolute left-0 w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] -rotate-45' : 'top-[12px] rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-[40] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden
      />
      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed top-0 right-4 md:right-[44px] max-h-[65vh] w-max min-w-[200px] bg-[#1d2838] rounded-2xl shadow-2xl z-[41] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'translate-y-[120px] md:translate-y-[140px]' : '-translate-y-full pointer-events-none'}`}>
        <nav className="flex flex-col px-5 py-5 space-y-0.5">
          <div>
            <button
              onClick={() => { setMobileSolutionsOpen(!mobileSolutionsOpen); setMobilePartnersOpen(false); }}
              className={`w-full text-left text-[17px] leading-[26px] font-normal py-2.5 px-3 rounded-lg transition-colors ${mobileSolutionsOpen ? 'bg-[#0a387d] text-white' : 'text-white hover:bg-[#0a387d] hover:text-white'}`}
            >
              Solutions
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-3 pr-2 pb-1.5 space-y-0.5">
                <a href="https://www.bluecycle.net/solutions/enterprise-secops" target="_blank" rel="noopener noreferrer" className="block text-[#9ca1a9] hover:text-white hover:bg-[#0a387d] transition-colors text-[16px] leading-[24px] font-normal py-1.5 px-3 rounded-lg">Enterprise</a>
                <a href="https://www.bluecycle.net/solutions/mssps" target="_blank" rel="noopener noreferrer" className="block text-[#9ca1a9] hover:text-white hover:bg-[#0a387d] transition-colors text-[16px] leading-[24px] font-normal py-1.5 px-3 rounded-lg">MSSP/MDR/XDR</a>
                <a href="https://www.bluecycle.net/solutions/security-vendors" target="_blank" rel="noopener noreferrer" className="block text-[#9ca1a9] hover:text-white hover:bg-[#0a387d] transition-colors text-[16px] leading-[24px] font-normal py-1.5 px-3 rounded-lg">Security Vendors</a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => { setMobilePartnersOpen(!mobilePartnersOpen); setMobileSolutionsOpen(false); }}
              className={`w-full text-left text-[17px] leading-[26px] font-normal py-2.5 px-3 rounded-lg transition-colors ${mobilePartnersOpen ? 'bg-[#0a387d] text-white' : 'text-white hover:bg-[#0a387d] hover:text-white'}`}
            >
              Partners
            </button>
            {mobilePartnersOpen && (
              <div className="pl-3 pr-2 pb-1.5 space-y-0.5">
                <a href="https://www.bluecycle.net/partners/cribl/cribl-overview" target="_blank" rel="noopener noreferrer" className="block text-[#9ca1a9] hover:text-white hover:bg-[#0a387d] transition-colors text-[16px] leading-[24px] font-normal py-1.5 px-3 rounded-lg">Cribl</a>
                <a href="https://www.bluecycle.net/coming-soon" target="_blank" rel="noopener noreferrer" className="block text-[#9ca1a9] hover:text-white hover:bg-[#0a387d] transition-colors text-[16px] leading-[24px] font-normal py-1.5 px-3 rounded-lg">AWS</a>
                <a href="https://www.bluecycle.net/microsoft" target="_blank" rel="noopener noreferrer" className="block text-[#9ca1a9] hover:text-white hover:bg-[#0a387d] transition-colors text-[16px] leading-[24px] font-normal py-1.5 px-3 rounded-lg">Microsoft</a>
              </div>
            )}
          </div>
          <a href="https://www.bluecycle.net/blog" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-[#0a387d] transition-colors text-[17px] leading-[26px] font-normal py-2.5 px-3 rounded-lg block">Blog</a>
          <a href="https://www.bluecycle.net/about" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-[#0a387d] transition-colors text-[17px] leading-[26px] font-normal py-2.5 px-3 rounded-lg block">About</a>
        </nav>
      </div>

      {/* SECTION 1: HERO BANNER */}
      <section
        className="relative py-20 px-6 mt-10 overflow-hidden bg-black"
        style={{
          backgroundImage: 'url(/hero-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '120px'
        }}
      >
        <div className="max-w-7xl mx-auto relative">
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{
              backgroundImage: 'url(/hero-inner-bg.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative px-4 md:px-16 py-12 md:py-20 lg:py-[116px] text-center">
              <h1
                className="font-clash font-medium text-white text-[32px] md:text-[56px] lg:text-[80px] leading-[32px] md:leading-[56px] lg:leading-[80px]"
                style={{
                  letterSpacing: '-1.24px'
                }}
              >
                Fast-Track Your Path to<br className="hidden sm:block" /><span className="sm:hidden"> </span>Secure Microsoft 365 Copilot
              </h1>
              <p
                className="font-sans text-white max-w-3xl mx-auto mt-6 md:mt-9 text-[16px] md:text-[20px] lg:text-[24px] px-4"
                style={{
                  lineHeight: '115%',
                  letterSpacing: '-0.45px'
                }}
              >
                Deploy Copilot in weeks not months with audit-ready security
                and governance that scales with confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center mt-6 md:mt-9 gap-4 md:gap-[33.5px] px-4">
                <button
                  className="w-full sm:w-auto bg-white font-clash font-medium rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-[18px] md:text-[20px] lg:text-[24px] px-6 md:px-8 lg:px-[31px] py-4 md:py-5 lg:py-6"
                  style={{
                    color: '#3184FF',
                    lineHeight: '28px',
                    letterSpacing: '-0.44px'
                  }}
                >
                  Request Copilot Readiness Assessment
                </button>
                <button
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-clash font-medium rounded-lg hover:bg-white/10 transition-all text-[18px] md:text-[20px] lg:text-[24px] px-6 md:px-8 lg:px-[31px] py-4 md:py-5 lg:py-6"
                  style={{
                    lineHeight: '28px',
                    letterSpacing: '-0.44px'
                  }}
                >
                  Explore Readiness Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACCELERATE SECURE AI ADOPTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-clash font-medium text-white mb-6 text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
              style={{
                letterSpacing: '0.37px'
              }}
            >
              Accelerate secure AI<br />adoption with BlueCycle
            </h2>
            <p
              className="font-sans font-normal"
              style={{
                color: '#B2C4DD',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.45px'
              }}
            >
              Unlock the power of AI productivity quickly without compromising security, compliance, or control
            </p>
          </div>

          <div>
            {/* Section 1: Copilot Jumpstart Partner */}
            <div>
              <div className="flex justify-start">
                <img
                  src="/copilot jumpt-start.png"
                  alt="Copilot Jumpstart Partner"
                  style={{ width: '240px', height: '80px' }}
                />
              </div>
              <h3
                className="font-clash font-medium text-white"
                style={{
                  marginTop: '24px',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.37px'
                }}
              >
                Copilot Jumpstart Partner
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  marginTop: '16px',
                  color: '#B2C4DD',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.35px'
                }}
              >
                Top status Microsoft partner for any Copilot-driven transformation initiatives
              </p>
              <hr style={{ marginTop: '32px', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }} />
            </div>

            {/* Section 2: Security first approach */}
            <div style={{ marginTop: '32px' }}>
              <div className="flex justify-start">
                <img
                  src="/security-first-approch.png"
                  alt="Security first approach"
                  style={{ width: '212px', height: '255px' }}
                />
              </div>
              <h3
                className="font-clash font-medium text-white"
                style={{
                  marginTop: '24px',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.37px'
                }}
              >
                Security first approach
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  marginTop: '16px',
                  color: '#B2C4DD',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px'
                }}
              >
                Certified capabilities across identity & access management, information protection & governance, security operations, and cloud security
              </p>
              <hr style={{ marginTop: '32px', border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }} />
            </div>

            {/* Section 3: Capability across your security stack */}
            <div style={{ marginTop: '32px' }}>
              <div>
                {/* First row: Microsoft and Sentinel */}
                <div className="flex justify-start items-center" style={{ gap: '62.5px' }}>
                  <img
                    src="/microsoft-logo.png"
                    alt="Microsoft"
                    style={{ width: '140px', height: '30px' }}
                  />
                  <img
                    src="/sentinelone-logo.png"
                    alt="Sentinel"
                    style={{ width: '176.25px', height: '30px' }}
                  />
                </div>
                {/* Second row: CrowdStrike centered below first two logos */}
                <div className="flex justify-start" style={{ marginTop: '20px', marginLeft: '108.125px' }}>
                  <img
                    src="/crowdstrike-logo.png"
                    alt="CrowdStrike"
                    style={{ width: '162.5px', height: '30px' }}
                  />
                </div>
              </div>
              <h3
                className="font-clash font-medium text-white"
                style={{
                  marginTop: '24px',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.37px'
                }}
              >
                Capability across your security stack
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  marginTop: '16px',
                  color: '#B2C4DD',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px'
                }}
              >
                Deep competency across not just Microsoft but also SentinelOne, CrowdStrike, and other leading security solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COPILOT AMPLIFIES */}
      <section className="py-20 px-6" style={{ backgroundColor: '#1D2838' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className="font-clash font-medium text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
              style={{
                letterSpacing: '0.37px'
              }}
            >
              Copilot Amplifies What You Already Allow
            </h2>
            <p
              className="font-sans font-normal mx-auto"
              style={{
                marginTop: '24px',
                color: '#B2C4DD',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.45px',
                maxWidth: '980px'
              }}
            >
              Copilot doesn't create new data. It surfaces what your Microsoft 365 permissions already allow. <br /> If something is overshared today, Copilot can summarize it tomorrow. <br />BlueCycle helps you see what Copilot will see and fix risky access, protection, and governance gaps before rollout.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE RISKS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-clash font-medium text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
              style={{
                letterSpacing: '0.37px'
              }}
            >
              The Risks That Slow Copilot Adoption
            </h2>
            <p
              className="font-sans font-normal mx-auto"
              style={{
                marginTop: '24px',
                color: '#B2C4DD',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.45px'
              }}
            >
              Organizations across enterprise and mid-market segments are rapidly adopting AI assistants like Copilot. Recent industry studies show that nearly 8 in 10 organizations now use AI in at least one business function, yet many still lack visibility into data access, permissions, and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10" style={{ marginTop: '24px' }}>
            <div style={{ backgroundColor: 'rgba(15, 23, 43, 0.5)', padding: '16px 32px' }}>
              <div className="flex justify-center">
                <img
                  src="/folder.png"
                  alt="Oversharing & Access Sprawl"
                  style={{ width: '80px', height: '80px' }}
                />
              </div>
              <h3
                className="font-clash font-medium text-white text-center mx-auto max-w-full md:max-w-[80%]"
                style={{
                  marginTop: '16px',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.37px'
                }}
              >
                Oversharing & Access Sprawl
              </h3>
              <ul
                className="text-left"
                style={{
                  marginTop: '12px',
                  color: '#B2C4DD',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  listStyleType: 'disc',
                  paddingLeft: '20px'
                }}
              >
                <li>Overshared SharePoint, Teams, and OneDrive content</li>
                <li>Excessive permissions, broad groups, and guest access</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 23, 43, 0.5)', padding: '16px 32px' }}>
              <div className="flex justify-center">
                <img
                  src="/shield.png"
                  alt="Protection & Governance Gaps"
                  style={{ width: '80px', height: '80px' }}
                />
              </div>
              <h3
                className="font-clash font-medium text-white text-center mx-auto max-w-full md:max-w-[80%]"
                style={{
                  marginTop: '16px',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.37px'
                }}
              >
                Protection & Governance Gaps
              </h3>
              <ul
                className="text-left"
                style={{
                  marginTop: '12px',
                  color: '#B2C4DD',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  listStyleType: 'disc',
                  paddingLeft: '20px'
                }}
              >
                <li>Missing sensitivity labels, DLP, retention, and lifecycle controls</li>
                <li>Audit, legal, and regulatory exposure through unmanaged access paths</li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 23, 43, 0.5)', padding: '16px 32px' }}>
              <div className="flex justify-center">
                <img
                  src="/rocket.png"
                  alt="Adoption Without a Guardrail"
                  style={{ width: '80px', height: '80px' }}
                />
              </div>
              <h3
                className="font-clash font-medium text-white text-center mx-auto max-w-full md:max-w-[80%]"
                style={{
                  marginTop: '16px',
                  fontSize: '24px',
                  lineHeight: '32px',
                  letterSpacing: '0.37px'
                }}
              >
                Adoption Without a Guardrail
              </h3>
              <ul
                className="text-left"
                style={{
                  marginTop: '12px',
                  color: '#B2C4DD',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  listStyleType: 'disc',
                  paddingLeft: '20px'
                }}
              >
                <li>Shadow AI increases data leakage risk</li>
                <li>Poor information hygiene reduces Copilot answer quality and trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: LIGHT ASSESSMENT + PATH */}
      <section className="py-20 px-6" style={{ backgroundColor: '#cbe0ff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className="font-clash font-medium text-gray-900 text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
              style={{
                letterSpacing: '0.37px'
              }}
            >
              Get a Clear Read on Risk in 1–2 Days
            </h2>
            <p
              className="font-sans font-normal mx-auto"
              style={{
                marginTop: '24px',
                color: '#374151',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.45px',
                maxWidth: '900px',
                marginBottom: '48px'
              }}
            >
              A fast, automated baseline of the controls that matter plus a prioritized plan your team can execute.
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '32px' }}>
            <h3
              className="font-clash font-medium text-center text-[24px] md:text-[28px] lg:text-[32px] leading-[29px] md:leading-[34px] lg:leading-[38px]"
              style={{
                color: '#03205D',
                letterSpacing: '0.37px',
                marginBottom: '32px'
              }}
            >
              What's included:
            </h3>
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="flex flex-col lg:flex-row items-start px-4 md:px-8 lg:px-[35.33px] py-4 md:py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', gap: '16px', borderRadius: '16px' }}>

                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5H10.4167C11.107 2.5 11.6667 1.94036 11.6667 1.25C11.6667 0.559644 11.107 0 10.4167 0H5.41667C2.42512 0 0 2.42512 0 5.41667V10.4167C0 11.107 0.559644 11.6667 1.25 11.6667C1.94036 11.6667 2.5 11.107 2.5 10.4167V5.41667ZM2.5 27.9167C2.5 29.5275 3.80584 30.8333 5.41667 30.8333H10.4167C11.107 30.8333 11.6667 31.393 11.6667 32.0833C11.6667 32.7737 11.107 33.3333 10.4167 33.3333H5.41667C2.42512 33.3333 0 30.9082 0 27.9167V22.9167C0 22.2263 0.559644 21.6667 1.25 21.6667C1.94036 21.6667 2.5 22.2263 2.5 22.9167V27.9167ZM27.9167 2.5C29.5275 2.5 30.8333 3.80584 30.8333 5.41667V10.4167C30.8333 11.107 31.393 11.6667 32.0833 11.6667C32.7737 11.6667 33.3333 11.107 33.3333 10.4167V5.41667C33.3333 2.42512 30.9082 0 27.9167 0H22.9167C22.2263 0 21.6667 0.559644 21.6667 1.25C21.6667 1.94036 22.2263 2.5 22.9167 2.5H27.9167ZM30.8333 27.9167C30.8333 29.5275 29.5275 30.8333 27.9167 30.8333H22.9167C22.2263 30.8333 21.6667 31.393 21.6667 32.0833C21.6667 32.7737 22.2263 33.3333 22.9167 33.3333H27.9167C30.9082 33.3333 33.3333 30.9082 33.3333 27.9167V22.9167C33.3333 22.2263 32.7737 21.6667 32.0833 21.6667C31.393 21.6667 30.8333 22.2263 30.8333 22.9167V27.9167ZM26.665 15V21.6667C26.665 24.3295 24.5835 26.5061 21.9588 26.6582L21.665 26.6667H11.665C9.00224 26.6667 6.8256 24.5851 6.67353 21.9605L6.66504 21.6667V15H26.665ZM21.665 6.66667C24.3278 6.66667 26.5045 8.7482 26.6566 11.3729L26.665 11.6667V12.5H6.66504V11.6667C6.66504 9.00386 8.74657 6.82723 11.3713 6.67515L11.665 6.66667H21.665Z" fill="white" />
                  <path d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5H10.4167C11.107 2.5 11.6667 1.94036 11.6667 1.25C11.6667 0.559644 11.107 0 10.4167 0H5.41667C2.42512 0 0 2.42512 0 5.41667V10.4167C0 11.107 0.559644 11.6667 1.25 11.6667C1.94036 11.6667 2.5 11.107 2.5 10.4167V5.41667ZM2.5 27.9167C2.5 29.5275 3.80584 30.8333 5.41667 30.8333H10.4167C11.107 30.8333 11.6667 31.393 11.6667 32.0833C11.6667 32.7737 11.107 33.3333 10.4167 33.3333H5.41667C2.42512 33.3333 0 30.9082 0 27.9167V22.9167C0 22.2263 0.559644 21.6667 1.25 21.6667C1.94036 21.6667 2.5 22.2263 2.5 22.9167V27.9167ZM27.9167 2.5C29.5275 2.5 30.8333 3.80584 30.8333 5.41667V10.4167C30.8333 11.107 31.393 11.6667 32.0833 11.6667C32.7737 11.6667 33.3333 11.107 33.3333 10.4167V5.41667C33.3333 2.42512 30.9082 0 27.9167 0H22.9167C22.2263 0 21.6667 0.559644 21.6667 1.25C21.6667 1.94036 22.2263 2.5 22.9167 2.5H27.9167ZM30.8333 27.9167C30.8333 29.5275 29.5275 30.8333 27.9167 30.8333H22.9167C22.2263 30.8333 21.6667 31.393 21.6667 32.0833C21.6667 32.7737 22.2263 33.3333 22.9167 33.3333H27.9167C30.9082 33.3333 33.3333 30.9082 33.3333 27.9167V22.9167C33.3333 22.2263 32.7737 21.6667 32.0833 21.6667C31.393 21.6667 30.8333 22.2263 30.8333 22.9167V27.9167ZM26.665 15V21.6667C26.665 24.3295 24.5835 26.5061 21.9588 26.6582L21.665 26.6667H11.665C9.00224 26.6667 6.8256 24.5851 6.67353 21.9605L6.66504 21.6667V15H26.665ZM21.665 6.66667C24.3278 6.66667 26.5045 8.7482 26.6566 11.3729L26.665 11.6667V12.5H6.66504V11.6667C6.66504 9.00386 8.74657 6.82723 11.3713 6.67515L11.665 6.66667H21.665Z" fill="url(#paint0_linear_33141_1168)" />
                  <defs>
                    <linearGradient id="paint0_linear_33141_1168" x1="8.68055" y1="2.35732e-07" x2="29.4766" y2="28.2483" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3184FF" />
                      <stop offset="1" stop-color="#15386E" />
                    </linearGradient>
                  </defs>
                </svg>

                <p
                  className="font-clash font-medium text-left"
                  style={{
                    color: '#000000',
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '0.37px'
                  }}
                >
                  Tenant-wide posture scan across identity, sharing, devices, information protection, and governance
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start px-4 md:px-8 lg:px-[35.33px] py-4 md:py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', gap: '16px', borderRadius: '16px' }}>

                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16833 0.595V21.37L1.96887 26.4341C1.18935 26.982 0.13311 26.4895 0.0115446 25.5856L0 25.4114V7.69056C0 7.3417 0.145587 7.01155 0.396867 6.77694L0.53113 6.66795L9.16833 0.595ZM29.9924 1.07803L30.0039 1.25218V18.9731C30.0039 19.3219 29.8583 19.6521 29.607 19.8867L29.4728 19.9957L20.835 26.065V5.28833L28.035 0.229574C28.8146 -0.318414 29.8708 0.174131 29.9924 1.07803ZM11.6683 0.596667L18.335 5.28333V26.0617L11.6683 21.3717V0.596667Z" fill="white" />
                  <path d="M9.16833 0.595V21.37L1.96887 26.4341C1.18935 26.982 0.13311 26.4895 0.0115446 25.5856L0 25.4114V7.69056C0 7.3417 0.145587 7.01155 0.396867 6.77694L0.53113 6.66795L9.16833 0.595ZM29.9924 1.07803L30.0039 1.25218V18.9731C30.0039 19.3219 29.8583 19.6521 29.607 19.8867L29.4728 19.9957L20.835 26.065V5.28833L28.035 0.229574C28.8146 -0.318414 29.8708 0.174131 29.9924 1.07803ZM11.6683 0.596667L18.335 5.28333V26.0617L11.6683 21.3717V0.596667Z" fill="url(#paint0_linear_33141_2014)" />
                  <defs>
                    <linearGradient id="paint0_linear_33141_2014" x1="7.81351" y1="1.88564e-07" x2="23.7762" y2="24.3993" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3184FF" />
                      <stop offset="1" stop-color="#15386E" />
                    </linearGradient>
                  </defs>
                </svg>

                <p
                  className="font-clash font-medium text-left"
                  style={{
                    color: '#000000',
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '0.37px'
                  }}
                >
                  Copilot Exposure Map: where sensitive data and risky permissions may surface
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start px-4 md:px-8 lg:px-[35.33px] py-4 md:py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', gap: '16px', borderRadius: '16px' }}>

                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0013 3.33398V13.334C20.0013 15.1749 21.4937 16.6673 23.3346 16.6673H33.3346V33.334C33.3346 35.1749 31.8422 36.6673 30.0013 36.6673H18.652C20.52 34.7208 21.668 32.0781 21.668 29.1673C21.668 23.1842 16.8177 18.334 10.8346 18.334C9.35813 18.334 7.95062 18.6294 6.66797 19.1643V6.66732C6.66797 4.82637 8.16035 3.33398 10.0013 3.33398H20.0013ZM22.5013 4.16732V13.334C22.5013 13.7942 22.8744 14.1673 23.3346 14.1673H32.5013L22.5013 4.16732ZM20.0013 29.1673C20.0013 34.2299 15.8972 38.334 10.8346 38.334C5.77203 38.334 1.66797 34.2299 1.66797 29.1673C1.66797 24.1047 5.77203 20.0007 10.8346 20.0007C15.8972 20.0007 20.0013 24.1047 20.0013 29.1673ZM10.8346 23.334C10.3744 23.334 10.0013 23.7071 10.0013 24.1673V30.834C10.0013 31.2942 10.3744 31.6673 10.8346 31.6673C11.2949 31.6673 11.668 31.2942 11.668 30.834V24.1673C11.668 23.7071 11.2949 23.334 10.8346 23.334ZM10.8346 35.209C11.4099 35.209 11.8763 34.7426 11.8763 34.1673C11.8763 33.592 11.4099 33.1257 10.8346 33.1257C10.2593 33.1257 9.79297 33.592 9.79297 34.1673C9.79297 34.7426 10.2593 35.209 10.8346 35.209Z" fill="white" />
                  <path d="M20.0013 3.33398V13.334C20.0013 15.1749 21.4937 16.6673 23.3346 16.6673H33.3346V33.334C33.3346 35.1749 31.8422 36.6673 30.0013 36.6673H18.652C20.52 34.7208 21.668 32.0781 21.668 29.1673C21.668 23.1842 16.8177 18.334 10.8346 18.334C9.35813 18.334 7.95062 18.6294 6.66797 19.1643V6.66732C6.66797 4.82637 8.16035 3.33398 10.0013 3.33398H20.0013ZM22.5013 4.16732V13.334C22.5013 13.7942 22.8744 14.1673 23.3346 14.1673H32.5013L22.5013 4.16732ZM20.0013 29.1673C20.0013 34.2299 15.8972 38.334 10.8346 38.334C5.77203 38.334 1.66797 34.2299 1.66797 29.1673C1.66797 24.1047 5.77203 20.0007 10.8346 20.0007C15.8972 20.0007 20.0013 24.1047 20.0013 29.1673ZM10.8346 23.334C10.3744 23.334 10.0013 23.7071 10.0013 24.1673V30.834C10.0013 31.2942 10.3744 31.6673 10.8346 31.6673C11.2949 31.6673 11.668 31.2942 11.668 30.834V24.1673C11.668 23.7071 11.2949 23.334 10.8346 23.334ZM10.8346 35.209C11.4099 35.209 11.8763 34.7426 11.8763 34.1673C11.8763 33.592 11.4099 33.1257 10.8346 33.1257C10.2593 33.1257 9.79297 33.592 9.79297 34.1673C9.79297 34.7426 10.2593 35.209 10.8346 35.209Z" fill="url(#paint0_linear_33055_2952)" />
                  <defs>
                    <linearGradient id="paint0_linear_33055_2952" x1="9.9145" y1="3.33398" x2="32.3049" y2="30.8514" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3184FF" />
                      <stop offset="1" stop-color="#15386E" />
                    </linearGradient>
                  </defs>
                </svg>

                <p
                  className="font-clash font-medium text-left"
                  style={{
                    color: '#000000',
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '0.37px'
                  }}
                >
                  Risk scorecard and heatmap by control area
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start px-4 md:px-8 lg:px-[35.33px] py-4 md:py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', gap: '16px', borderRadius: '16px' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 10C2.5 7.92893 4.17893 6.25 6.25 6.25H10C12.0711 6.25 13.75 7.92893 13.75 10V13.75C13.75 15.8211 12.0711 17.5 10 17.5H6.25C4.17893 17.5 2.5 15.8211 2.5 13.75V10ZM18.75 7.5C18.0596 7.5 17.5 8.05964 17.5 8.75C17.5 9.44036 18.0596 10 18.75 10H36.25C36.9404 10 37.5 9.44036 37.5 8.75C37.5 8.05964 36.9404 7.5 36.25 7.5H18.75ZM18.75 23.75C18.0596 23.75 17.5 24.3096 17.5 25C17.5 25.6904 18.0596 26.25 18.75 26.25H36.25C36.9404 26.25 37.5 25.6904 37.5 25C37.5 24.3096 36.9404 23.75 36.25 23.75H18.75ZM17.5 13.75C17.5 13.0596 18.0596 12.5 18.75 12.5H30C30.6904 12.5 31.25 13.0596 31.25 13.75C31.25 14.4404 30.6904 15 30 15H18.75C18.0596 15 17.5 14.4404 17.5 13.75ZM18.75 28.75C18.0596 28.75 17.5 29.3096 17.5 30C17.5 30.6904 18.0596 31.25 18.75 31.25H30C30.6904 31.25 31.25 30.6904 31.25 30C31.25 29.3096 30.6904 28.75 30 28.75H18.75ZM6.25 22.5C4.17893 22.5 2.5 24.1789 2.5 26.25V30C2.5 32.0711 4.17893 33.75 6.25 33.75H10C12.0711 33.75 13.75 32.0711 13.75 30V26.25C13.75 24.1789 12.0711 22.5 10 22.5H6.25Z" fill="white" />
                  <path d="M2.5 10C2.5 7.92893 4.17893 6.25 6.25 6.25H10C12.0711 6.25 13.75 7.92893 13.75 10V13.75C13.75 15.8211 12.0711 17.5 10 17.5H6.25C4.17893 17.5 2.5 15.8211 2.5 13.75V10ZM18.75 7.5C18.0596 7.5 17.5 8.05964 17.5 8.75C17.5 9.44036 18.0596 10 18.75 10H36.25C36.9404 10 37.5 9.44036 37.5 8.75C37.5 8.05964 36.9404 7.5 36.25 7.5H18.75ZM18.75 23.75C18.0596 23.75 17.5 24.3096 17.5 25C17.5 25.6904 18.0596 26.25 18.75 26.25H36.25C36.9404 26.25 37.5 25.6904 37.5 25C37.5 24.3096 36.9404 23.75 36.25 23.75H18.75ZM17.5 13.75C17.5 13.0596 18.0596 12.5 18.75 12.5H30C30.6904 12.5 31.25 13.0596 31.25 13.75C31.25 14.4404 30.6904 15 30 15H18.75C18.0596 15 17.5 14.4404 17.5 13.75ZM18.75 28.75C18.0596 28.75 17.5 29.3096 17.5 30C17.5 30.6904 18.0596 31.25 18.75 31.25H30C30.6904 31.25 31.25 30.6904 31.25 30C31.25 29.3096 30.6904 28.75 30 28.75H18.75ZM6.25 22.5C4.17893 22.5 2.5 24.1789 2.5 26.25V30C2.5 32.0711 4.17893 33.75 6.25 33.75H10C12.0711 33.75 13.75 32.0711 13.75 30V26.25C13.75 24.1789 12.0711 22.5 10 22.5H6.25Z" fill="url(#paint0_linear_33055_2955)" />
                  <defs>
                    <linearGradient id="paint0_linear_33055_2955" x1="11.6146" y1="6.25" x2="27.1897" y2="33.1763" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3184FF" />
                      <stop offset="1" stop-color="#15386E" />
                    </linearGradient>
                  </defs>
                </svg>
                <p
                  className="font-clash font-medium text-left"
                  style={{
                    color: '#000000',
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '0.37px'
                  }}
                >
                  Prioritized remediation backlog (quick wins and sequencing aligned to your rollout)
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start px-4 md:px-8 lg:px-[35.33px] py-4 md:py-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', gap: '16px', borderRadius: '16px' }}>


                <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.626 16.6667C26.7927 16.6667 26.9553 16.7185 27.0915 16.8148C27.2275 16.911 27.3305 17.0468 27.3861 17.2038L28.0501 19.2432C28.2564 19.8632 28.6033 20.4282 29.0658 20.8903C29.5281 21.3523 30.0925 21.6998 30.7129 21.9059L32.7539 22.5684L32.7946 22.5781C32.9518 22.6336 33.0889 22.7368 33.1852 22.8727C33.2815 23.0087 33.3333 23.1716 33.3333 23.3382C33.3333 23.5049 33.2816 23.6676 33.1852 23.8037C33.0889 23.9398 32.9519 24.0428 32.7946 24.0983L30.7536 24.7607C30.1335 24.9668 29.5702 25.3148 29.1081 25.7764C28.6457 26.2384 28.2971 26.8034 28.0908 27.4235L27.4268 29.4629C27.4209 29.4795 27.4141 29.4956 27.4072 29.5117C27.3487 29.6477 27.2537 29.766 27.1322 29.8519C26.996 29.9481 26.8335 30 26.6667 30C26.4999 30 26.3373 29.9481 26.2012 29.8519C26.0651 29.7557 25.9621 29.6199 25.9066 29.4629L25.2425 27.4235C25.0927 26.9688 24.8667 26.5437 24.5752 26.167C24.4682 26.0287 24.3526 25.896 24.2285 25.7715C23.917 25.459 23.5577 25.2001 23.1673 25C22.9782 24.9031 22.7825 24.8186 22.5798 24.751L20.5387 24.0885C20.3815 24.0331 20.2445 23.9299 20.1481 23.7939C20.0518 23.6579 20 23.4951 20 23.3284C20 23.2208 20.0239 23.1158 20.0651 23.0176C20.0877 22.9637 20.114 22.9112 20.1481 22.863C20.1797 22.8184 20.2161 22.7778 20.2555 22.7409C20.2671 22.7301 20.2792 22.72 20.2913 22.71C20.3644 22.6492 20.448 22.6003 20.5387 22.5684L22.5798 21.9059C22.5853 21.904 22.5905 21.9013 22.596 21.8994C22.7795 21.835 22.9562 21.7551 23.1283 21.6667H23.1348C23.5287 21.4635 23.8896 21.1996 24.2025 20.8822C24.645 20.4331 24.9815 19.8895 25.1855 19.2936L25.2018 19.2432L25.8659 17.2038C25.9214 17.0468 26.0245 16.911 26.1605 16.8148C26.2966 16.7186 26.4592 16.6667 26.626 16.6667ZM22.9167 0C26.8287 3.42266e-07 30 3.17132 30 7.08333C30 10.9953 26.8287 14.1667 22.9167 14.1667H7.08333C5.01227 14.1667 3.33333 15.8456 3.33333 17.9167C3.33333 19.9877 5.01227 21.6667 7.08333 21.6667H18.9827C18.9574 21.6944 18.9287 21.7191 18.9046 21.748L18.7874 21.8994C18.5288 22.2646 18.376 22.6925 18.3415 23.1364L18.3333 23.3284L18.3415 23.5189C18.3759 23.9632 18.5286 24.392 18.7874 24.7575C18.8482 24.8432 18.9154 24.9233 18.986 25H7.08333C3.17132 25 0 21.8287 0 17.9167C3.22133e-07 14.0047 3.17132 10.8333 7.08333 10.8333H22.9167C24.9877 10.8333 26.6667 9.1544 26.6667 7.08333C26.6667 5.01227 24.9877 3.33333 22.9167 3.33333H18.3333C17.4129 3.33333 16.6667 2.58714 16.6667 1.66667C16.6667 0.746192 17.4129 4.69773e-08 18.3333 0H22.9167ZM4.16667 0C5.08714 0 5.83333 0.746192 5.83333 1.66667C5.83333 2.58714 5.08714 3.33333 4.16667 3.33333H1.66667C0.746192 3.33333 0 2.58714 0 1.66667C0 0.746192 0.746192 0 1.66667 0H4.16667ZM12.5 0C13.4205 0 14.1667 0.746192 14.1667 1.66667C14.1667 2.58714 13.4205 3.33333 12.5 3.33333H10C9.07952 3.33333 8.33333 2.58714 8.33333 1.66667C8.33333 0.746192 9.07952 4.02663e-08 10 0H12.5Z" fill="white" />
                  <path d="M26.626 16.6667C26.7927 16.6667 26.9553 16.7185 27.0915 16.8148C27.2275 16.911 27.3305 17.0468 27.3861 17.2038L28.0501 19.2432C28.2564 19.8632 28.6033 20.4282 29.0658 20.8903C29.5281 21.3523 30.0925 21.6998 30.7129 21.9059L32.7539 22.5684L32.7946 22.5781C32.9518 22.6336 33.0889 22.7368 33.1852 22.8727C33.2815 23.0087 33.3333 23.1716 33.3333 23.3382C33.3333 23.5049 33.2816 23.6676 33.1852 23.8037C33.0889 23.9398 32.9519 24.0428 32.7946 24.0983L30.7536 24.7607C30.1335 24.9668 29.5702 25.3148 29.1081 25.7764C28.6457 26.2384 28.2971 26.8034 28.0908 27.4235L27.4268 29.4629C27.4209 29.4795 27.4141 29.4956 27.4072 29.5117C27.3487 29.6477 27.2537 29.766 27.1322 29.8519C26.996 29.9481 26.8335 30 26.6667 30C26.4999 30 26.3373 29.9481 26.2012 29.8519C26.0651 29.7557 25.9621 29.6199 25.9066 29.4629L25.2425 27.4235C25.0927 26.9688 24.8667 26.5437 24.5752 26.167C24.4682 26.0287 24.3526 25.896 24.2285 25.7715C23.917 25.459 23.5577 25.2001 23.1673 25C22.9782 24.9031 22.7825 24.8186 22.5798 24.751L20.5387 24.0885C20.3815 24.0331 20.2445 23.9299 20.1481 23.7939C20.0518 23.6579 20 23.4951 20 23.3284C20 23.2208 20.0239 23.1158 20.0651 23.0176C20.0877 22.9637 20.114 22.9112 20.1481 22.863C20.1797 22.8184 20.2161 22.7778 20.2555 22.7409C20.2671 22.7301 20.2792 22.72 20.2913 22.71C20.3644 22.6492 20.448 22.6003 20.5387 22.5684L22.5798 21.9059C22.5853 21.904 22.5905 21.9013 22.596 21.8994C22.7795 21.835 22.9562 21.7551 23.1283 21.6667H23.1348C23.5287 21.4635 23.8896 21.1996 24.2025 20.8822C24.645 20.4331 24.9815 19.8895 25.1855 19.2936L25.2018 19.2432L25.8659 17.2038C25.9214 17.0468 26.0245 16.911 26.1605 16.8148C26.2966 16.7186 26.4592 16.6667 26.626 16.6667ZM22.9167 0C26.8287 3.42266e-07 30 3.17132 30 7.08333C30 10.9953 26.8287 14.1667 22.9167 14.1667H7.08333C5.01227 14.1667 3.33333 15.8456 3.33333 17.9167C3.33333 19.9877 5.01227 21.6667 7.08333 21.6667H18.9827C18.9574 21.6944 18.9287 21.7191 18.9046 21.748L18.7874 21.8994C18.5288 22.2646 18.376 22.6925 18.3415 23.1364L18.3333 23.3284L18.3415 23.5189C18.3759 23.9632 18.5286 24.392 18.7874 24.7575C18.8482 24.8432 18.9154 24.9233 18.986 25H7.08333C3.17132 25 0 21.8287 0 17.9167C3.22133e-07 14.0047 3.17132 10.8333 7.08333 10.8333H22.9167C24.9877 10.8333 26.6667 9.1544 26.6667 7.08333C26.6667 5.01227 24.9877 3.33333 22.9167 3.33333H18.3333C17.4129 3.33333 16.6667 2.58714 16.6667 1.66667C16.6667 0.746192 17.4129 4.69773e-08 18.3333 0H22.9167ZM4.16667 0C5.08714 0 5.83333 0.746192 5.83333 1.66667C5.83333 2.58714 5.08714 3.33333 4.16667 3.33333H1.66667C0.746192 3.33333 0 2.58714 0 1.66667C0 0.746192 0.746192 0 1.66667 0H4.16667ZM12.5 0C13.4205 0 14.1667 0.746192 14.1667 1.66667C14.1667 2.58714 13.4205 3.33333 12.5 3.33333H10C9.07952 3.33333 8.33333 2.58714 8.33333 1.66667C8.33333 0.746192 9.07952 4.02663e-08 10 0H12.5Z" fill="url(#paint0_linear_33141_2023)" />
                  <defs>
                    <linearGradient id="paint0_linear_33141_2023" x1="8.68055" y1="2.12159e-07" x2="26.7308" y2="27.2428" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3184FF" />
                      <stop offset="1" stop-color="#15386E" />
                    </linearGradient>
                  </defs>
                </svg>




                <p
                  className="font-clash font-medium text-left"
                  style={{
                    color: '#000000',
                    fontSize: '20px',
                    lineHeight: '32px',
                    letterSpacing: '0.37px'
                  }}
                >
                  Readout workshop and recommended rollout approach (pilot vs phased vs enterprise)
                </p>
              </div>
            </div>
          </div>

          {/* PATH WITH STEP CARDS - Now part of same section */}
          <div style={{ marginTop: '32px' }}>
            <h2
              className="font-clash font-medium text-center mx-auto text-[28px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[54px] px-4 lg:mb-10"
              style={{
                letterSpacing: '0.37px',
                background: 'linear-gradient(180deg, #3183FF 0%, #0751BF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              You leave with clarity on exposure, a plan to reduce it, and a path to launch Copilot safely.
            </h2>

            <PathCards />
          </div>
        </div>
      </section>

      {/* SECTION 7: SECURITY PARTNER */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-clash font-medium text-white mx-auto text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
              style={{
                letterSpacing: '0.37px',
                maxWidth: '900px'
              }}
            >
              Security-First Copilot Partner With Proven Microsoft Expertise
            </h2>
            <p
              className="font-sans font-normal"
              style={{
                marginTop: '24px',
                color: '#B2C4DD',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.45px'
              }}
            >
              Most partners focus on turning Copilot on. BlueCycle focuses on making it safe to scale, without slowing the business down.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: '32px' }}>
            <div style={{ border: '2px solid #90A1B9', borderRadius: '16px', padding: '27px 16px', textAlign: 'center' }}>
              <div className="flex justify-center">
                <img src="/spark.png" alt="Spark" style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF', marginTop: '8px' }}>
                Microsoft-backed Copilot Readiness
              </h3>
              <ul className='space-y-3' style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '10px', textAlign: 'left' }}>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Copilot Jumpstart Partner with proven readiness and rollout motions
                </li>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Help determining eligibility for Microsoft co-funding (often 300+ seats)
                </li>
              </ul>
            </div>

            <div style={{ border: '2px solid #90A1B9', borderRadius: '16px', padding: '27px 16px', textAlign: 'center' }}>
              <div className="flex justify-center">
                <img src="/security.png" alt="Security" style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF', marginTop: '8px' }}>
                Deep Microsoft Security Specialization
              </h3>
              <ul className='space-y-3' style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '10px', textAlign: 'left' }}>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Expertise across Entra, Purview, Defender, and Sentinel
                </li>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Built for auditability, least-privilege access, and continuous monitoring
                </li>
              </ul>
            </div>

            <div style={{ border: '2px solid #90A1B9', borderRadius: '16px', padding: '27px 16px', textAlign: 'center' }}>
              <div className="flex justify-center">
                <img src="/bot.png" alt="Bot" style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF', marginTop: '8px' }}>
                Automation-first, Integration-friendly Delivery
              </h3>
              <ul className='space-y-3' style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '10px', textAlign: 'left' }}>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Automated assessment accelerates time-to-plan from weeks to days

                </li>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Works with Microsoft-native and leading third-party security platforms (no rip-and-replace)

                </li>
              </ul>
            </div>

            <div style={{ border: '2px solid #90A1B9', borderRadius: '16px', padding: '27px 16px', textAlign: 'center' }}>
              <div className="flex justify-center">
                <img src="/support.png" alt="Support" style={{ width: '48px', height: '48px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF', marginTop: '8px' }}>
                We meet you where you are
              </h3>
              <ul className='space-y-3' style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '10px', textAlign: 'left' }}>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  No forced maturity models
                </li>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Start from your current state (not ideal state)

                </li>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Phased approach based on your readiness

                </li>
                <li style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '115%', letterSpacing: '-0.15px', color: '#90A1B9' }}>
                  Realistic timelines aligned to your constraints

                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WORKS WITH ENVIRONMENT */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="font-clash font-medium text-white text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
            style={{
              letterSpacing: '0.37px'
            }}
          >
            Works With Your Existing Environment
          </h2>
          <p
            className="font-clash font-medium mx-auto text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[38px] px-4"
            style={{
              marginTop: '24px',
              color: '#CBE0FF',
              letterSpacing: '0.37px',
              maxWidth: '800px',
              marginBottom: '24px'
            }}
          >
            Blue Cycle aligns Copilot controls with your existing security and governance stack.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
            <img src="/defender.png" alt="Microsoft Defender" className="h-8 md:h-12 w-auto" />
            <img src="/purview.png" alt="Microsoft Purview" className="h-8 md:h-12 w-auto" />
            <img src="/entra.png" alt="Microsoft Entra" className="h-8 md:h-12 w-auto" />
            <img src="/sentinel.png" alt="Microsoft Sentinel" className="h-8 md:h-12 w-auto" />
          </div>

          <p
            className="font-clash font-medium text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[38px]"
            style={{
              letterSpacing: '0.37px',
              color: '#CBE0FF',
              marginBottom: '15px'
            }}
          >
            Also works with
          </p>
          <p
            className="text-[16px] md:text-[20px] lg:text-[24px] px-4"
            style={{
              fontFamily: 'Inter',
              fontWeight: '600',
              lineHeight: '115%',
              letterSpacing: '-0.15px',
              color: '#FFFFFF'
            }}
          >
            Major endpoint security vendors&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Modern SIEM platforms&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Third-party DLP protection tools
          </p>
        </div>
      </section>

      {/* SECTION 9: BEYOND COPILOT */}
      <section
        className="py-20 px-6"
        style={{
          backgroundImage: 'url(/beyond-copilot-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <h2
              className="font-clash font-medium text-white mx-auto text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
              style={{
                letterSpacing: '0.37px',
                maxWidth: '800px'
              }}
            >
              Beyond Copilot Chat Secure AI Agents That Automate Work
            </h2>
            <p
              className="font-sans font-normal mx-auto"
              style={{
                marginTop: '24px',
                color: '#B2C4DD',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.45px',
                maxWidth: '800px'
              }}
            >
              Once your Microsoft 365 foundation is governed, we help you design and implement Copilot agents that are least-privilege, auditable, and built to scale safely.
            </p>
            <p
              className="font-clash font-medium text-[20px] md:text-[28px] lg:text-[32px] leading-[24px] md:leading-[34px] lg:leading-[38px]"
              style={{
                marginTop: '32px',
                letterSpacing: '0.37px',
                color: '#CBE0FF'
              }}
            >
              What We Offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
            <div style={{ backgroundColor: 'rgba(15, 23, 43, 0.5)', padding: '32px 16px', borderRadius: '16px', textAlign: 'center' }}>
              <div className="flex justify-center" style={{ marginBottom: '16px' }}>
                <img src="/botsparkle.png" alt="Bot Sparkle" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF' }}>
                Agent Design Sprint
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '18px', lineHeight: '28px', letterSpacing: '-0.45px', color: '#B2C4DD', marginTop: '12px' }}>
                Identify high-value workflows, define access boundaries, and map guardrails </p>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 23, 43, 0.5)', padding: '32px 16px', borderRadius: '16px', textAlign: 'center' }}>
              <div className="flex justify-center" style={{ marginBottom: '16px' }}>
                <img src="/shieldadd.png" alt="Shield Add" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF' }}>
                Secure Integration
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '18px', lineHeight: '28px', letterSpacing: '-0.45px', color: '#B2C4DD', marginTop: '12px' }}>
                Connect agents to approved data sources and business systems while staying inside governance controls</p>
            </div>

            <div style={{ backgroundColor: 'rgba(15, 23, 43, 0.5)', padding: '32px 16px', borderRadius: '16px', textAlign: 'center' }}>
              <div className="flex justify-center" style={{ marginBottom: '16px' }}>
                <img src="/toolbox.png" alt="Toolbox" style={{ width: '80px', height: '80px' }} />
              </div>
              <h3 className="font-clash font-medium" style={{ fontSize: '24px', lineHeight: '32px', letterSpacing: '0.37px', color: '#FFFFFF' }}>
                Build + Operationalize
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '18px', lineHeight: '28px', letterSpacing: '-0.45px', color: '#B2C4DD', marginTop: '12px' }}>
                Least-privilege access, auditability, monitoring, and change control from day one</p>
            </div>
          </div>

          <div className="text-center">
            <button
              className="font-clash font-semibold transition-all"
              style={{
                padding: '24px 29px',
                backgroundColor: '#FFFFFF',
                color: '#3184FF',
                borderRadius: '8px',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '-0.14px'
              }}
            >
              Talk to us about secure Copilot Agents
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid #1D293D' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #3184FF 0%, rgba(49, 132, 255, 0.1) 100%)' }}></div>

            <div className="relative text-center px-6 md:px-8 lg:px-[33px] py-12 md:py-20 lg:py-[153px] pb-12 md:pb-20 lg:pb-[121px]">
              <h2
                className="font-clash font-medium text-[28px] md:text-[36px] lg:text-[48px] leading-[32px] md:leading-[40px] lg:leading-[54px]"
                style={{
                  letterSpacing: '-0.37px',
                  color: '#FFFFFF'
                }}
              >
                Know your Copilot risk before you turn it on
              </h2>
              <p
                className="text-[16px] md:text-[18px] lg:text-[20px] px-4"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#DBEAFE',
                  marginTop: '24px'
                }}
              >
                Get a clear readiness score, prioritized actions, and a safe path to Copilot adoption.
              </p>
              <button
                className="font-clash font-semibold transition-all w-full sm:w-auto text-[16px] md:text-[18px] px-6 md:px-[26px] py-4 md:py-6"
                style={{
                  marginTop: '24px',
                  backgroundColor: '#FFFFFF',
                  color: '#3184FF',
                  borderRadius: '8px',
                  lineHeight: '28px',
                  letterSpacing: '-0.14px'
                }}
              >
                Request Copilot Readiness Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-clash font-medium text-white text-center text-[32px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[45px] lg:leading-[54px]"
            style={{
              letterSpacing: '0.37px',
              marginBottom: '48px'
            }}
          >
            Frequently asked questions
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:px-20 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-96 xl:gap-[32rem]">
            {/* Left Column */}
            <div>
              {/* Logo */}
              <div style={{ marginBottom: '12px' }}>
                <img
                  src="/logo.png"
                  alt="BlueCycle"
                  width={174}
                  height={40}
                  className='w-40 h-auto'
                />
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#B2C4DD',
                  marginBottom: '24px',
                  marginTop: '12px',
                  maxWidth: '500px'
                }}
              >
                Blue Cycle is a boutique crew of Cyber Defenders, coders, and a recovering SOAR founder. We have seen hundreds of SOCs and bring modern approaches to various Blue Team / Security Operations challenges facing Enterprises and MSSP / MDR Providers today.
              </p>

              {/* Email */}
              <a
                href="mailto:info@bluecycle.net"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#B2C4DD',
                  textDecoration: 'underline',
                  display: 'block'
                }}
                className="hover:text-white transition-colors"
              >
                info@bluecycle.net
              </a>
            </div>

            {/* Right Column - Quick Links */}
            <div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#FFFFFF',
                  marginBottom: '32px'
                }}
              >
                Quick Links
              </h3>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="https://www.bluecycle.net/partners/cribl/cribl-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.45px',
                    color: '#B2C4DD',
                    textDecoration: 'none'
                  }}
                  className="hover:text-white transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="https://www.bluecycle.net/partners/cribl/cribl-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.45px',
                    color: '#B2C4DD',
                    textDecoration: 'none'
                  }}
                  className="hover:text-white transition-colors"
                >
                  Partners
                </a>
                <a
                  href="https://www.bluecycle.net/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.45px',
                    color: '#B2C4DD',
                    textDecoration: 'none'
                  }}
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
                <a
                  href="https://www.bluecycle.net/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.45px',
                    color: '#B2C4DD',
                    textDecoration: 'none'
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="https://www.bluecycle.net/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.45px',
                    color: '#B2C4DD',
                    textDecoration: 'none'
                  }}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </nav>
            </div>
          </div>

          {/* Copyright Section - Separate */}
          <div style={{ marginTop: '48px', paddingTop: '24px' }}>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '28px',
                letterSpacing: '-0.45px',
                color: '#B2C4DD',
                textAlign: 'left'
              }}
            >
              Copyright 2020-2025. All rights reserved. <a href="https://www.bluecycle.net/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '16px', lineHeight: '28px', letterSpacing: '-0.45px', color: '#B2C4DD' }} className="hover:text-white transition-colors">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
