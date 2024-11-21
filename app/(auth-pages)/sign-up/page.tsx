'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const { register } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Palun täida kõik väljad!');
      return;
    }
  
    const success = register(username, password);
    if (success) {
      router.push('/sign-in');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Registreeri</h1>
      <input
        type="text"
        placeholder="Kasutajanimi"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded p-2 mb-4"
      />
      <input
        type="password"
        placeholder="Parool"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded p-2 mb-4"
      />
      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Registreeri
      </button>

      <p className='mt-4 text-sm'>
        Oled juba kasutaja?{' '}
        <Link href="/sign-in" className="text-blue-500 underline">
          Logi sisse
        </Link>
      </p>
    </div>
  );
}
