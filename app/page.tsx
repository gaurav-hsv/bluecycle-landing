'use client';

import { useState } from 'react';

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
              <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                <img src="/bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                <span>Run Bluecycle Assessment</span>
              </li>
              <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#000000', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
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
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Identify high-risk data exposure</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Baseline identity and access permissions</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Enable Copilot safely for limited users</span>
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
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Governance policies for Copilot usage</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Data classification and sensitivity controls</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Improved visibility into Copilot activity</span>
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
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Automated policy enforcement</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Continuous monitoring and improvement</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Confident organization-wide Copilot adoption</span>
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
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Identify high-risk data exposure</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Baseline identity and access permissions</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
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
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Governance policies for Copilot usage</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Data classification and sensitivity controls</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
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
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Automated policy enforcement</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
                  <span>Continuous monitoring and improvement</span>
                </li>
                <li style={{ fontSize: '16px', lineHeight: '20px', letterSpacing: '-0.15px', color: '#FFFFFF', display: 'flex', alignItems: 'flex-start', fontFamily: 'Inter', fontWeight: '400' }}>
                  <img src="/white-bullet.png" alt="" style={{ width: '20px', height: '20px', marginTop: '2px', marginRight: '8px', flexShrink: 0 }} />
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
                className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                  isOpen ? 'rotate-180' : ''
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

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 px-[40px]">
        <div className="w-full mx-auto py-[30px] flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-[40px]">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="BlueCycle"
                className="transition-all duration-300 hover:scale-[0.936] cursor-pointer"
                style={{ width: '174px', height: '40px' }}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="px-4 py-2 text-white hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal"
                >
                  Solutions
                </button>
                {solutionsOpen && (
                  <div
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute top-full left-0 mt-2 bg-[#0a0e17] rounded-md shadow-xl overflow-hidden min-w-[200px] border border-[#1a1e2e]"
                  >
                    <a href="https://www.bluecycle.net/solutions/enterprise-secops" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-white hover:text-white hover:bg-[#0a387d] transition-all duration-200 text-[16px]">Enterprise</a>
                    <a href="https://www.bluecycle.net/solutions/mssps" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-white hover:text-white hover:bg-[#0a387d] transition-all duration-200 text-[16px]">MSSP/MDR/XDR</a>
                    <a href="https://www.bluecycle.net/solutions/security-vendors" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-white hover:text-white hover:bg-[#0a387d] transition-all duration-200 text-[16px]">Security Vendors</a>
                  </div>
                )}
              </div>

              {/* Partners Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setPartnersOpen(true)}
                  onMouseLeave={() => setPartnersOpen(false)}
                  className="px-4 py-2 text-white hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal"
                >
                  Partners
                </button>
                {partnersOpen && (
                  <div
                    onMouseEnter={() => setPartnersOpen(true)}
                    onMouseLeave={() => setPartnersOpen(false)}
                    className="absolute top-full left-0 mt-2 bg-[#0a0e17] rounded-md shadow-xl overflow-hidden min-w-[200px] border border-[#1a1e2e]"
                  >
                    <a href="https://www.bluecycle.net/partners/cribl/cribl-overview" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-white hover:text-white hover:bg-[#0a387d] transition-all duration-200 text-[16px]">Cribl</a>
                    <a href="https://www.bluecycle.net/coming-soon" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-white hover:text-white hover:bg-[#0a387d] transition-all duration-200 text-[16px]">AWS</a>
                    <a href="https://www.bluecycle.net/microsoft" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-white hover:text-white hover:bg-[#0a387d] transition-all duration-200 text-[16px]">Microsoft</a>
                  </div>
                )}
              </div>

              <a href="https://www.bluecycle.net/blog" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal">Blog</a>
              <a href="https://www.bluecycle.net/about" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white hover:bg-[#0a387d] hover:text-white rounded-lg transition-all duration-300 text-[18px] leading-[28px] font-normal">About</a>
            </nav>
          </div>

          {/* Right side - Get Started Button */}
          <div className="flex items-center gap-4">
            <a href="https://www.bluecycle.net/contact" target="_blank" rel="noopener noreferrer" className="hidden md:block px-5 py-2 bg-[#314158] hover:bg-[#0a387d] text-white rounded-[10px] text-[14px] leading-[20px] tracking-[-0.15px] font-medium transition-all duration-300">
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <a href="https://www.bluecycle.net/solutions/enterprise-secops" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">Enterprise</a>
              <a href="https://www.bluecycle.net/solutions/mssps" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">MSSP/MDR/XDR</a>
              <a href="https://www.bluecycle.net/solutions/security-vendors" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">Security Vendors</a>
              <a href="https://www.bluecycle.net/partners/cribl/cribl-overview" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">Cribl</a>
              <a href="https://www.bluecycle.net/coming-soon" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">AWS</a>
              <a href="https://www.bluecycle.net/microsoft" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">Microsoft</a>
              <a href="https://www.bluecycle.net/blog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">Blog</a>
              <a href="https://www.bluecycle.net/about" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3d8bfd] transition-colors text-[18px] leading-[28px] font-normal">About</a>
              <a href="https://www.bluecycle.net/contact" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-[#314158] hover:bg-[#3d5169] text-white rounded-[10px] text-[14px] leading-[20px] tracking-[-0.15px] font-medium transition-colors text-center">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO BANNER */}
      <section
        className="relative py-20 px-6 overflow-hidden bg-black"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative">
          <div
            className="relative rounded-[10px] overflow-hidden"
            style={{
              backgroundImage: 'url(/hero-inner-bg.png)',
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
                  Deploy Copilot in weeks—not months with audit-ready security
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
                  letterSpacing: '-0.45px'
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
              maxWidth: '900px'
            }}
          >
            Copilot doesn't create new data. It surfaces what your Microsoft 365 permissions already allow. If something is overshared today, Copilot can summarize it tomorrow. BlueCycle helps you see what Copilot will see and fix risky access, protection, and governance gaps before rollout.
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
                <img
                  src="/scan.png"
                  alt="Scan"
                  style={{ width: '40px', height: '40px' }}
                />
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
                <img
                  src="/Map.png"
                  alt="Map"
                  style={{ width: '40px', height: '40px' }}
                />
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
                <img
                  src="/document.png"
                  alt="Folder"
                  style={{ width: '40px', height: '40px' }}
                />
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
                <img
                  src="/list.png"
                  alt="List"
                  style={{ width: '40px', height: '40px' }}
                />
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
                <img
                  src="/flow.png"
                  alt="List"
                  style={{ width: '40px', height: '40px' }}
                />
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
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '8px', textAlign: 'left' }}>
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
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '8px', textAlign: 'left' }}>
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
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '8px', textAlign: 'left' }}>
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
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, marginTop: '8px', textAlign: 'left' }}>
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
          backgroundImage: 'url(/beyond-copilot-bg.png)',
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
                letterSpacing: '-0.44px'
              }}
            >
              TALK TO US ABOUT SECURE COPILOT AGENTS
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
                  letterSpacing: '-0.44px'
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
      <footer className="py-12 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-96 xl:gap-[32rem]">
            {/* Left Column */}
            <div>
              {/* Logo */}
              <div style={{ marginBottom: '12px' }}>
                <img
                  src="/logo.png"
                  alt="BlueCycle"
                  style={{ width: '208px', height: '48px' }}
                />
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#B2C4DD',
                  marginBottom: '24px',
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
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#B2C4DD',
                  textDecoration: 'underline',
                  display: 'block',
                  marginBottom: '24px'
                }}
                className="hover:text-white transition-colors"
              >
                info@bluecycle.net
              </a>

              {/* Copyright */}
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#B2C4DD'
                }}
              >
                Copyright 2020-2025. All rights reserved. <a href="https://www.bluecycle.net/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Inter', fontWeight: '400', fontSize: '18px', lineHeight: '28px', letterSpacing: '-0.45px', color: '#B2C4DD', textDecoration: 'underline' }} className="hover:text-white transition-colors">Privacy Policy</a>
              </p>
            </div>

            {/* Right Column - Quick Links */}
            <div>
              <h3
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '600',
                  fontSize: '22px',
                  lineHeight: '28px',
                  letterSpacing: '-0.45px',
                  color: '#FFFFFF',
                  marginBottom: '52px'
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
                    fontSize: '18px',
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
                    fontSize: '18px',
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
                    fontSize: '18px',
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
                    fontSize: '18px',
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
                    fontSize: '18px',
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
        </div>
      </footer>
    </main>
  );
}
