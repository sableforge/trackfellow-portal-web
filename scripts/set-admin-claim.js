const admin = require('firebase-admin');
const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function grantCustomClaims(email, claims) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, claims);
    console.log(`Custom claims set for ${email} (UID: ${user.uid})`);
    console.log('Claims:', JSON.stringify(claims));
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      console.error(`No user found with email: ${email}`);
    } else {
      console.error('Failed to set custom claims:', error.message);
    }
    process.exit(1);
  }
}

grantCustomClaims('sajitha.wattage@gmail.com', { admin: true });
