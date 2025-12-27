'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SignupForm, RiskProfile } from '@/lib/signup/types';
import { REQUIRED_CONSENT_TEXT } from '@/lib/signup/consent';

type Step = 1 | 2;

type PwRules = {
  lengthOk: boolean;
  hasLetter: boolean;
  hasNumber: boolean;
  noSpace: boolean;
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function checkPassword(pw: string): PwRules {
  return {
    lengthOk: pw.length >= 8 && pw.length <= 20,
    hasLetter: /[A-Za-z]/.test(pw),
    hasNumber: /[0-9]/.test(pw),
    noSpace: !/\s/.test(pw),
  };
}

function isPasswordValid(pw: string) {
  const r = checkPassword(pw);
  return r.lengthOk && r.hasLetter && r.hasNumber && r.noSpace;
}

const signup = () => {};

export default signup;
