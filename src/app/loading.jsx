'use client'; // Chỉ cần khi dùng trong App Router

import { useState, useEffect, useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Loading() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/loading.json') // Chỉ tải khi cần
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  const options = useMemo(
    () => ({
      animationData,
      loop: true,
      autoplay: true,
    }),
    [animationData]
  );

  if (!animationData) return <p>Đang tải...</p>;

  return (
    <Suspense fallback={<p>Đang tải animation...</p>}>
      <Lottie {...options} style={{ width: 200, height: 200 }} />
    </Suspense>
  );
}
