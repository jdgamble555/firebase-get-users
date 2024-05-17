import { PRIVATE_FIREBASE_ADMIN_CONFIG } from '$env/static/private';
import { getApps, initializeApp, cert, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const firebase_admin_config = JSON.parse(PRIVATE_FIREBASE_ADMIN_CONFIG);

// initialize admin firebase only once
export const app = getApps().length
    ? getApp()
    : initializeApp({
        credential: cert(firebase_admin_config)
    });

export const adminAuth = getAuth(app);
