// Récupère les éléments du DOM
const authModal = document.getElementById("authModal");
const closeAuth = authModal.querySelector(".close-auth");
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const signOutBtn = document.getElementById("signOutBtn");

// Ouvre/ferme la modale
function openAuth() {
  authModal.classList.remove("hidden");
}
function closeAuthModal() {
  authModal.classList.add("hidden");
}
closeAuth.addEventListener("click", closeAuthModal);

// Switch onglets
tabLogin.addEventListener("click", () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});
tabRegister.addEventListener("click", () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

// Gérer état de connexion
async function checkSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    signOutBtn.classList.remove("hidden");
  } else {
    signOutBtn.classList.add("hidden");
  }
}
checkSession();

// Connexion
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert("Erreur de connexion : " + error.message);
  } else {
    alert("Connecté ✅");
    closeAuthModal();
    checkSession();
  }
});

// Inscription
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("emailRegister").value;
  const password = document.getElementById("passwordRegister").value;
  const confirm = document.getElementById("confirmPassword").value;
  if (password !== confirm) {
    return alert("Les mots de passe ne correspondent pas.");
  }
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    alert("Erreur d’inscription : " + error.message);
  } else {
    alert("Inscription réussie ! Un email de confirmation a été envoyé.");
    // Tu peux basculer automatiquement vers l’onglet connexion
    tabLogin.click();
  }
});

// Déconnexion
signOutBtn.addEventListener("click", async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    alert("Erreur lors de la déconnexion : " + error.message);
  } else {
    alert("Déconnecté ✅");
    checkSession();
  }
});
