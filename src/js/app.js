// Initialisation de Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Gestion de la connexion
const authModal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) throw error;

    // Redirection vers l'espace admin
    window.location.href = "/admin/";
  } catch (error) {
    alert(`Erreur de connexion: ${error.message}`);
  }
});
