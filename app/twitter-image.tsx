import { ImageResponse } from 'next/og';

export const alt = 'Fluxly Agency — Premium Web Design & Development Agency';
export const size = {
  width: 1200,
  height: 600,
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
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-150px',
            width: '600px',
            height: '600px',
            borderRadius: '300px',
            background: 'rgba(37, 99, 235, 0.08)',
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
            background: 'rgba(139, 92, 246, 0.08)',
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '950',
              fontSize: '38px',
            }}
          >
            F
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              letterSpacing: '-2px',
            }}
          >
            Fluxly<span style={{ color: '#3b82f6' }}> Agency</span>
          </span>
        </div>

        <p
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            maxWidth: '740px',
            textAlign: 'center',
            lineHeight: '1.4',
            margin: '0',
            fontWeight: '400',
          }}
        >
          Premium web design, development, UI/UX, branding &amp; SEO
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
