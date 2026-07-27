import { ImageResponse } from 'next/og';

export const alt = 'Fluxly Agency — Premium Web Design & Development Agency';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Subtle decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-150px',
            width: '600px',
            height: '600px',
            borderRadius: '300px',
            background: 'rgba(37, 99, 235, 0.1)',
            filter: 'blur(100px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            right: '-150px',
            width: '600px',
            height: '600px',
            borderRadius: '300px',
            background: 'rgba(139, 92, 246, 0.1)',
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '44px',
              boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
            }}
          >
            F
          </div>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              letterSpacing: '-2px',
            }}
          >
            Fluxly<span style={{ color: '#3b82f6' }}> Agency</span>
          </span>
        </div>

        <p
          style={{
            fontSize: '28px',
            color: '#94a3b8',
            maxWidth: '860px',
            textAlign: 'center',
            lineHeight: '1.4',
            margin: '0',
            fontWeight: '400',
          }}
        >
          Premium web design, development, UI/UX, branding &amp; SEO
        </p>

        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            gap: '12px',
          }}
        >
          {['Web Design', 'Development', 'Branding & SEO'].map((badge) => (
            <span
              key={badge}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 16px',
                borderRadius: '99px',
                fontSize: '14px',
                color: '#e2e8f0',
                fontWeight: '600',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
